<template>
    <tab-bar>
        <tab-bar-item path="/home" activeColor="#5d63ce">
            <img slot="item-icon" src="./img/home.png">
            <img slot="item-icon-active" src="./img/home-a.png">
            <span slot="item-text">首页</span>
        </tab-bar-item>
        <tab-bar-item path="/category" activeColor="#5d63ce">
            <img slot="item-icon" src="./img/category.png">
            <img slot="item-icon-active" src="./img/category-a.png">
            <span slot="item-text">分类</span>
        </tab-bar-item>
        <tab-bar-item  path="/cart" activeColor="#5d63ce">
            <img slot="item-icon" src="./img/cart.png">
            <img slot="item-icon-active" src="./img/cart-a.png">
            <span slot="item-text">购物车</span>
        </tab-bar-item>
        <tab-bar-item path="/profile" activeColor="#5d63ce">
            <img slot="item-icon" src="./img/profile.png">
            <img slot="item-icon-active" src="./img/profile-a.png">
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