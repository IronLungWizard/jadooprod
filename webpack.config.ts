import {join} from "path";
import {Configuration, RuleSetRule, WebpackPluginInstance} from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const isDev = process.env.NODE_ENV === 'development'

const htmlWebpackPlugin: WebpackPluginInstance = new HtmlWebpackPlugin({
    template: join(__dirname, 'src', 'index.template.html')
});
const miniCssExtractPlugin: WebpackPluginInstance = new MiniCssExtractPlugin({
    filename: '[name].[hash].css',
    chunkFilename: '[id].[hash].css'
});

const allPlugins: WebpackPluginInstance[] = isDev
? /* dev  */ [htmlWebpackPlugin]
: /* prod */ [htmlWebpackPlugin, miniCssExtractPlugin];


const tsRuleBase: RuleSetRule = {
    test: /\.tsx?$/i,
    loader: 'ts-loader',
}

// const loaderMiniCssExtractPlugin: RuleSetUseItem = MiniCssExtractPlugin.loader;
// const ruleCss: RuleSetRule = {
//     test: /\.css$/,
//     include: join(__dirname, 'src'),
//     exclude: /node_modules/,
//     use: [
//       isDev ? 'style-loader' : loaderMiniCssExtractPlugin,
//       {
//         loader: 'css-loader',
//         options: {
//           importLoaders: 1,
//           modules: {
//             exportLocalsConvention: 'camelCase',
//             localIdentName: isDev ? '[local]___[hash:base64:3]' : '[hash:base64:6]',
//           },
    
//         },
//       },
//     ],
//   };
   const ruleScss: RuleSetRule = {
     test: /\.(sass|css|scss)$/,
     include: join(__dirname, 'src'),
     exclude: /node_modules/,
     use: [
         "style-loader",
         "css-loader",
         "sass-loader",
       ],
   };
   const ruleSvg: RuleSetRule = {
    test: /\.svg$/i,
    type: 'asset',
    resourceQuery: /url/, // *.svg?url
   };
   const ruleSvgr: RuleSetRule =  {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    resourceQuery: { not: [/url/] }, // exclude react component if *.svg?url
    use: ['@svgr/webpack'],
  };
  const ruleFiles: RuleSetRule =  {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };
// const ruleScss: RuleSetRule = {
//     test: /\.(sass|css|scss)$/,
//     include: join(__dirname, 'src'),
//     exclude: /node_modules/,
//     use: [
//       isDev ? 'style-loader' : loaderMiniCssExtractPlugin,
//       {
//         loader: 'sass-loader',
//         options: {
//           importLoaders: 1,
//           modules: {
//             exportLocalsConvention: 'camelCase',
//             localIdentName: isDev ? '[local]___[hash:base64:3]' : '[hash:base64:6]',
//           },
    
//         },
//       },
//     ],
//   };
const tsRule: RuleSetRule = {
    ...tsRuleBase,
    options: {
        configFile: join(__dirname, 'tsconfig.json')
    }
}

const webAppConfig: Configuration & { devServer?: Record<string, unknown> } = {
    mode: isDev ? 'development' : 'production',
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.json'],
    },
    entry: join(__dirname, 'src', 'index.tsx'),
    output: {
        path: join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    target: 'web',
    plugins: allPlugins,
    module: {
        rules: [tsRule, ruleScss, ruleSvg, ruleSvgr, ruleFiles]
    },
    devServer: {
        port: 3000,
        historyApiFallback: true,
    },
}

export default [
    /** app **/ webAppConfig,
]
