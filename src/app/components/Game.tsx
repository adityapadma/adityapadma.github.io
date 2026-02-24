import { useEffect, useRef, useCallback } from "react";
import { Link } from "react-router";

// ──────────────────────────────────────────────
// Constants
// ──────────────────────────────────────────────
const CW = 560;
const CH = 500;
const COLS = 9;
const ROWS = 4;
const EW = 36;
const EH = 26;
const EPADX = 18;
const EPADY = 14;
const ETOP = 72;
const PW = 44;
const PH = 28;
const PY = CH - PH - 22;
const BW = 4;
const BH = 14;
const P_SPEED = 5;
const B_SPEED = 8;
const EB_SPEED = 3;

const ROW_EMOJIS = ["👾", "🤖", "🛸", "💀"];
const ROW_POINTS = [30, 20, 20, 10];
const ROW_COLORS = ["#ff6b6b", "#ffd166", "#06d6a0", "#74b9ff"];

interface Enemy {
  x: number;
  y: number;
  alive: boolean;
  row: number;
  col: number;
}
interface Bullet {
  x: number;
  y: number;
}

interface GS {
  px: number;
  pbullet: Bullet | null;
  ebullets: Bullet[];
  enemies: Enemy[];
  dir: number;
  speed: number;
  score: number;
  lives: number;
  over: boolean;
  won: boolean;
  frame: number;
  lastEShot: number;
  lastPShot: number;
  wave: number;
  stars: { x: number; y: number; r: number; a: number }[];
  dropping: boolean;
  dropAmt: number;
}

function makeEnemies(): Enemy[] {
  const arr: Enemy[] = [];
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      arr.push({ x: 28 + c * (EW + EPADX), y: ETOP + r * (EH + EPADY), alive: true, row: r, col: c });
    }
  }
  return arr;
}

function makeStars() {
  return Array.from({ length: 80 }, () => ({
    x: Math.random() * CW,
    y: Math.random() * CH,
    r: Math.random() * 1.5 + 0.3,
    a: Math.random() * 0.6 + 0.3,
  }));
}

function initGS(wave = 1, prevScore = 0): GS {
  return {
    px: CW / 2 - PW / 2,
    pbullet: null,
    ebullets: [],
    enemies: makeEnemies(),
    dir: 1,
    speed: 0.5 + (wave - 1) * 0.18,
    score: prevScore,
    lives: 3,
    over: false,
    won: false,
    frame: 0,
    lastEShot: 0,
    lastPShot: 0,
    wave,
    stars: makeStars(),
    dropping: false,
    dropAmt: 0,
  };
}

export function Game() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gsRef = useRef<GS>(initGS());
  const keysRef = useRef<Set<string>>(new Set());
  const rafRef = useRef<number>(0);
  const overlayRef = useRef<"none" | "over" | "won">("none");
  const overlayScoreRef = useRef(0);
  const overlayWaveRef = useRef(1);

  // ── Drawing helpers ──
  const drawShip = (ctx: CanvasRenderingContext2D, x: number, y: number) => {
    ctx.save();
    // Body
    ctx.beginPath();
    ctx.moveTo(x + PW / 2, y);
    ctx.lineTo(x + PW, y + PH);
    ctx.lineTo(x + PW * 0.65, y + PH * 0.75);
    ctx.lineTo(x + PW / 2, y + PH * 0.85);
    ctx.lineTo(x + PW * 0.35, y + PH * 0.75);
    ctx.lineTo(x, y + PH);
    ctx.closePath();
    ctx.fillStyle = "#a8d8ff";
    ctx.fill();
    // Cockpit
    ctx.beginPath();
    ctx.ellipse(x + PW / 2, y + PH * 0.35, 6, 9, 0, 0, Math.PI * 2);
    ctx.fillStyle = "#0d47a1";
    ctx.fill();
    // Engine glow
    ctx.beginPath();
    ctx.ellipse(x + PW / 2, y + PH, 8, 4, 0, 0, Math.PI * 2);
    const grd = ctx.createRadialGradient(x + PW / 2, y + PH, 0, x + PW / 2, y + PH, 10);
    grd.addColorStop(0, "rgba(255,200,0,0.9)");
    grd.addColorStop(1, "rgba(255,100,0,0)");
    ctx.fillStyle = grd;
    ctx.fill();
    ctx.restore();
  };

  const drawEnemy = (ctx: CanvasRenderingContext2D, e: Enemy) => {
    if (!e.alive) return;
    ctx.save();
    ctx.font = `${EH}px sans-serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(ROW_EMOJIS[e.row], e.x + EW / 2, e.y + EH / 2);
    ctx.restore();
  };

  const drawBullet = (ctx: CanvasRenderingContext2D, b: Bullet, isPlayer: boolean) => {
    ctx.save();
    ctx.beginPath();
    ctx.roundRect(b.x, b.y, BW, BH, 2);
    ctx.fillStyle = isPlayer ? "#ffd166" : "#ff4757";
    ctx.shadowColor = isPlayer ? "#ffd166" : "#ff4757";
    ctx.shadowBlur = 6;
    ctx.fill();
    ctx.restore();
  };

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const gs = gsRef.current;

    // Background
    ctx.fillStyle = "#060a1a";
    ctx.fillRect(0, 0, CW, CH);

    // Stars
    gs.stars.forEach((s) => {
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${s.a})`;
      ctx.fill();
    });

    // Ground line
    ctx.strokeStyle = "rgba(100,130,200,0.25)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, PY + PH + 10);
    ctx.lineTo(CW, PY + PH + 10);
    ctx.stroke();

    // Draw enemies
    gs.enemies.forEach((e) => drawEnemy(ctx, e));

    // Player bullet
    if (gs.pbullet) drawBullet(ctx, gs.pbullet, true);

    // Enemy bullets
    gs.ebullets.forEach((b) => drawBullet(ctx, b, false));

    // Player
    drawShip(ctx, gs.px, PY);

    // HUD
    ctx.save();
    ctx.font = "bold 15px monospace";
    ctx.fillStyle = "#a8d8ff";
    ctx.textAlign = "left";
    ctx.fillText(`SCORE: ${gs.score}`, 12, 22);
    ctx.textAlign = "right";
    ctx.fillText(`WAVE ${gs.wave}`, CW - 12, 22);
    // Lives
    for (let i = 0; i < gs.lives; i++) {
      ctx.font = "16px sans-serif";
      ctx.textAlign = "left";
      ctx.fillText("💙", 12 + i * 24, CH - 12);
    }
    ctx.restore();

    // Overlay
    if (overlayRef.current !== "none") {
      ctx.save();
      ctx.fillStyle = "rgba(6,10,26,0.82)";
      ctx.fillRect(0, 0, CW, CH);
      ctx.textAlign = "center";
      if (overlayRef.current === "over") {
        ctx.font = "bold 40px monospace";
        ctx.fillStyle = "#ff4757";
        ctx.fillText("GAME OVER", CW / 2, CH / 2 - 44);
        ctx.font = "20px monospace";
        ctx.fillStyle = "#a8d8ff";
        ctx.fillText(`Final Score: ${overlayScoreRef.current}`, CW / 2, CH / 2);
        ctx.font = "16px monospace";
        ctx.fillStyle = "#ffd166";
        ctx.fillText("Press ENTER or tap Restart to play again", CW / 2, CH / 2 + 44);
      } else {
        ctx.font = "bold 36px monospace";
        ctx.fillStyle = "#06d6a0";
        ctx.fillText("🎉 YOU WIN!", CW / 2, CH / 2 - 44);
        ctx.font = "20px monospace";
        ctx.fillStyle = "#a8d8ff";
        ctx.fillText(`Score: ${overlayScoreRef.current}`, CW / 2, CH / 2);
        ctx.font = "16px monospace";
        ctx.fillStyle = "#ffd166";
        ctx.fillText(`Wave ${overlayWaveRef.current} cleared! Press ENTER for next wave`, CW / 2, CH / 2 + 44);
      }
      ctx.restore();
    }
  }, []);

  const update = useCallback(() => {
    const gs = gsRef.current;
    if (gs.over || gs.won) return;

    gs.frame++;

    // Animate stars (subtle twinkle)
    if (gs.frame % 6 === 0) {
      gs.stars.forEach((s) => {
        s.a = 0.2 + Math.random() * 0.7;
      });
    }

    // ── Player movement ──
    const keys = keysRef.current;
    if ((keys.has("ArrowLeft") || keys.has("KeyA")) && gs.px > 0) {
      gs.px = Math.max(0, gs.px - P_SPEED);
    }
    if ((keys.has("ArrowRight") || keys.has("KeyD")) && gs.px < CW - PW) {
      gs.px = Math.min(CW - PW, gs.px + P_SPEED);
    }

    // ── Player shoot ──
    if ((keys.has("Space") || keys.has("KeyZ")) && !gs.pbullet && gs.frame - gs.lastPShot > 18) {
      gs.pbullet = { x: gs.px + PW / 2 - BW / 2, y: PY };
      gs.lastPShot = gs.frame;
    }

    // ── Move player bullet ──
    if (gs.pbullet) {
      gs.pbullet.y -= B_SPEED;
      if (gs.pbullet.y < -BH) gs.pbullet = null;
    }

    // ── Move enemies ──
    const alive = gs.enemies.filter((e) => e.alive);
    if (alive.length === 0) {
      gs.won = true;
      overlayRef.current = "won";
      overlayScoreRef.current = gs.score;
      overlayWaveRef.current = gs.wave;
      return;
    }

    if (!gs.dropping) {
      // Move horizontally
      gs.enemies.forEach((e) => {
        if (e.alive) e.x += gs.speed * gs.dir;
      });
      // Check wall collision
      const leftmost = Math.min(...alive.map((e) => e.x));
      const rightmost = Math.max(...alive.map((e) => e.x + EW));
      if ((gs.dir === 1 && rightmost >= CW - 4) || (gs.dir === -1 && leftmost <= 4)) {
        gs.dropping = true;
        gs.dropAmt = 0;
        gs.dir *= -1;
      }
    } else {
      // Drop down
      const step = 4;
      gs.enemies.forEach((e) => {
        if (e.alive) e.y += step;
      });
      gs.dropAmt += step;
      if (gs.dropAmt >= 20) {
        gs.dropping = false;
        gs.speed = Math.min(gs.speed + 0.02, 4);
      }
    }

    // ── Check if enemies reached the bottom ──
    if (alive.some((e) => e.y + EH >= PY)) {
      gs.lives = 0;
      gs.over = true;
      overlayRef.current = "over";
      overlayScoreRef.current = gs.score;
      return;
    }

    // ── Player bullet hits enemy ──
    if (gs.pbullet) {
      for (const e of gs.enemies) {
        if (!e.alive) continue;
        if (
          gs.pbullet.x < e.x + EW &&
          gs.pbullet.x + BW > e.x &&
          gs.pbullet.y < e.y + EH &&
          gs.pbullet.y + BH > e.y
        ) {
          e.alive = false;
          gs.score += ROW_POINTS[e.row];
          gs.pbullet = null;
          // Speed up a bit
          gs.speed = Math.min(gs.speed + 0.03, 4);
          break;
        }
      }
    }

    // ── Enemy shoot ──
    const shotInterval = Math.max(55, 120 - gs.wave * 8);
    if (gs.frame - gs.lastEShot > shotInterval && gs.ebullets.length < 3) {
      // Pick a random bottom-most alive enemy per column
      const cols: Record<number, Enemy[]> = {};
      alive.forEach((e) => {
        if (!cols[e.col]) cols[e.col] = [];
        cols[e.col].push(e);
      });
      const shooterCols = Object.values(cols).filter((c) => c.length > 0);
      if (shooterCols.length > 0) {
        const col = shooterCols[Math.floor(Math.random() * shooterCols.length)];
        const shooter = col.reduce((a, b) => (a.y > b.y ? a : b));
        gs.ebullets.push({ x: shooter.x + EW / 2 - BW / 2, y: shooter.y + EH });
        gs.lastEShot = gs.frame;
      }
    }

    // ── Move enemy bullets ──
    gs.ebullets = gs.ebullets.filter((b) => b.y < CH + BH);
    gs.ebullets.forEach((b) => { b.y += EB_SPEED; });

    // ── Enemy bullet hits player ──
    for (let i = gs.ebullets.length - 1; i >= 0; i--) {
      const b = gs.ebullets[i];
      if (
        b.x < gs.px + PW &&
        b.x + BW > gs.px &&
        b.y < PY + PH &&
        b.y + BH > PY
      ) {
        gs.ebullets.splice(i, 1);
        gs.lives--;
        if (gs.lives <= 0) {
          gs.over = true;
          overlayRef.current = "over";
          overlayScoreRef.current = gs.score;
          return;
        }
      }
    }
  }, []);

  const tick = useCallback(() => {
    update();
    draw();
    rafRef.current = requestAnimationFrame(tick);
  }, [update, draw]);

  const restart = useCallback((nextWave = false) => {
    const gs = gsRef.current;
    const wave = nextWave ? gs.wave + 1 : 1;
    const score = nextWave ? gs.score : 0;
    gsRef.current = initGS(wave, score);
    overlayRef.current = "none";
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      keysRef.current.add(e.code);
      if (["Space", "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(e.code)) {
        e.preventDefault();
      }
      if (e.code === "Enter" || e.code === "NumpadEnter") {
        const ov = overlayRef.current;
        if (ov === "over") restart(false);
        else if (ov === "won") restart(true);
      }
    };
    const handleKeyUp = (e: KeyboardEvent) => { keysRef.current.delete(e.code); };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [tick, restart]);

  // Touch controls
  const holdRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const startHold = (key: string) => {
    keysRef.current.add(key);
    holdRef.current = setInterval(() => keysRef.current.add(key), 16);
  };
  const stopHold = (key: string) => {
    keysRef.current.delete(key);
    if (holdRef.current) { clearInterval(holdRef.current); holdRef.current = null; }
  };
  const tapFire = () => keysRef.current.add("Space");
  const relFire = () => keysRef.current.delete("Space");

  return (
    <div style={{ maxWidth: "45rem", margin: "0 auto", padding: "1.5rem 1.25rem 3rem" }}>
      <style>{`
        .ap-hr { border: none; height: 1px; background: var(--ap-border); margin: 1rem 0; }
        .ctrl-btn {
          flex: 1;
          padding: 0.7rem 0;
          border: 1.5px solid var(--ap-border);
          border-radius: 8px;
          background: var(--ap-accent-bg);
          color: var(--ap-text);
          font-size: 1.4rem;
          cursor: pointer;
          user-select: none;
          -webkit-user-select: none;
          touch-action: none;
          transition: background 0.1s;
        }
        .ctrl-btn:active { background: var(--ap-border); }
        .game-canvas {
          display: block;
          border-radius: 8px;
          border: 1.5px solid var(--ap-border);
          max-width: 100%;
          touch-action: none;
        }
      `}</style>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem" }}>
        <div>
          <h1 style={{ margin: 0, fontSize: "clamp(1.5rem, 5vw, 2.2rem)" }}>
            🚀 Defend the Republic
          </h1>
          <p style={{ margin: "0.2rem 0 0", color: "var(--ap-text-light)", fontSize: "0.88rem" }}>
            Space Invaders · Arrow keys to move · Space to shoot · ENTER to restart
          </p>
        </div>
        <Link
          to="/"
          style={{ color: "var(--ap-accent)", fontSize: "0.9rem", textDecoration: "none" }}
        >
          ← Back
        </Link>
      </div>

      <div className="ap-hr" />

      {/* Canvas wrapper */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <canvas
          ref={canvasRef}
          width={CW}
          height={CH}
          className="game-canvas"
          style={{ width: "100%", maxWidth: `${CW}px` }}
        />
      </div>

      {/* Restart button */}
      <div style={{ display: "flex", justifyContent: "center", gap: "0.8rem", marginTop: "0.9rem" }}>
        <button
          onClick={() => {
            const ov = overlayRef.current;
            if (ov === "won") restart(true);
            else restart(false);
          }}
          style={{
            padding: "0.5rem 1.4rem",
            border: "1.5px solid var(--ap-border)",
            borderRadius: "6px",
            background: "var(--ap-accent-bg)",
            color: "var(--ap-text)",
            cursor: "pointer",
            fontSize: "0.92rem",
          }}
        >
          ↺ Restart
        </button>
      </div>

      {/* Mobile touch controls */}
      <div
        style={{ display: "flex", gap: "0.6rem", marginTop: "1rem" }}
        onContextMenu={(e) => e.preventDefault()}
      >
        <button
          className="ctrl-btn"
          onPointerDown={() => startHold("ArrowLeft")}
          onPointerUp={() => stopHold("ArrowLeft")}
          onPointerLeave={() => stopHold("ArrowLeft")}
        >⬅</button>
        <button
          className="ctrl-btn"
          style={{ flex: 2 }}
          onPointerDown={tapFire}
          onPointerUp={relFire}
          onPointerLeave={relFire}
        >🔥 FIRE</button>
        <button
          className="ctrl-btn"
          onPointerDown={() => startHold("ArrowRight")}
          onPointerUp={() => stopHold("ArrowRight")}
          onPointerLeave={() => stopHold("ArrowRight")}
        >➡</button>
      </div>

      <div className="ap-hr" />

      {/* Points legend */}
      <div style={{ display: "flex", gap: "1.2rem", flexWrap: "wrap", fontSize: "0.85rem", color: "var(--ap-text-light)" }}>
        {ROW_EMOJIS.map((em, i) => (
          <span key={i}>{em} = {ROW_POINTS[i]} pts</span>
        ))}
      </div>
    </div>
  );
}
