module.exports = {
    publicPath: './', 
    publicPath: process.env.NODE_ENV === "production" ? "./" : "./",
    devServer:{
        open:true,
        sockHost:'192.168.0.33:8080',
        disableHostCheck:true,
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
    },
};
