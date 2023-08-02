<template>
    <AppHeader/>
    <div class="container">
        <router-view/>
    </div>
    
    
</template>



<script>
import AppHeader from './AppHeader.vue'
export default {
    name: 'AppBase',
    components:{
        AppHeader
    }
}
</script>

<style>
</style>