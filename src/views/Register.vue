<template>
    <div class="register">
        <Navbar />
        <div class="register__wrapper container-fluid">
            <div class="container">
                <div class="row">
                     <div v-if="err" class="errors text-center animated slideInDown">
                            {{ err }}
                        </div>
                    <div class="col-md-4"></div>
                    <div class="col-md-4">
                        <div class="register__heading text-center">
                            <h4>Sign Up For An Account</h4>
                            <p>It's very fast and easy</p>
                        </div>
                        <div class="form__wrapper pt-3">
                            <form @submit.prevent="register()" class="register__form">
                                <div class="form-group">
                                    <input type="text" name="first_name" class="form-control" placeholder="First Name" v-model="fname">
                                </div>
                                <div class="form-group">
                                    <input type="text" name="last_name" class="form-control" placeholder="Last Name" v-model="lname">
                                </div>
                                <div class="form-group">
                                    <input type="email" name="email" class="form-control" placeholder="Email Address" v-model="email">
                                </div>
                                <div class="form-group">
                                    <input type="text" name="phone" class="form-control" placeholder="Phone Number" v-model="phone">
                                </div>
                                <div class="form-group">
                                    <input type="password" name="first_name" class="form-control" placeholder="Password" v-model="password">
                                    <small>Clicking the register button means you agree to our <router-link to="/" class="terms"> terms & conditions</router-link></small>
                                </div>
                                <button type="submit" class="register__btn btn-block">Register&nbsp;&nbsp; <i class="fa fa-long-arrow-right"></i></button>
                                    <div class="register__helper text-center pt-3">
                                        <p>Already have an account?&nbsp;&nbsp; <router-link to="/login" class="login">Login</router-link></p>
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

import { setTimeout } from 'timers';
export default {
    name: 'Register',
    components:{
        Navbar,
        Footer
    },
    data(){
        return{
            fname: null,
            lname: null,
            email: null,
            phone: null,
            password: null,
            err: null,
            loader:false
        }
    },
    methods:{
        clearAlert:function(){
            setTimeout(()=>{
                document.querySelector('.errors').remove();
            }, 5000)
        },
        clearLoader:function(){
            setTimeout(()=>{
                document
            })
        },
        register:function(){
            if(!this.fname || !this.lname || !this.email || !this.phone || !this.password){
                this.err = 'Please all fields are required!';
                this.clearAlert();
            }
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../styles/_colors';
.register__wrapper{
    padding-top: 5rem;
    padding-bottom: 7rem;
    .register__heading{
        h4{
            font-family: 'Lato';
            font-weight: bold;
            color: $primary-color;
            padding-bottom: .5rem;
            font-size: 1.3rem;
        }
        p{
            color:$tertiary-color;
            font-weight: bold;
            font-family: 'Lato';
        }
    }
    .register__form{
        input[type=text], input[type=email], input[type=password]{
            height: 2.9rem;
            border-radius: 0;
            box-shadow: none;
            &::placeholder{
                color: $tertiary-color;
                font-size: .9234rem;
                font-family: 'Lato';
            }
        }
        small{
            color: $tertiary-color;
            font-family: 'Lato';
            font-weight: bold !important;
            .terms{
                color: $secondary-color;
            }
        }
        .register__btn{
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
    }
    .register__helper{
        p{
            color: $tertiary-color;
            font-family: 'Lato';
            .login{
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
</style>