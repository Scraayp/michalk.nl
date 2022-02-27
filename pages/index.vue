<template>
  <div>
    <Navbar />
    <h1 class="text-red-500">Test</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Navbar from '~/components/Navbar.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: { Navbar },
})
</script>
