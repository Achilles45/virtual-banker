<template>
    <ssection class="process">
        <div class="process__wrapper container-fluid">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <img src="../assets/phone.png" class="img-fluid phone" alt="">
                    </div>
                    <div class="col-md-1"></div>
                    <div class="col-md-5">
                        <div class="process__heading">
                            <h4>Begin your journey to financial freedom today!</h4>
                        </div>
                        <div class="process__details mt-4">
                            <h5>01 &nbsp;&nbsp; Create an Account</h5>
                            <p>Create a free account today with only your name, email address and phone number</p><br />
                            <h5>01 &nbsp;&nbsp; Explore</h5>
                            <p>Check and use any of our features. Very simple user interface and we get a sense on how the financial market moves real-time</p><br />
                            <h5>01 &nbsp;&nbsp; Experince real growth</h5>
                            <p>Now you can take the back seat and let Virtual Banker do all the hard work for you while you enjoy real growth.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </ssection>
</template>
<script>
export default {
    name: 'Process'
}
</script>
<style lang="scss" scoped>
@import '../styles/_colors';
.process__wrapper{
    padding: 5rem 0;
    .process__heading{
        h4{
            font-weight: bolder;
            font-family: 'Lato';
            font-size: 2rem;
            color: $primary-color;
            padding-bottom: 1rem;
        }
    }
    .phone{
        min-height: 400px;
    }
    .process__details{
        h5{
            color:$primary-color;
            font-family: 'Varela Round';
            font-weight: bold;
            padding-bottom: .4rem;
        }
        p{
            font-family: 'Lato';
            font-size: .95rem;
            color: $tertiary-color;
        }
    }
}
</style>