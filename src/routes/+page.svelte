<script>
  import { SITE_TITLE } from '$lib/constants.js';

  export let data;

  $: ({ posts } = data);
</script>

<div class="">
  <p class="leading-relaxed">
    I'm a warrior. I have killed Karna(my brother), Bhishma(my grandfather), and
    a lot many when it came for saving the world from Adharma.
    <br />For Dharma, I'll kill anyone!
  </p>
  <p class="leading-relaxed">
    I'm also known as Partha and Dhananjaya. I defeated Drupada of Panchala.
  </p>

  <h2 class="text-3xl font-bold my-4">Articles</h2>

  <ul class="work ml-8 list-none">
    {#each posts as { title, slug }}
      <li class="flex items-center mb-3">
        <div class="i-mdi-circle-slice-8 mr-2" />
        <a class="hover:underline duration-300" href="/blog/{slug}">{title}</a>
      </li>
    {/each}
  </ul>
</div>

<svelte:head>
  <title>{SITE_TITLE}</title>
</svelte:head>

<style>
  .work a:hover {
    color: var(--brand-color);
  }
  .i-mdi-circle-slice-8 {
    color: var(--brand-color);
  }
</style>
