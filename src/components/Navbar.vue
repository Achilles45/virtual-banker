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
    name: 'Navbar'
}
</script>
<style lang="scss" scoped>
@import '../styles/_colors';
.navbar__wrapper{
.navbar__contents{
        // background: green;
        padding: .3rem 0;
    // .navbar__items{
        
    // }
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
                color: $primary-color;
                font-size: 1rem;
                text-transform: capitalize;
                font-family: 'Varela Round' !important;
                font-weight: bold;
                text-decoration: none;
                &:hover{
                    color: $primary-color;
                }
            }
        }
    }
}
}
</style>