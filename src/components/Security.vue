<template>
    <section class="security">
        <div class="security_-wrapper contaibner-fluid">
            <div class="container">
                <div class="row">
                  <div class="col-md-5">
                      <h4>All your data are well secured on this platform</h4>
                      <div class="security__details mt-4">
                          <h5><i class="fa fa-check-square security-icons"></i>&nbsp;&nbsp; Secured Dashboard</h5>
                          <p>We utilize bycrypt technology to secure all your login details to ensure your dashboard is safe and secure and can only be accessed by you.</p>
                          <h5><i class="fa fa-check-square security-icons"></i>&nbsp;&nbsp; Accurate Data</h5>
                          <p>Our technology streams data direclty from our trusted third party partners. This is to ensure that all data we stream is accurate.</p>
                      </div>
                  </div>
                  <div class="col-md-1"></div>
                  <div class="col-md-6">
                      <img src="../assets/gurantee.svg" class="img-fluid security-logo" alt="">
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
.security{
    background: $primary-color;
    padding: 4rem 0;
    color: #fff;
    h4{
        font-weight: bolder;
        font-size: 2rem;
        font-family: 'Varela Round';
        padding-bottom: 1rem;
        padding-top: 1.2rem;
    }
}
.security__details{
        h5{
            font-family: 'Varela Round';
        }
        p{
            opacity: .8;
            font-size: .92rem;
            padding-top: .5rem;
            font-family: 'Varela Round';
            padding-bottom: .8rem;
        }
    }
    .security-logo{
        max-height: 350px !important;
    }



    //MEDIA QUERIES
    @media only screen and (max-width: 990px){
        .security h4{
            font-size: 1.6rem !important;
        }
    }
</style>