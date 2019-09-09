<template>
  <div class="about">
    <Navbar />
    <div class="about__wrapper container-fluid">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h2 class="about__heading">Our Mission: To give people the ability to make informed investment decisions more easily and conviniently</h2>
          </div>
        </div>
        <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-6">
               <img src="../assets/about.png" class="img-fluid about-img" alt="">
               <p class="about__description">We are a team of experts in various fields including technology, finance, law. The company is founded on the basics of making investments opportunities available to everyone by helping them visualize inportant financial data.</p>
            </div>
            <div class="col-md-3"></div>
          </div>
          <div class="row mt-4">
            <div class="col-12 text-center pb-2">
              <h4 class="about__heading">Our Core Values</h4>
              <div class="row pt-3">
                <div class="col-md-3">
                  <i class="fa fa-cubes about-icons"></i>
                  <h5>Innovation</h5>
                </div>
                <div class="col-md-3">
                   <i class="fa fa-comments about-icons"></i>
                  <h5>24/7 Customer support</h5>
                </div>
                <div class="col-md-3">
                   <i class="fa fa-lock about-icons"></i>
                  <h5>Security</h5>
                </div>
                <div class="col-md-3">
                   <i class="fa fa-certificate about-icons"></i>
                  <h5>Certified</h5>
                </div>
              </div>
            </div>
          </div>
          <div class="row mt-5 text-center">
            <div class="col-12">
              <router-link to="/register" class="register__btn">Get Started Now</router-link>
            </div>
          </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
export default {
  name: 'About',
  components:{
    Navbar,
    Footer
  }
}
</script>
<style lang="scss" scoped>
@import '../styles/_colors';
.about__wrapper{
  padding-top: 4rem;
  padding-bottom: 4rem;
  .about__heading{
    color: $primary-color;
    font-family: 'Lato';
    font-weight: bold;
  }
}
.about-img{
    max-height: 30rem;
    padding-top: 1.3rem;
  }
  .about__description{
    color: $tertiary-color;
    font-family: 'Lato';
    // font-weight: bold;
    font-size: .93rem;
    opacity: .95;
  }
  .about-icons{
    font-size: 3rem;
    color: $primary-color;
    padding-bottom: 1rem;
    padding-top: 1rem;
  }
  .about__heading{
    color: $primary-color;
    font-family: 'Lato';
    font-size: 1.7rem;
  }
  h5{
    color: $tertiary-color;
    font-family: 'Lato';
    font-size: 1rem;
    font-weight: bold;
    padding-bottom: 2rem;
  }
  .register__btn{
      background: $primary-color;
      padding: 1rem 3rem;
      color:#fff;
      text-decoration: none;
      border:none;
      border-radius: 3px;
      font-family: 'Lato';
      &:hover{
          background: $secondary-color;
          transition: all ease-in-out .5s;
      }
  }
</style>