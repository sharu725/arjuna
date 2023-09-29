<script>
  import "@unocss/reset/tailwind.css";
  import "virtual:uno.css";
  import "$lib/css/main.css";
  import Nav from "$lib/components/Nav.svelte";
</script>

<div class="wrapper font-sans">
  <Nav />
  <slot />
</div>
