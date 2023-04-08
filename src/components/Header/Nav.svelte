<script>
    import { onMount } from "svelte";
    export let list = [];
    export let expanded;
    let pathname = "";
    onMount(() => {
        pathname = document.location.pathname;
    });
</script>

<nav class:expanded>
    <a class:hover={pathname === "/"} href="/">{list[0]}</a>
    <a class:hover={pathname.includes("/about")} href="/about">{list[1]}</a>
    <a class:hover={pathname.includes("/projets")} href="/projets">{list[2]}</a>
    <a class:hover={pathname.includes("/team")} href="/team">{list[3]}</a>
    <a href="https://docs.telecom-etude.fr/plaquette.pdf" target="_blank" rel="noreferrer">{list[4]}</a>
    <a class:hover={pathname.includes("/contact")} href="/contact">{list[5]}</a>
</nav>

<style>
    .hover {
        opacity: 1;
    }
    a:hover {
        opacity: 1;
    }
    @keyframes transformNAV {
        from {
            height: 0%;
        }
        to {
            height: 100%;
        }
    }
    nav {
        position: relative;
        float: right;
    }
    .expanded {
        display: block !important;
        height: 0%;
        animation: 10s transformNAV;
        width: 100%;
        text-align: center;
    }

    .expanded a {
        text-align: center;
        display: block;
    }

    nav a {
        padding: 10px !important;
        position: relative;
        display: inline-block;
        vertical-align: top;
        text-decoration: none;
        color: #222222;
        padding: 20px;
        text-align: left;
        margin-left: auto;
        margin-right: auto;
        opacity: 0.6;
        font-size: 12px;
        line-height: 20px;
        font-weight: 500;
        letter-spacing: 1px;
        text-transform: uppercase;
    }
</style>
