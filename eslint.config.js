export default [
    {
        ignores: ['node_modules/**'], // Ignorar archivos y carpetas innecesarios
    },
    {
        files: ['**/*.js'], // Aplica las reglas solo a archivos .js
        languageOptions: {
            ecmaVersion: 2021, // Versión de ECMAScript
            sourceType: 'module', // Si usas import/export
            globals: {
                // Define las variables globales que necesitas
                window: 'readonly', // Variable global del navegador
                document: 'readonly',
                console: 'readonly',
                process: 'readonly', // Variable global de Node.js
                require: 'readonly',
                module: 'readonly',
            },
        },
        rules: {
            // Reglas de ESLint
            semi: ['error', 'always'], // Requiere punto y coma al final
            quotes: ['error', 'single'], // Usa comillas simples
            'no-unused-vars': 'warn', // Advierte sobre variables no usadas
            'no-console': 'off', // Permite el uso de console.log
            'no-multiple-empty-lines': [
                'error', // Nivel de severidad: "error" o "warn"
                { max: 1 }, // Permitir como máximo una línea vacía consecutiva
            ],
        },
    },
];
