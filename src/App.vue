<template>
  <div id="app">
    <transition name="animate" enter-active-class="animated slideInRight" leave-active-class="animated slideOutRight">
    <router-view/>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
@import './styles/main';
#app{
  overflow: hidden !important;
}
</style>
