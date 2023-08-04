<template>
    <AppHeader/>
    <div class="container pt-3">
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