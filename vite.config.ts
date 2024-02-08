import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  /*resolve: {
    alias: {
      src: '/src',
      '@components-porfolio': '/src/porfolio/components',
      views: '/src/porfolio/views',
    },
  },*/
  plugins: [react(), tsconfigPaths()],
});
