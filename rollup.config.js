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
    glob.sync('src/**/*.{ts,tsx}',{
        ignore: ['src/stories/**/*.{ts,tsx}', 'src/vite-env.d.ts'],
    }).map(file => [
        path.relative(
            'src/',
            file.slice(0, file.length - path.extname(file).length)
        ),
        fileURLToPath(new URL(file, import.meta.url))
    ])
);
console.log(entries)
export default [
    {
        input: entries,
        output: [
            {
                dir: 'dist/',
                format: 'es',
                sourcemap: true,
            },
        ],
        plugins: [
            postcss({
                plugins: [
                    tailwindcss(tailwindConfig),
                    autoprefixer
                ],
                extract: path.resolve('dist/style.css'),
                sourceMap: true,
                minimize: true,
            }),
            typescript(),
            // terser(),
        ],

        external: [
            'react',
            'react-dom',
            'react/jsx-runtime',
            'framer-motion',
            'tailwind-variants',
            'tailwind-merge',
            'react-icons/ai',
            /node_modules/,
        ]
    },
    {
        input: entries,
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
