<template>
    <div class="row p-5">
        <div class="d-flex justify-content-center">
            <div class="logo">
                <img src="../assets/images/c15cf0d3-5dbb-408f-90c5-bb89945bee5b.jpeg" alt="">
            </div>
        </div>
        <div class="social d-flex justify-content-center gap-3 mb-4">
            <i class="bi bi-facebook"></i>
            <i class="bi bi-instagram"></i>
            <i class="bi bi-twitter-x"></i>
            <i class="bi bi-pinterest"></i>
            <i class="bi bi-tiktok"></i>
        </div>
        <div>
            <div class="details w-100 d-flex justify-content-center">
                <span class="mx-1"><i class="bi bi-telephone"> +27 21 700 4800 | </i></span><br>
                <span class="mx-1"><i class="bi bi-envelope"> support@sharenet.co.za | </i></span><br>
                <span class="mx-1"><i class="bi bi-geo-alt"> Bellville, Cape Town</i></span>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.row {
    min-height: 40vh;
    background-color: rgb(0, 0, 0);
}

.logo {
    width: 15vw;
}

@media screen and (max-width:775px) {
    .logo {
        width: 15vw;
    }
}

img {
    height: 100%;
    width: 100%;
    object-fit: contain;
}

i {
    color: rgb(199, 199, 199);
    font-size: 2vh;
}
</style>