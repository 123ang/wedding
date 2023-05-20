<template>
  <div>
    <Navbar />
    <div id="app" style="height: 100%;">
      <div id="container">
        <router-view />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/navbar/navbar.component.vue'
import Footer from '@/components/footer/footer.component.vue'
export default {
  name: 'App',
  components: {
    Navbar,    
    Footer,
  },
  computed: {


  }
}
</script>

<style>
 
</style>

