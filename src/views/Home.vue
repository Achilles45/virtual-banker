<template>
  <div class="home">
   <Navbar />
   <Banner />
   <Features />
   <Process />
   <Security />
   <Support />
   <Info />
   <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Banner from "@/components/Banner.vue";
import Features from "@/components/Features.vue";
import Process from "@/components/Process.vue";
import Security from "@/components/Security.vue";
import Support from "@/components/Support.vue";
import Info from "@/components/Info.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: 'home',
  components:{
    Navbar,
    Banner,
    Features,
    Process,
    Security,
    Support,
    Info,
    Footer
  }
}
</script>
