<script>
    import oiseauJE from "../../website-data/imgs/logo_oiseau_2.svg";
</script>

<img
    on:contextmenu={(event) => {
        event.preventDefault();
        window.location.href = "https://github.com/Telecom-Etude/logos";
    }}
    id="img-logo"
    alt="telecom etude logo"
    src={oiseauJE}
/>

<style>
    #img-logo {
        width: 50%;
    }
    @media screen and (max-width: 767px) {
        #img-logo {
            width: 50%;
        }
    }
</style>
