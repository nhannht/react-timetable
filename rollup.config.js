import typescript from '@rollup/plugin-typescript';
import * as glob from 'glob';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import dts from 'rollup-plugin-dts'
import terser from "@rollup/plugin-terser";
import postcss from 'rollup-plugin-postcss';
import tailwindcss from 'tailwindcss';
import tailwindConfig from './tailwind.config.js';
import autoprefixer from "autoprefixer";

let entries = Object.fromEntries(
    glob.sync('src/component/**/*.tsx').map(file => [
        path.relative(
            'src/component/',
            file.slice(0, file.length - path.extname(file).length)
        ),
        fileURLToPath(new URL(file, import.meta.url))
    ])
);
export default [
    {
        input: entries,
        output: [
            {
                dir: 'dist/component/',
                format: 'es',
                sourcemap: true,
            },
        ],
        plugins: [
            postcss(
                {
                    plugins: [
                        autoprefixer(),
                        tailwindcss(tailwindConfig),
                    ],
                    extract: path.resolve('dist/component/esm/style.css'),
                    minimize: true,
                    extensions: ['.css'],
                    sourceMap: true,
                }
            ),
            typescript(),
            terser(),
        ],
        external: [
            'react',
            'react-dom',
            'react/jsx-runtime',
            'framer-motion',
            'tailwind-variants',
            'tailwind-merge',
            'react-icons/ai',
            /node_modules/
        ]
    },
    {
        input: entries,
        output: [
            {
                dir: 'dist/component/esm',
                format: 'es',
            }
        ],
        // This plugin will conflict with post css plugin if we not use exclude style file
        external: [/\.css$/],
        plugins: [dts()],
    },
    {
        input: 'src/index.ts',
        output: [
            {
                dir: 'dist',
                format: 'es',
                sourcemap: true,
            },
        ],
        plugins: [
            postcss(
                {
                    plugins: [
                        autoprefixer(),
                        tailwindcss(tailwindConfig),
                    ],
                    extract:true,
                    minimize: true,
                    extensions: ['.css'],
                    sourceMap: true,
                }
            ),
            typescript(),
            terser(),
        ],
        external: [
            'react',
            'react-dom',
            'react/jsx-runtime',
            'framer-motion',
            'tailwind-variants',
            'tailwind-merge',
            'react-icons/ai',
            /node_modules/
        ]
    },
    {
        input: "src/index.ts",
        output: [
            {
                dir: 'dist/',
                format: 'es',
            }
        ],
        // This plugin will conflict with post css plugin if we not use exclude style file
        external: [/\.css$/],
        plugins: [dts()],
    },
]
