const path =require('path')
const postCSSPlugins = [
    require('postcss-import'),
    require('postcss-mixins'),
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('autoprefixer')
]
module.exports= {
    entry: './app/assets/images/scripts/App.js',
    output: {
        filename: 'bundled.js',
        path: path.resolve(__dirname,'app')
    },
    devServer: {
        watchFiles: ('./app/**/*.html'),
        static: {
         directory: path.join(__dirname,'app')
        },
        hot: true,
        port: 3000,
        host: '192.168.2.10'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use:['style-loader','css-loader',{loader: 'postcss-loader', options:{postcssOptions: {plugins: postCSSPlugins}}}]
            }
        ]
    }
}