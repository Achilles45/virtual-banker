<template>
    <section class="support">
        <div class="security__contents container-fluid">
            <div class="container">
                <div class="row">
                    <div class="col-md-5">
                        <img src="../assets/support.png" class="img-fluid support-img mb-4" alt="">
                    </div>
                    <div class="col-md-1"></div>
                    <div class="col-md-5">
                        <h4>24/7 Customer Support</h4>
                        <p>Our customer support team is not notch and alway ready to answer all your queries. Please use any of our contact platform to reach out to our customer care.</p>
                        <router-link to="/contact" class="contact__btn">Contact Us</router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'Security'
}
</script>
<style lang="scss" scoped>
@import '../styles/_colors';
.support{
    .security__contents{
        padding: 5rem 0;
        h4{
            font-weight: bold;
            font-family: 'Lato';
            color: $primary-color;
            font-size: 1.8rem;
            padding-bottom: .7rem;
        }
        p{
            font-family: 'Lato';
            color: $primary-color;
            margin-bottom: 2rem;
            opacity: .8;
        }
        .contact__btn{
            background: $secondary-color;
            padding: .9rem 4rem;
            text-align: center;
            text-decoration: none;
            border-radius: 4px;
            color:#fff;
            font-family: 'Lato';
             &:hover{
                background: $primary-color;
                transition: all ease-in-out .5s;
            }
        }
    }
}
.support-img{
    animation: animate;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-duration: 4s;
    }

//Annimation
    @keyframes animate{
        from{
            transform: translateY(-40px);
        }
        to{
            transform: translateY(40px);
        }
    }


//MEDIA QUERIES
@media only screen and (max-width: 990px){
      .security__contents h4{
          font-size: 1.4rem;
      }
}
</style>