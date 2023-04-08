<script>
    import { onMount } from "svelte";
    const speed = 100000000;
    export let value;
    export let delay = 10;
    let numberDisplay = "";
    const animate = () => {
        const data = +numberDisplay;

        const time = value / speed;
        if (data < value) {
            numberDisplay = Math.ceil(data + time);
            setTimeout(animate, delay);
        } else {
            numberDisplay = value;
        }
    };

    onMount(() => {
        animate();
    });
</script>

{numberDisplay}
