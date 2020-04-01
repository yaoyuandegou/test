module.exports = {
    publicPath: './', 
    publicPath: process.env.NODE_ENV === "production" ? "./" : "./",
    devServer:{
        open:true,
    },
    configureWebpack: {
        resolve: {
            alias: {
                'common': '@/common',
                'assets': '@/assets',
                'components': '@/components',
                'network': '@/network',  
                'views': '@/views',
            }
        }
    }
};
