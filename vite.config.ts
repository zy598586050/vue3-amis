import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

export default defineConfig({
    plugins: [
        vue(),
        dts({
            outDir: 'dist/types',
            exclude: ['**/*.test.ts']
        })
    ],
    build: {
        lib: {
            entry: 'src/index.ts',
            name: 'vue3-amis',
            formats: ['es', 'umd'],
            fileName: (format) => `vue3-amis.${format}.js`
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                exports: 'named',
                globals: {
                    vue: 'Vue'
                }
            }
        },
        minify: 'terser',
        cssCodeSplit: true
    }
})