<script>
  import { copyrightsBy, navs } from "$lib/constants";
</script>

<footer class="border-t mt-10 md:mt-20 py-4">
  <div class="md:flex items-center text-gray-500 text-sm">
    <p class="m-0">
      © {new Date().getFullYear()}
      <a
        class="hover:text-brand no-underline hover:underline duration-300"
        href={copyrightsBy.url}>{copyrightsBy.title}</a
      >
    </p>
    <ul class="ml-auto mt-4 md:mt-0 flex">
      {#each navs as { title, href }}
        <li class="md:ml-3 mr-3">
          <a
            class="hover:text-brand no-underline hover:underline duration-300"
            {href}>{title}</a
          >
        </li>
      {/each}
    </ul>
  </div>
</footer>
