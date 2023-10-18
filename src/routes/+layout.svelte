<script>
  import "@unocss/reset/tailwind.css";
  import "virtual:uno.css";
  import "$lib/css/main.css";
  import Header from "$lib/components/Header.svelte";
  import { isPhone } from "$lib/stores";
  import Footer from "$lib/components/Footer.svelte";
  import { onNavigate } from "$app/navigation";

  let screenSize = 1000;

  $: $isPhone = screenSize < 768;

  onNavigate(({ complete }) => {
    if (!document.startViewTransition) return;

    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve();
        await complete;
      });
    });
  });
</script>

<div class="wrapper font-sans">
  <Header />
  <slot />
  <Footer />
</div>
<svelte:window bind:innerWidth={screenSize} />
