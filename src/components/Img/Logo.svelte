<script>
    import jeLogo from "../../website-data/imgs/logo-long.svg";
</script>

<img
    on:contextmenu={(event) => {
        event.preventDefault();
        window.location.href = "https://github.com/Telecom-Etude/logos";
    }}
    src={jeLogo}
    width="230"
    alt="logo-telecom-etude"
    id="logo-footer"
    class="webflow-logo-tiny"
/>
