<template>
    <tab-bar>
        <tab-bar-item path="/home" activeColor="#ff5777">
            <img slot="item-icon" src="./img/home.svg">
            <img slot="item-icon-active" src="./img/home_active.svg">
            <span slot="item-text">首页</span>
        </tab-bar-item>
        <tab-bar-item path="/category" activeColor="#ff5777">
            <img slot="item-icon" src="./img/category.svg">
            <img slot="item-icon-active" src="./img/category_active.svg">
            <span slot="item-text">分类</span>
        </tab-bar-item>
        <tab-bar-item  path="/cart" activeColor="#ff5777">
            <img slot="item-icon" src="./img/shopcart.svg">
            <img slot="item-icon-active" src="./img/shopcart_active.svg">
            <span slot="item-text">购物车</span>
        </tab-bar-item>
        <tab-bar-item path="/profile" activeColor="#ff5777">
            <img slot="item-icon" src="./img/profile.svg">
            <img slot="item-icon-active" src="./img/profile_active.svg">
            <span slot="item-text">个人</span>
        </tab-bar-item>
    </tab-bar>
</template>

<script>

    //import  TabBar from './tabbar'
    import TabBar from './tabbar'
    import TabBarItem from './tabbaritem'
    export default {
        name:'MainTabBar',
        components:{
            TabBar,TabBarItem
        },
    }
</script>
<style lang="less" scoped>

</style>