<template>
    <h1>detaille product {{ $route.params.id }}</h1>
</template>

<script>
export default {
    name: "DetailleProduct",

    created(){
        this.$store.dispath['singleProductModule/fetchProduct']
    }
}
</script>