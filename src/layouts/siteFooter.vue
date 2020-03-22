<template>
    <footer>
        <div class="col">
            <menu-footer></menu-footer>
        </div>
    </footer>
</template>

<script>
    import MenuFooter from "@/components/menuFooter";
    export default {
        name: "siteFooter",
        components: {MenuFooter}
    }
</script>
<style scoped>
    footer {
        height: 50px;
    }
</style>