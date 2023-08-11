<template>
    <!-- <h3 class="text-center">Se Connecter</h3> -->
    <div class="d-flex justify-content-center  align-items-center" style="height:100vh">

        <div class=" border p-3">

            <form>
                <div class="form-group">
                    <label for="userName">User Name: </label>
                    <input type="text" class="form-control" id="userName" aria-describedby="emailHelp"
                        placeholder="Username..." required v-model="username">
                    <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password: </label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password..."
                        required v-model="password">
                </div>

                <button type="button" class="btn btn-primary pointer" @click="submitForm">Se Connecter</button>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'LoginUser',
    data() {
        return {
            username: "",
            password: ""
        }
    }
    ,
    methods: {
        async submitForm() {
            try {
                
            const response = await axios.post(`${process.env.VUE_APP_API_BASE_URL}auth/login`, { username: this.username, password: this.password });
                //alert(response.data.token)
                //alert(`${process.env.VUE_APP_API_BASE_URL}login`)
                const token = response.data.token;
                localStorage.setItem('token',token)
                //console.log(response.data)
                this.$router.push("/")
            }
            catch{
                alert()
            }
        }

    }

}
</script>

