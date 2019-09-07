<template>
  <div class="home">
   <Navbar />
   <Banner />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Banner from "@/components/Banner.vue";

export default {
  name: 'home',
  components:{
    Navbar,
    Banner
  }
}
</script>
