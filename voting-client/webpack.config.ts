import e from "express";
import path from "path";

const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {  
        contentBase: './dist'
    }
};

export default config; 