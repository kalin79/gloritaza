export default defineConfigWithVueTs(
    vue.configs['flat/essential'],
    vueTsConfigs.recommended,
    {
        ignores: [
            'vendor',
            'node_modules',
            'public',
            'bootstrap/ssr',
            'tailwind.config.js',
            'resources/js/components/ui/*'
        ],
    },
    {
        rules: {
            'vue/multi-word-component-names': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
            'vue/block-lang': 'off', // 👈 aquí desactivas la regla
        },
    },
    prettier,
);
