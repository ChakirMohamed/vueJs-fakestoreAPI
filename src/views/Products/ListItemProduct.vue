<template>
    <div>
        <div class="card">
            <div class="card-body">
                <div class="" style="width: 100%;">
                    <img :src="imgUrl" :alt="imgUrl" class="img-fluid">
                </div>
                <h4>{{ title }}</h4>
                <span>{{ price }} $</span>
                <div class="card-footer">
                    <div class="text-center"><router-link :to="'/detail-product/'+id" class="btn btn-primary">Acheter</router-link></div>
                </div>
            </div>
        </div>

    </div>
</template>


<script>


export default {
    name: "ListItemProduct",
    props: [
        'imgUrl', 'title', 'price','id'
    ],
    methods: {
        
    },
    
}
</script>

<style scoped>
img {


}
.card-body{
    overflow: ;
}
.card{
    height:500px;
}
</style>