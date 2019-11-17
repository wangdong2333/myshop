<template>
<div id="app">
    <!-- keep-alive缓存路由组件的 -->
    <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>   
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>   

    <router-view name="footer-bar"></router-view>
</div>  
</template>

<script>
export default {
  
}
</script>


<style lang="scss">

</style>
