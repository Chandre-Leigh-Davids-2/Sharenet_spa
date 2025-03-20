<template>
  <div>
    <Navbar/>
    <main>
      <router-view/>
    </main>

    <Footer/>
  </div>

</template>

<script>
import Navbar from '../src/components/Navbar'
import Footer from '../src/components/Footer'

export default {
  components:{
    Navbar,
    Footer
  }
}
</script>
<style>
  
</style>