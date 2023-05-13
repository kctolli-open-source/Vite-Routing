import { resolve } from 'path';

export const root = resolve(__dirname, '');
export const outDir = resolve(__dirname, 'dist');

export default function routes() {
    return ({
        main: resolve(root, 'index.html'),
        page1: resolve(root, 'page1.html'),
        page2: resolve(root, 'page2.html'),
    });
}
