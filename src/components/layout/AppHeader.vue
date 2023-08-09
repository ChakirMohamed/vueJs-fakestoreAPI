<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Store</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav"
      aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>     
      </ul>
    </div>

    <div class="d-flex align-items-center pr-2">
        <a @click="showCard" class="icon-clicked"><font-awesome-icon icon="fa-solid fa-shopping-cart" /></a> 

      </div>
  </nav>
</template>



<script>
export default {
  name: 'AppHeader'
  ,
  methods:{
    showCard(){
      alert("hiii")
    }
  }
}
</script>


<style scoped>
nav button {
  cursor: pointer;
}
.icon-clicked{
  text-decoration: none;
  color:black;
  cursor: pointer;
}
</style>