<template>
   <div class="container">
       <h1>Welcome!</h1>
       <p>This project is a web application for controlling a real robot. <br> It was created under the impression of the work of a <a href="http://www.codeandrobots.com/">Code & Robots</a> team.</p>
       <p>Start to get an unusual experience!</p>
       <button class="btn btn-dark">Play with the robot</button>
   </div>
</template>

<script>
    export default {
        name: "home"
    }
</script>

<style scoped>
    .container {
        margin-bottom: 8%;
    }
    h1{
        font-family: "Roboto Bold";
        letter-spacing: 2px;
        margin-top: 4%;
        text-transform: uppercase;
    }
    p {
        font-family: Roboto;
        font-size: 1.5em;
        margin-top: 20px;
    }

    p:nth-child(3) {
        margin-top: 50px;
    }

    a {
        background: linear-gradient(45deg, #edab26 33%, #735417 66%, #edab26 90%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-size: 200% 200%;
        animation: animatedText 5s linear infinite;
        font-family: "Roboto Bold";
    }
    .btn {
        font-size: 1.5em;
        font-family: Roboto;
        text-transform: uppercase;
        padding: 10px 20px;
    }
    .btn:hover {
        background-color: inherit;
        color: #000
    }


    @keyframes animatedText {
        0% {
            background-position: 0 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0 50%;
        }
    }
</style>