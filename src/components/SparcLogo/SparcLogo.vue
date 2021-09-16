<template>
    <img class="logo" :src="logoSrc" alt="Logo for 12 Labours">
</template>

<script>
export default {
  name: 'SparcLogo',

  props: {
    type: {
      type: String,
      default: 'primary'
    },
    secondary: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    logoSrc: function() {
    //return require (`@/assets/img/sparc-logo/sparc-${this.secondary ? 'alt-' : ''}logo-${this.type}.svg`)
      
      /**Temporary setup: type 'primary' for default logo and 'black' for Footer logo **/
      return require (`@/assets/img/sparc-logo/12-labours-logo-${this.type}.png`)
    }
  }
}
</script>

<style lang="scss" scoped>
img {
  display: block;
  height: auto;
  width: 100%;
}
</style>
