const { defineConfig } = require('@vue/cli-service');
console.log('out log', process.env.NODE_ENV);
module.exports = defineConfig({
    transpileDependencies: true,
    configureWebpack: {
        resolve: {
            alias: {
                // assets/images/1.png => @/assets/images/1.png
                assets: '@/assets',
                network: '@/network',
                components: '@/components',
                utils: '@/utils',
                views: '@/views',
            },
        },
    },
});
