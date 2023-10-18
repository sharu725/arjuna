<script>
  export let title = "";
</script>

{#if title}
  <h1 class="header">{title}</h1>
{/if}
<div class="page">
  <slot />
</div>

<svelte:head>
  <title>{title}</title>
</svelte:head>
