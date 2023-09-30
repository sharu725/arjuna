<script>
  export let data;

  $: ({ posts } = data);
</script>

<div class="">
  <h1 class="font-bold text-5xl mb-8">
    Pānduputra <span class="text-brand font-black">Arjuna</span>.
  </h1>
  <p class="text-xl leading-relaxed">
    I'm a warrior. I have killed Karna(my brother), Bhishma(my grandfather).
    <br />When it comes to saving the world from Adharma, I'll kill anyone!
  </p>
  <p class="text-xl leading-relaxed">
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

<style>
  .work a:hover {
    color: var(--brand-color);
  }
  .i-mdi-circle-slice-8 {
    color: var(--brand-color);
  }
</style>
