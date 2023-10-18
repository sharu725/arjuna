<script>
  import { fly } from "svelte/transition";
  import { isPhone } from "$lib/stores";

  $: showMenu = $isPhone;
</script>

<nav
  class="grid place-items-center pt-12 md:pt-20 pb-6 md:pb-12"
  on:mouseleave={() => (showMenu = false)}
>
  <a href="/">
    <button
      on:mouseenter={() => (showMenu = true)}
      class="border rounded-full border-4 hover:border-orange-600 hover:bg-orange-200 duration-300"
    >
      <img
        class="rounded-full h-20 w-20 shadow-xl"
        src="/brand/profile.png"
        alt="profile"
      />
    </button>
  </a>
  <ul class="flex">
    {#if showMenu}
      {#key showMenu}
        <li class="ml-2" in:fly={{ y: -10 }}>
          <a class="text-sm font-bold hover:text-brand" href="/">Home</a>
        </li>
        <li class="ml-2" in:fly={{ y: -10 }}>
          <a class="text-sm font-bold hover:text-brand" href="/about">About</a>
        </li>
      {/key}
    {/if}
  </ul>

  <h1 class="font-bold text-3xl md:text-5xl my-5">
    Pānduputra <span class="text-brand font-black">Arjuna</span>.
  </h1>
</nav>
