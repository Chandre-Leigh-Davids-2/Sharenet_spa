<template>
    <div class="static d-flex justify-content-center align-items-center text-center">
        <div>
            <h3>Induldge in Tranquility</h3>
        </div>
    </div>
    <div class="row padding ">
        <div class="col-md-3 col-6 d-flex justify-content-center">
            <div class="offer">
                <img src="../assets/images/eyebrows.png" alt="">
            </div>
        </div>
        <div class="col-md-3 col-6 d-flex justify-content-center">
            <div class="offer">
                <img src="../assets/images/eyelash.png" alt="">
            </div>
        </div>
        <div class="col-md-3 col-6 d-flex justify-content-center">
            <div class="offer">
                <img src="../assets/images/facial.png" alt="">
            </div>
        </div>
        <div class="col-md-3 col-6 d-flex justify-content-center">
            <div class="offer">
                <img src="../assets/images/hair.png" alt="">
            </div>
        </div>
        <div class="col-md-3 col-6 d-flex justify-content-center">
            <div class="offer">
                <img src="../assets/images/manicure.png" alt="">
            </div>
        </div>
        <div class="col-md-3 col-6 d-flex justify-content-center">
            <div class="offer">
                <img src="../assets/images/nails.png" alt="">
            </div>
        </div>
        <div class="col-md-3 col-6 d-flex justify-content-center">
            <div class="offer">
                <img src="../assets/images/pedicure.png" alt="">
            </div>
        </div>
        <div class="col-md-3 col-6 d-flex justify-content-center">
            <div class="offer">
                <img src="../assets/images/wax.png" alt="">
            </div>
        </div>
    </div>
    <div class="iframe-container">
        <div class="iframe-overlay"></div>
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.4949556039014!2d18.62753267570895!3d-33.87690447322345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc41e6218f7ab3%3A0xbdd802ca53b92d43!2sSharenet%20(Pty)%20Ltd!5e0!3m2!1sen!2sza!4v1742471999943!5m2!1sen!2sza"
            width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <div class="row">
        <div class="banner">
            <h4>Learn More About Us</h4>
            <p><router-link to="/">Go back to home page</router-link></p>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
.static {
    background-image: url('../assets/images/close-up-beautiful-african-woman-enjoying-massage-spa-salon.jpg');
    height: 600px;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

i {
    font-size: 20vh;
}

img {
    width: 100%;
    height: 100%;
}

h3 {
    font-size: 5vw;
    font-family: "Montserrat", sans-serif;
    color: white;
    text-shadow: 1px 2px 2px black;
}
h4{
    font-family: "Montserrat", sans-serif;
    color: white;
    text-shadow: 1px 1px 1px black;
}

.padding {
    padding: 3% 5% 3% 5%;
    background-color: rgb(44, 44, 44);
}

.offer {
    width: 12vw;
    margin: 2%;
}

.offer:hover {
    width: 12vw;
    scale: 1.3;
    transition: 0.3s ease-in-out;
}

.col-md-3 {
    padding: 3%;
    border: 1px solid rgb(60, 51, 0);
}

.iframe-container {
    position: relative;
    width: 100%;
    height: 70vh;
    /* Adjust height as needed */
    overflow: hidden;
}

/* Black overlay before hovering */
.iframe-overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(39, 39, 39, 0.774);
    opacity: 1;
    transition: opacity 0.3s ease;
}

/* Remove overlay on hover */
.iframe-container:hover .iframe-overlay {
    opacity: 0;
}

/* Make iframe fill container */
iframe {
    width: 100%;
    height: 100%;
    border: none;
}
.banner{
    background-color: rgb(205, 177, 20);
    padding: 5%;
    text-align: center;
}
</style>