<template>
    <nav class="navbar navbar-expand-sm navbar-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <router-link class="nav-link" to="/">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/play">Play</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/codeLab">Code lab</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/about">About project</router-link>
                </li>

            </ul>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "menuMain"
    }
</script>

<style scoped>
    .nav-item {
        position: relative;
        margin-left: 20px;
    }
    .navbar-light .navbar-nav .nav-link {
        color: #000;
        font-size: 1.2em;
    }
    .nav-link:after {
        display: block;
        content: "";
        position: absolute;
        bottom: 0;
        height: 2px;
        width: 0;
        left: 50%;
        right: 50%;
        background-color: black;
    }
    .nav-link:hover:after {
        left: 0;
        width: 100%;
        transition-duration: .4s;
    }

</style>