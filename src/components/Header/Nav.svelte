<script>
    // import { localizePath } from "astro-i18next";
    import { onMount } from "svelte";
    import FlagFR from "../../website-data/imgs/fr.svg";
    import FlagUK from "../../website-data/imgs/uk.svg";
    export let list = [];
    export let expanded;
    let pathname = "";
    onMount(() => {
        pathname = document.location.pathname;
    });
    const localizePath = (path) => {
        if (typeof document !== "undefined") {
            if (document.location.href.includes("/en")) {
                if (path !== "/") {
                    return `/en${path}`;
                }
                return "/en";
            }
            return path;
        }
        return path;
    };
</script>

<nav class:expanded>
    <a class:hover={pathname === "/"} href={localizePath("/")}>{list[0] || ""}</a>
    <a class:hover={pathname.includes("/about")} href={localizePath("/about")}>{list[1] || ""}</a>
    <a class:hover={pathname.includes("/projets")} href={localizePath("/projets")}>{list[2] || ""}</a>
    <a class:hover={pathname.includes("/team")} href={localizePath("/team")}>{list[3] || ""}</a>
    <a href="https://docs.telecom-etude.fr/plaquette.pdf" target="_blank" rel="noreferrer">{list[4] || ""}</a>
    <a class:hover={pathname.includes("/contact")} href={localizePath("/contact")}>{list[5] || ""}</a>
    {#if typeof document !== "undefined" && document.location.href.includes("/en")}
        <a href="/" title="Change to french">
            <img src={FlagFR} width="22" alt="flag-france" class="menu-icon" />
        </a>
    {:else}
        <a href="/en" title="Change to english">
            <img src={FlagUK} width="22" alt="flag-uk" class="flag" />
        </a>
    {/if}
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
