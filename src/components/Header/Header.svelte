<script>
    import logoUrl from "../../website-data/imgs/logo-long.svg";
    import imgLogoMenu from "../../website-data/imgs/header/menu.png";
    import Nav from "./Nav.svelte";
    let expanded = false;
</script>

<header class="navigation w-nav">
    <div class="navigation-wrap" class:border={expanded}>
        <a href="/" class="logo-link w-nav-brand">
            <img src={logoUrl} width="150" alt="" class="logo-image" />
        </a>
        <div class="menu">
            <div class="nav">
                <Nav expanded={false} />
            </div>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div
                class="menu-button w-nav-button"
                aria-label="menu"
                role="button"
                tabindex="0"
                on:click={() => {
                    expanded = !expanded;
                }}
            >
                <img src={imgLogoMenu} width="22" alt="menu-icon" class="menu-icon" />
            </div>
        </div>
    </div>
    {#if expanded}
        <div class="w-nav-overlay">
            <Nav expanded={true} />
        </div>
    {/if}
</header>

<style>
    .navigation-wrap {
        display: flex;
        justify-content: center;
    }
    .navigation-wrap > * {
        flex: 1;
    }
    .navigation-wrap .menu {
        flex: 10;
    }
    @media screen and (max-width: 991px) {
        .menu .nav {
            display: none;
        }
        .w-nav-overlay {
            display: block;
        }
    }

    @media screen and (max-width: 991px) {
        .border {
            border-bottom: 1px solid gray;
        }
    }

    @media screen and (min-width: 991px) {
        .w-nav-overlay {
            display: none;
        }
    }

    .menu {
        justify-content: flex-end !important;
        display: flex;
        align-items: center;
        z-index: 0;
    }
    header {
        display: block;
        position: fixed !important;
        background-color: white !important;
        top: 0px;
        width: 100%;
        border-bottom: 1px solid var(--orange);
        padding: 0px 20px !important;
    }
    @media screen and (max-width: 991px) {
        header {
            padding: 0px 20px !important;
        }
        header .w-nav-button {
            display: block;
        }
        .menu {
            align-items: normal;
        }
    }

    @media screen and (max-width: 767px) {
        .w-nav-brand {
            padding-left: 10px;
        }
    }
    .w-nav {
        position: relative;
        background: #dddddd;
        z-index: 1000;
    }

    .w-nav:before,
    .w-nav:after {
        content: " ";
        display: table;
        grid-column-start: 1;
        grid-row-start: 1;
        grid-column-end: 2;
        grid-row-end: 2;
    }

    .w-nav:after {
        clear: both;
    }

    .w-nav-brand {
        position: relative;
        float: left;
        text-decoration: none;
        color: #333333;
    }

    .w-nav-button {
        position: relative;
        float: right;
        padding: 18px;
        font-size: 24px;
        display: none;
        cursor: pointer;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .menu-button {
        cursor: pointer;
    }
</style>
