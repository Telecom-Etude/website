<script>
    // import { localizePath } from "astro-i18next";
    import { onMount } from "svelte";
    import FlagFR from "../../website-data/imgs/fr.svg";
    import FlagUK from "../../website-data/imgs/uk.svg";
    import { url } from "../../website-data/content/url";
    export let list = {
        submenus: {},
    };
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
    <div>
        <a class:hover={pathname === "/"} href={localizePath("/")}>{list.menu1 || ""}</a>
    </div>
    <div>
        <a class:hover={pathname.includes("/about")} href={localizePath("/about")}>{list.menu2 || ""}</a>
    </div>
    <div class="dropdown">
        <div class="dropbtn">
            <a class:hover={pathname.includes("/projets")} href={localizePath("/projets")}>{list.menu3 || ""}</a>
        </div>
        <div class="dropdown-content">
            {#each Object.entries(list.submenus || {}) as [oneSubmenu, menuName]}
                <a href={localizePath(oneSubmenu)}>{menuName || ""}</a>
            {/each}
        </div>
    </div>
    <div>
        <a class:hover={pathname.includes("/team")} href={localizePath("/team")}>{list.menu4 || ""}</a>
    </div>
    <div>
        <a href={`${url}/plaquette.pdf`} target="_blank" rel="noreferrer">{list.menu5 || ""}</a>
    </div>
    <div>
        <a class:hover={pathname.includes("/contact")} href={localizePath("/contact")}>{list.menu6 || ""}</a>
    </div>
    <div>
        {#if typeof document !== "undefined" && document.location.href.includes("/en")}
            <a href="/" title="Change to french">
                <img src={FlagFR} width="22" alt="flag-france" class="menu-icon" />
            </a>
        {:else}
            <a href="/en" title="Change to english">
                <img src={FlagUK} width="22" alt="flag-uk" class="flag" />
            </a>
        {/if}
    </div>
</nav>

<style>
    nav > div {
        display: inline-block;
    }

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

    .expanded > div {
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

    /* The container <div> - needed to position the dropdown content */
    .dropdown {
        position: relative;
        display: inline-block;
    }

    /* Dropdown Content (Hidden by Default) */
    .dropdown-content {
        display: none;
        position: absolute;
        background-color: #f1f1f1;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        z-index: 1;
    }

    /* Links inside the dropdown */
    .dropdown-content a {
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
    }

    /* Change color of dropdown links on hover */
    .dropdown-content a:hover {
        background-color: #ddd;
    }

    /* Show the dropdown menu on hover */
    .dropdown:hover .dropdown-content {
        display: block;
    }
    .expanded .dropdown:hover .dropdown-content {
        display: inline-block;
    }
</style>
