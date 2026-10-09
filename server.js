import { createServer, transformWithEsbuild } from 'vite';
import react from '@vitejs/plugin-react';

async function startServer() {
  const server = await createServer({
    configFile: false,
    root: process.cwd(),
    plugins: [
      {
        name: 'treat-js-files-as-jsx',
        async transform(code, id) {
          if (!id.match(/src\/.*\.js$/)) return null;
          return transformWithEsbuild(code, id, {
            loader: 'jsx',
            jsx: 'automatic',
          });
        },
      },
      react(),
    ],
    optimizeDeps: {
      esbuildOptions: {
        loader: {
          '.js': 'jsx',
        },
      },
    },
    server: {
      port: 5173,
      host: true,
      open: true,
    },
  });

  await server.listen();
  server.printUrls();
  console.log('\n✨ S. Soshanashree Portfolio dev server running at http://localhost:5173\n');
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
