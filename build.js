import { build, transformWithEsbuild } from 'vite';
import react from '@vitejs/plugin-react';

async function runBuild() {
  await build({
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
    esbuild: {
      loader: 'jsx',
      include: /src\/.*\.js$/,
      exclude: []
    }
  });

  console.log('\n✨ Production build completed successfully!\n');
}

runBuild().catch((err) => {
  console.error('Build failed:', err);
  process.exit(1);
});
