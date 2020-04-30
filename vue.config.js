module.exports = {
    publicPath: './', 
    publicPath: process.env.NODE_ENV === "production" ? "./" : "./",
    devServer:{
        open:true,
    },
    configureWebpack: {
        resolve: {
            alias: {
                'commonjs': '@/commonjs',
                'assets': '@/assets',
                'components': '@/components',
                'network': '@/network',  
                'views': '@/views',
            }
        }
    }
};
