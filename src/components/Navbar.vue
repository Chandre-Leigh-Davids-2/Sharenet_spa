<template>
  <div class="navBar">
    <p class="nav-Heading">Konoha Spa</p>
    <nav class="navbar navbar-expand-lg ">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page"><router-link to="/">Home</router-link></a>
            </li>
            <li class="nav-item">
              <a class="nav-link"><span class="mx-3"><router-link to="/contact">Contact</router-link></span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link"><span class="mx-3"><router-link to="/about">More</router-link></span></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {

}
</script>
<style src="../assets/css/style.css"></style>