<script>
  import "@unocss/reset/tailwind.css";
  import "virtual:uno.css";
  import "$lib/css/main.css";
  import Header from "$lib/components/Header.svelte";
  import { isPhone } from "$lib/stores";
  import Footer from "$lib/components/Footer.svelte";
  import { onNavigate } from "$app/navigation";
  import { page } from "$app/stores";
  import { repoLink } from "$lib/constants";
  import { dev } from "$app/environment";

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

<div class="wrapper relative font-sans">
  <Header />
  <slot />
  <Footer />
  {#if dev}
    <a
      class="absolute right-0 top-2"
      target="_blank"
      href="{repoLink}/tree/master/src/routes{$page.route.id}"
      title="Edit this page(dev only)"
    >
      <div class="i-iconoir-page-edit" />
    </a>
  {/if}
</div>

<svelte:window bind:innerWidth={screenSize} />
