<template>
    <div class="register__wrapper">
        <Navbar />
    </div>
</template>
<script>
import Navbar from '@components/Navbar.vue';
export default {
    name: 'Register',
    components:{
        Navbar
    }
}
</script>
<style lang="scss" scoped>
@import '../styles/_colors';
</style>