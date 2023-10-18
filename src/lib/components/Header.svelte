<script>
  import { FIRST_NAME, LAST_NAME } from "$lib/constants";
  import { isPhone } from "$lib/stores";

  $: showMenu = $isPhone;
</script>

<nav
  class="grid place-items-center pt-12 md:pt-20 pb-6 md:pb-12"
  on:mouseleave={() => (showMenu = false)}
>
  <a href="/" title="Home">
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

  <h1 class="font-bold text-3xl md:text-5xl my-5">
    {FIRST_NAME} <span class="text-brand font-black">{LAST_NAME}</span>.
  </h1>
</nav>
