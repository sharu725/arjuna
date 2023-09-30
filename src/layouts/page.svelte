<script>
  export let title = "";
</script>

<div class="wrapper">
  {#if title}
    <h1 class="header">{title}</h1>
  {/if}
  <div class="page">
    <slot />
  </div>
</div>

<svelte:head>
  <title>{title}</title>
</svelte:head>
