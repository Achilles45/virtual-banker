<template>
    <div class="navbar__wrapper">
        <div class="navbar__contents container-fluid">
            <div class="container">
                <div class="navbar__items d-flex justify-content-between align-items-center">
                    <div class="logo">
                        <h3><router-link to="/" class="logo-link"> Virtual Banker</router-link></h3>
                    </div>
                    <div class="navbar__links">
                        <ul class="nav__links d-flex justify-content-between align-items-center">
                            <li><router-link to="/" class="nav__link home">Home</router-link></li>
                            <li><router-link to="/about" class="nav__link about">About</router-link></li>
                            <li><router-link to="/data" class="nav__link data">Market Data</router-link></li>
                            <li><router-link to="/contact" class="nav__link contact">Contact</router-link></li>
                            <li><router-link to="/register" class="nav__link register">Register</router-link></li>
                            <li><router-link to="/login" class="nav__link login">Login</router-link></li>
                        </ul>
                    </div>
                    <div class="navbar__toggler d-none">
                        <i class="fa fa-bars"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Navbar',
    mounted(){
        const nav = document.querySelector('.navbar__wrapper');
            window.onscroll = function(){
                if (window.pageYOffset > 120) {
                    nav.classList.add('fix__nav');
                }else{
                    nav.classList.remove('fix__nav');
                }
            }
    }
}
</script>
<style lang="scss" scoped>
@import '../styles/_colors';
.navbar__wrapper{
.navbar__contents{
        // background: green;
        padding: .3rem 0;
    .navbar__items{
        padding-top: 1rem;
    }
    .logo{
        .logo-link{
            color: $primary-color;
            font-weight: bold;
            font-family: 'Varela Round';
            text-decoration: none;
        }
    }
    .nav__links{
        li{
            list-style: none;
            margin-left: 2rem;
            padding-top: .89rem;
            .nav__link{
                color: $tertiary-color;
                font-size: .95rem;
                text-transform: capitalize;
                font-family: 'Lato' !important;
                font-weight: bold;
                text-decoration: none;
                &:hover{
                    color: $primary-color;
                }
            }
            .login{
                border: 1px solid $tertiary-color;
                border-radius: 2px;
                padding: .75rem 2.5rem;
            }
        }
    }
}
}

//FIXING NAV
.fix__nav{
    position: fixed;
    top: 0; 
    right: 0;
    left: 0;
    width: 100%;
    z-index: 100;
    background: #fff;
    transition: all ease-in-out .5s;
    box-shadow: 1px 1px 50px rgba(0,0,0,0.17);
    .nav__link{
        color: $tertiary-color !important;
        &:hover{
            color: $primary-color;
        }
}
}
</style>