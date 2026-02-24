import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// Injects the GitHub Pages SPA redirect-handler into the built index.html.
// The companion 404.html encodes unrecognised paths into a query string;
// this script decodes them back so React Router sees the correct URL.
const spaRedirectPlugin = {
  name: 'spa-github-pages-redirect',
  transformIndexHtml(html: string) {
    const script = `
    <script>
      /* GitHub Pages SPA redirect handler */
      (function (l) {
        if (l.search[1] === '/') {
          var decoded = l.search
            .slice(1)
            .split('&')
            .map(function (s) { return s.replace(/~and~/g, '&'); })
            .join('?');
          window.history.replaceState(
            null, null,
            l.pathname.slice(0, -1) + decoded + l.hash
          );
        }
      }(window.location));
    </script>`;
    return html.replace('<head>', '<head>' + script);
  },
};

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    spaRedirectPlugin,
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})