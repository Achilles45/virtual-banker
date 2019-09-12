<template>
    <section class="features container-fluid">
        <div class="features__contents container">
            <div class="row">
                <div class="col-12 text-center features__heading">
                    <h4>Features That Makes Us Standout</h4>
                </div>
            </div>
                <img src="../assets/hero-image-pattern-alt.svg" class="img-fluid features-img d-none d-md-block" alt="">
            <div class="features__wrapper">
                <div class="features__card">
                    <i class="fa fa-cubes features-icons"></i>
                    <h5>Real-time Data</h5>
                    <p>Our system helps you to get access to real time financial information as they happen, and also help you to make sense of it so you can make informed invetments decisions.</p>
                    <img src="../assets/half-maze-gray.png" class="img-fluid card-img"  alt="">
                </div>
                 <div class="features__card">
                    <i class="fa fa-clone features-icons"></i>
                    <h5>Financial Planning</h5>
                    <p>With our budgeting feature, you can now confidently be in control of your finances, by keeping track of all your spendings.</p>
                     <img src="../assets/half-maze-orange.png" class="img-fluid card-img"  alt="">
                </div>
                 <div class="features__card">
                    <i class="fa fa-money features-icons"></i>
                    <h5>Investment Opportunities</h5>
                    <p>Virtual Banker helps you make investments in secured and highly competitive vehicles, from treasury bills, bonds, stocks, real estate, forex and much more...</p>
                     <img src="../assets/half-maze-green (1).png" class="img-fluid card-img"  alt="">
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'Features'
}
</script>
<style lang="scss" scoped>
@import '../styles/_colors';
.features{
    background: #E0E8F3;
    .features__contents{
        padding: 4rem 0;
        .features__heading h4{
            font-weight: bolder;
            font-size: 2rem;
            color: $primary-color;
            font-family: 'Lato';
        }
        .features-img{
            position: absolute;
            right: 85%;
            height: 100px;
        }
        .features__wrapper{
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            grid-gap: 20px;
            margin-top: 1.5rem;
            position: relative !important;
            z-index: 1;
            .features__card{
                background: #fff;
                padding: 2rem 3rem;
                border-radius: 4px;
                margin: 2rem 0;
                position: relative !important;
                .card-img{
                   height: 100px;
                   width: 100px;
                   position: absolute;
                   right: 0;
                   z-index: 1;
                   bottom: 0;
                }
                h5{
                    color:$primary-color;
                    font-weight: bold;
                    font-family: 'Lato';
                    padding: .5rem;
                }
                .features-icons{
                    color:$secondary-color;
                    font-size: 2rem;
                    padding: 1rem 0;
                }
                p{
                    font-family: 'Lato';
                    font-size: .9rem;
                    color: $primary-color;
                    padding-bottom: 3rem;
                }
            }
        }
    }
}


//MEDIA QUERIES
@media only screen and (max-width: 990px){
    .features__heading h4{
        font-size: 1.5rem !important;
    }
}
</style>