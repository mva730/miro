module.exports = {
    "env": {
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2020,
    },
    "rules": {
        "no-undef": [
            "off"
        ],
        "indent": [
            "error",
            4, {
                "SwitchCase": 1
            }
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ]
    },
    "ignorePatterns": ["node_modules/**", "**/*.d.ts"],
    "overrides": [
        {
            "files": ["**/*.ts", "**/*.tsx"],
            "parser": "@typescript-eslint/parser",
            "parserOptions": {
                "sourceType": "module",
                "ecmaFeatures": {
                    "jsx": true,
                    "modules": true
                }
            },
            "plugins": ["@typescript-eslint"],
            "extends": [
                "plugin:@typescript-eslint/eslint-recommended",
                "plugin:@typescript-eslint/recommended"
            ],
        }
    ]
};
