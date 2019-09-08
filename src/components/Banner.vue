<template>
    <section class="banner__wrapper container-fluid">
        <div class="container">
            <div class="row">
                <div class="col-md-6 banner-text">
                    <h3>Helping you achieve financial success</h3>
                     <p>Virtual Banker is your partner of choice to help you achieve financial freedom by leveragin on data and opportunities</p>
                    <div class="banner__text__description">
                       <p>Access real-time financial data</p>
                       <p>Earn over 17% interests on investments</p>
                    </div>
                    <router-link to="/register" class="register__btn">Create a free Account</router-link>
                </div>
                <div class="col-md-6">
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
    padding-top: 8rem;
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
            padding-bottom: 2rem;
        }
        .register__btn{
            background: $secondary-color;
            text-align: center;
            text-decoration: none;
            padding: 1rem 3rem;
            border-radius: 4px;
            font-family: 'Varela Round';
            color: #fff;
            &:hover{
                background: $primary-color;
                transition: all ease-in-out .5s;
            }
        }
    }
}
</style>