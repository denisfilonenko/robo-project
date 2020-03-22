<template>
    <div class="container-fluid">
        <div class="row">
            <p>&copy; Denis Filonenko.<br> All rights reserved.</p>
            <a class="git_icon" href="https://github.com/denisfilonenko/robo-project" target="_blank">
                <img src="../assets/github.png" alt="github link">
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "menuFooter"
    }
</script>

<style scoped>
    .row {
        padding: 0 50px;
        justify-content: space-between;
    }
    p {
        margin: 0;
        font-size: 12px;
    }
    .git_icon{
        width: 30px;
        height: 30px;
    }
    .git_icon img {
        width: 100%;
        height: 100%;
    }
</style>