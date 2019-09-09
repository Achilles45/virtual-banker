<template>
    <section class="info">
        <div class="info__wrapper container-fluid">
            <div class="container">
                <div class="row text-center">
                    <div class="col-md-1"></div>
                    <div class="col-md-10">
                       <h4>Over &#8358;1,000,000 worth of financial data and opportunities shared here</h4>
                       <p>Since existence, Virvual Banker has helped lot of people change their financial situation by providing acccess to real-time financial data, investment opportunities of all kinds that are secured and highly competitive.</p>
                       <router-link to="/register" class="register-btn">Create a free Account</router-link>
                       <div class="app__store">
                           <a href="#"><img src="../assets/google-play-badge.webp" class="google-icon" alt=""></a>
                           <a href="#"><img src="../assets/iosbadge-101-image.webp" class="ios-icon" alt=""></a>
                       </div>
                    </div>
                    <div class="col-md-1"></div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'Info'
}
</script>
<style lang="scss" scoped>
@import '../styles/_colors';
.info{
    .info__wrapper{
        padding: 5rem 0;
        margin: 0 auto;
        h4{
            color: $primary-color;
            font-family: 'Lato';
            font-weight: bold;
            font-size: 1.8rem;
            padding-bottom: .5rem;
        }
        p{
            font-size: .95rem;
            color: $tertiary-color;
            font-family: 'Varela Round';
            padding-bottom: 1.5rem;
        }
        .register-btn{
            background: $primary-color;
            text-align: center;
            text-decoration: none;
            padding: .95rem 3rem;
            border-radius: 4px;
            font-family: 'Lato';
            color: #fff;
            &:hover{
                background: $secondary-color;
                transition: all ease-in-out .5s;
            }
        }
        .app__store{
            margin-top: 2.5rem;
            .google-icon, .ios-icon{
                height: 40px;
                padding: 0 1rem;
            }
        }
    }
}


//MEDIA QUERIES
@media only screen and (max-width: 990px){
     .info__wrapper h4{
         font-size: 1.5rem !important;
     }
}
</style>