import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/NsobaniWebsite/', // Adjust this based on your deployment path
  plugins: [react()],
  build: {
    outDir: 'dist', // Specify the output directory
    assetsDir: 'assets', // Specify the assets directory
    sourcemap: true, // Enable source maps for debugging
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
});
