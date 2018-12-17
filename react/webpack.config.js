const webpack = require('webpack')
const dotenv = require('dotenv');
const fs = require('fs'); // to check if the file exists
const path = require('path'); // to get the current path
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = (env) => {
   // Get the root path (assuming your webpack config is in the root of your project!)
   const currentPath = path.join(__dirname);

   // Create the fallback path (the production .env)
   const basePath = currentPath + '/.env';

   // We're concatenating the environment name to our filename to specify the correct env file!
   const envPath = basePath + '.' + env.ENVIRONMENT;

   // Check if the file exists, otherwise fall back to the production .env
   const finalPath = fs.existsSync(envPath) ? envPath : basePath;

   // Set the path parameter in the dotenv config
   const fileEnv = dotenv.config({ path: finalPath }).parsed;
   // reduce it to a nice object, the same as before
   const envKeys = Object.keys(fileEnv).reduce((prev, next) => {
     prev[`process.env.${next}`] = JSON.stringify(fileEnv[next]);
     return prev;
   }, {});
   let environment_config;
   if (env.ENVIRONMENT == "development")
   {
     environment_config = {
       mode: 'development',
       devtool: 'inline-source-map',
       devServer: {
         contentBase: './build',
         port: 3000
       }
     }
   }else if (env.ENVIRONMENT == "production") {
     environment_config = {
       mode: 'production'
     }
   }

   let common_config = {
     entry: './src/index.js',
     output: {
       path: path.resolve(__dirname, 'build'),
       filename: 'index.bundle.js'
     },
     module: {
       rules: [
         {
           test: /\.js$/,
           exclude: /node_modules/,
           use: 'babel-loader'
         },
         {
           test: /\.css$/,
           use: ['style-loader', 'css-loader'],
         },
         {
             test: /\.(png|jpg|gif|svg|ttf|woff2|woff|eot)$/,
             loader: "file-loader",
             options: {
                 name: "[name].[ext]?[hash]"
             }
         }
       ]
     },
     plugins: [
       new webpack.DefinePlugin(envKeys),
       new CleanWebpackPlugin(['build']),
       new HtmlWebpackPlugin({
        title: 'Project Collab',
        template: path.resolve(__dirname, 'public/index.html'),
        filename: 'index.html',
        inject: 'body'
      })

     ]
   }
   return {...common_config, ...environment_config};
 }
