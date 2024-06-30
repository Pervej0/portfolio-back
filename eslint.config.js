"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = [
    {
        extends: ["eslint:recommended", "plugin:node/recommended"],
        parserOptions: {
            // Only ESLint 6.2.0 and later support ES2020.
            ecmaVersion: 2020,
        },
        rules: {
            "node/exports-style": ["error", "module.exports"],
            "node/file-extension-in-import": ["error", "always"],
            "node/prefer-global/buffer": ["error", "always"],
            "node/prefer-global/console": ["error", "always"],
            "node/prefer-global/process": ["error", "always"],
            "node/prefer-global/url-search-params": ["error", "always"],
            "node/prefer-global/url": ["error", "always"],
            "node/prefer-promises/dns": "error",
            "node/prefer-promises/fs": "error",
        },
    },
];
