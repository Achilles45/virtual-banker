<template>
    <section class="banner__wrapper container-fluid">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-sm-12 banner-text">
                    <h3>Helping you achieve financial success</h3>
                     <p>Virtual Banker is your partner of choice to help you achieve financial freedom by leveragin on data and opportunities</p>
                    <div class="banner__text__description">
                       <p>Access real-time financial data</p>
                       <p>Earn over 17% interests on investments</p>
                    </div>
                    <div class="banner__img">
                        <img src="../assets/google-play-badge.webp" class="img-fluid google-icon" alt="">
                        <img src="../assets/iosbadge-101-image.webp" class="img-fluid ios-icon" alt="">
                    </div>
                </div>
                <div class="col-md-6 d-none d-md-block">
                    <img src="../assets/banner-img-3.png" class="img-fluid" alt="">
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'Banner'
}
</script>
<style lang="scss" scoped>
@import '../styles/_colors';
.banner__wrapper{
    position: relative;
    z-index: -2 !important;
    // background: red;
    padding-top: 7rem;
    .banner-text{
        h3{
            font-weight: bolder;
            color: $primary-color;
            font-size: 2.6rem;
            font-family: 'Lato';
            text-transform: capitalize;
            padding-bottom: 1.5rem;
            padding-top: 1rem;
        }
        p{
            color: $tertiary-color;
            font-family: 'Varela Round';
            font-size: .9rem;
            font-weight: bold;
        }
        .banner__text__description{
            padding-bottom: 1rem;
        }
        .register__btn{
            background: $secondary-color;
            text-align: center;
            text-decoration: none;
            padding: 1rem 3rem;
            border-radius: 4px;
            font-family: 'Varela Round';
            color: #fff;
            cursor: pointer !important;
            &:hover{
                background: $primary-color;
                transition: all ease-in-out .5s;
            }
        }
        .google-icon, .ios-icon{
                height: 45px;
            }
    }
}

//MEDIA QUERIES
@media only screen and (max-width: 990px){
    .banner-text{
        text-align:center;
        padding-bottom: 3rem;
        h3{
            font-size: 1.6rem !important;
        }
    }
}
</style>