// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
    test: {
    // Esto especifica que Vitest debe simular el entorno del navegador
    environment: 'jsdom',
    },
});