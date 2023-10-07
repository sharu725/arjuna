<script>
  import "@unocss/reset/tailwind.css";
  import "virtual:uno.css";
  import "$lib/css/main.css";
  import Nav from "$lib/components/Nav.svelte";
  import { isPhone } from "$lib/stores";

  let screenSize = 1000;

  $: $isPhone = screenSize < 768;
</script>

<div class="wrapper font-sans">
  <Nav />
  <slot />
</div>

<svelte:window bind:innerWidth={screenSize} />
