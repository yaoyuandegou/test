module.exports = {
    //publicPath: './', 
    publicPath: process.env.NODE_ENV === "production" ? "./" : "./",
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
