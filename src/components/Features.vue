<template>
    <section class="features">
        <div class="features__contents container">
            <div class="row">
                <div class="col-12 text-center features__heading">
                    <h4>Features That Makes Us Standout</h4>
                </div>
            </div>
            <div class="features__wrapper">
                <div class="features__card">
                    <i class="fa fa-cubes features-icons"></i>
                    <h5>Real-time Data</h5>
                    <p>Our system helps you to get access to real time financial information as they happen, and also help you to make sense of it so you can make informed invetments decisions.</p>
                </div>
                 <div class="features__card">
                    <i class="fa fa-clone features-icons"></i>
                    <h5>Financial Planning</h5>
                    <p>With our budgeting feature, you can now confidently be in control of your finances, by keeping track of all your spendings.</p>
                </div>
                 <div class="features__card">
                    <i class="fa fa-money features-icons"></i>
                    <h5>Investment Opportunities</h5>
                    <p>Virtual Banker helps you make investments in secured and highly competitive vehicles, from treasury bills, bonds, stocks, real estate, forex and much more...</p>
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
    background: #F4F8FC;
    .features__contents{
        padding: 4rem 0;
        .features__heading h4{
            font-weight: bolder;
            font-size: 2rem;
            color: $primary-color;
            font-family: 'Lato';
        }
        .features__wrapper{
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            grid-gap: 20px;
            margin-top: 1.5rem;
            .features__card{
                background: #fff;
                padding: 2rem 3rem;
                border-radius: 4px;
                margin: 2rem 0;
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
                    font-family: 'Varela Round';
                    font-size: .89rem;
                    color: $tertiary-color;
                }
            }
        }
    }
}
</style>