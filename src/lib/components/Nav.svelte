<script>
    import { fly } from "svelte/transition";

    let showMenu = false;
</script>

<nav class="flex items-center py-4" on:mouseleave={() => (showMenu = false)}>
    <a href="/">
        <button
            on:mouseenter={() => (showMenu = true)}
            class="border rounded-full border-2 hover:border-orange-600 hover:bg-orange-200 duration-300"
        >
            <div class="text-2xl text-brand i-solar-fire-minimalistic-bold" />
        </button>
    </a>
    {#if showMenu}
        {#key showMenu}
            <ul class="flex" in:fly={{ x: -10 }}>
                <li class="ml-2">
                    <a class="text-sm font-bold hover:text-brand" href="/"
                        >Home</a
                    >
                </li>
                <li class="ml-2">
                    <a class="text-sm font-bold hover:text-brand" href="/about"
                        >About</a
                    >
                </li>
            </ul>
        {/key}
    {/if}
</nav>
