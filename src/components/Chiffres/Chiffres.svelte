<script lang="ts">
    import IntersectionObserver from "./IntersectionObserver.svelte";
    import { fade } from "svelte/transition";
    import { cubicOut as ease } from "svelte/easing";
    import { data } from "../../website-data/content/chiffres";
    import { year } from "../../website-data/content/constants";
    import { DisplayerTweened } from "svelte-number-displayer";
    export let text: string[] = [];
</script>

<div class="section">
    <h2 class="sub">{text[0]}</h2>
    <hr />
    <IntersectionObserver once={true} let:intersecting>
        <div in:fade class="box">
            <div>
                <span class="chiffre">
                    {#if intersecting}
                        <DisplayerTweened
                            value={data.clientSatisfaits}
                            timing={5}
                            easing={ease}
                        /><span>%</span>
                    {/if}
                    <br /></span
                >
                <p>{text[1]}</p>
            </div>
            <div>
                <span class="chiffre">
                    {#if intersecting}
                        <DisplayerTweened
                            value={data.nbProjets}
                            timing={4}
                            easing={ease}
                        />
                    {/if}
                    <br /></span
                >
                <p>{text[2]}</p>
            </div>
            <div>
                <span class="chiffre">
                    {#if intersecting}
                        <DisplayerTweened
                            value={year - data.creation}
                            timing={5}
                            easing={ease}
                        />
                    {/if}
                    <br /></span
                >
                <p>{text[3]}</p>
            </div>
            <div>
                <span class="chiffre">
                    {#if intersecting}
                        <span>+</span><DisplayerTweened
                            value={data.nbEleves}
                            timing={4}
                            easing={ease}
                        />
                    {/if}
                    <br /></span
                >
                <p>{text[4]}</p>
            </div>
            <div>
                <span class="chiffre">
                    {#if intersecting}
                        <DisplayerTweened
                            value={data.nbAdmins}
                            timing={5}
                            easing={ease}
                        />
                    {/if}
                    <br /></span
                >
                <p>{text[5]}</p>
            </div>
        </div>
    </IntersectionObserver>
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
