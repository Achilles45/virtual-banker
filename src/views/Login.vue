<template>
    <div class="login">
        <Navbar />
        <div class="login__wrapper container-fluid">
            <div class="container">
                <div class="row">
                       <div v-if="err" class="errors text-center animated slideInDown">
                            {{ err }}
                        </div>
                    <div class="col-md-4"></div>
                    <div class="col-md-4">
                        <div class="login__heading text-center">
                            <h4>Hey! Welcome back</h4>
                            <p>Please login</p>
                        </div>
                        <div class="login__form_-wrapper">
                            <form @submit.prevent="logIn()" class="login__form">
                                <div class="form-group">
                                    <label for="email">Email Address *</label>
                                    <input type="email" class="form-control" v-model="email" placeholder="Registered email">
                                </div>
                                <div class="form-group">
                                    <label for="password">Password *</label>
                                    <input type="password" class="form-control" v-model="password" placeholder="Your password">
                                </div>
                                <button type="submit" class="login__btn btn-block">Sign In&nbsp;&nbsp; <i class="fa fa-long-arrow-right"></i></button>
                                <div class="login__helper text-center pt-4">
                                    <p>New to Virtual Banker?&nbsp;&nbsp; <router-link to="/register" class="register">Register Here</router-link></p>
                                    <p>Forgot Password? <router-link to="/reset-password" class="password">Reset Password</router-link></p>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="col-md-4"></div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import firebase from 'firebase';
export default {
    name: 'Login',
    components:{
        Navbar,
        Footer
    },
    data(){
        return{
            password:null,
            email:null,
            err:null
        }
    },
    methods:{
        logIn:function(){
            //Check if the fields has been filled out
            if(!this.email || !this.password){
               this.err = 'Please enter your credentials'
            }else{
                this.err = null;
             firebase.auth().signInWithEmailAndPassword(this.email, this.password)
            .then((cred)=>{
                this.$router.push({name: 'Dashboard'})
            })
            }
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../styles/_colors';
.login__wrapper{
    padding-top: 5rem;
    padding-bottom: 7rem;
    .login__heading{
        padding-bottom: 1rem;
        h4{
            font-weight: bold;
            color: $primary-color;
            font-family: 'Lato';
            font-size: 1.3rem
        }
        p{
            font-family: 'Lato';
            color: $tertiary-color;
        }
    }
    .login__form{
        label{
            color: $tertiary-color;
            font-weight: bold;
            font-family: 'Lato';
            font-size: .9rem;
        }
        input[type=email], input[type=password]{
            height: 2.9rem;
            border-radius: 0;
            box-shadow: none;
            &::placeholder{
                font-size:.9rem;
                font-family:'Lato';
            }
        }
        .login__btn{
             background: $secondary-color;
            padding: .75rem 3rem;
            color:#fff;
            text-decoration: none;
            border:none;
            border-radius: 3px;
            &:hover{
                background: $primary-color;
                transition: all ease-in-out .5s;
            }
        }
        .login__helper{
        p{
            color: $tertiary-color;
            font-family: 'Lato';
            .register, .password{
                color:$secondary-color;
                text-decoration: none;
                &:hover{
                    color: $primary-color;
                    transition: all ease-in .5s;
                }
            }
        }
    }
    }
}

.errors{
    background: #BD362F;
    color:#fff;
    border-radius: 3px;
    padding:1.5rem 2rem;
    font-family: 'Lato';
    font-size: 1rem;
    position: absolute;
    right: 5%;
}

//MEIDA QUERIES
@media only screen and (max-width: 990px){
    .errors{
        bottom: 0;
    }
}
</style>