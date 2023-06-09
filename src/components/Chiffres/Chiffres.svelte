<script lang="ts">
    import { fade } from "svelte/transition";
    import { cubicOut as ease } from "svelte/easing";
    import { data } from "../../website-data/content/chiffres";
    import { year } from "../../website-data/content/constants";
    import { DisplayerTweened } from "svelte-number-displayer";
    export let text: string[] = [];
</script>

<div class="section">
    <h3 class="sub">{text[0]}</h3>
    <hr />
    <div in:fade class="box">
        <div>
            <span class="chiffre"
                ><DisplayerTweened value={data.clientSatisfaits} timing={5} easing={ease} /><span>%</span><br /></span
            >
            <span>{text[1]}</span>
        </div>
        <div>
            <span class="chiffre"><DisplayerTweened value={data.nbProjets} timing={4} easing={ease} /><br /></span>
            <span>{text[2]}</span>
        </div>
        <div>
            <span class="chiffre"><DisplayerTweened value={year - data.creation} timing={5} easing={ease} /><br /></span
            >
            <span>{text[3]}</span>
        </div>
        <div>
            <span class="chiffre"
                ><span>+</span><DisplayerTweened value={data.nbEleves} timing={4} easing={ease} /><br /></span
            >
            <span>{text[4]}</span>
        </div>
        <div>
            <span class="chiffre"><DisplayerTweened value={data.nbAdmins} timing={5} easing={ease} /><br /></span>
            <span>{text[5]}</span>
        </div>
    </div>
    <hr />
</div>

<style>
    .sub {
        font-weight: 400;
    }
    hr {
        border-color: lightcoral;
    }
    .chiffre {
        font-size: 3em;
    }
    .section {
        width: 70%;
        text-align: center;
        margin: auto;
        margin-bottom: 50px;
    }
    .box {
        border-radius: 10px;
        display: flex;
        margin-top: 40px;
        justify-content: center;
    }
    .box > * {
        margin: 20px;
        padding: 10px;
        flex: 1;
    }
    @media screen and (max-width: 767px) {
        .chiffre {
            font-size: 2em;
        }
        .box {
            display: block;
            margin-top: 0px;
        }
        .section {
            margin-top: 10px;
            margin-bottom: 10px;
        }
        .box > * {
            margin: 5px;
            padding: 10px;
        }
    }
</style>
