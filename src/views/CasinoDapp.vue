<template>
  <hello-metamask></hello-metamask>
</template>

<script>
import HelloMetamask from '@/components/HelloMetamask.vue'
export default {
  name: 'casino-dapp',
  components: {
    HelloMetamask
  },
  beforeCreate () {
    console.log('registerWeb3 Action dispatched from casino-dapp.vue')
    this.$store.dispatch('registerWeb3')
  }
}
</script>
