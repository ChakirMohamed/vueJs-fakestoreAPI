<template>
    <div>
        <img :src="imgUrl" alt="" >
        <h4>{{ title }}</h4>
        <span>{{price}}</span>
    </div>
</template>


<script>
    export default{
        name:"ListItemProduct",
        props:[
            'imgUrl','title','price'
        ]
    }
</script>

<style>
    img{
        width: 100%;
    }
</style>