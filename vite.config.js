// vite.config.js
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
    test: {
        // Esto es necesario para simular el entorno del navegador en los tests
        environment: 'jsdom',
    },

    // Bloque 'resolve' para configurar el alias de ruta
    resolve: {
        alias: {
            // Define el alias '~' para apuntar a la carpeta 'src'
            '~': path.resolve(__dirname, 'src'),
        },
    },
});