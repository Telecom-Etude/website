<script lang="ts">
    import { fade } from "svelte/transition";
    import OneNumber from "./OneNumber.svelte";
    import { data } from "../../website-data/content/chiffres";
    import { year } from "../../website-data/content/constants";
    export let text: string[] = [];
</script>

<div class="section">
    <h3 class="sub">{text[0]}</h3>
    <hr />
    <div in:fade class="box">
        <div>
            <span class="chiffre"><OneNumber value={data.clientSatisfaits} delay={10} /><span>%</span><br /></span>
            <span>{text[1]}</span>
        </div>
        <div>
            <span class="chiffre"><OneNumber value={data.nbProjets} delay={1} /><br /></span>
            <span>{text[2]}</span>
        </div>
        <div>
            <span class="chiffre"><OneNumber value={year - data.creation} delay={15} /><br /></span>
            <span>{text[3]}</span>
        </div>
        <div>
            <span class="chiffre"><span>+</span><OneNumber value={data.nbEleves} delay={1} /><br /></span>
            <span>{text[4]}</span>
        </div>
        <div>
            <span class="chiffre"><OneNumber value={data.nbAdmins} delay={12} /><br /></span>
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
