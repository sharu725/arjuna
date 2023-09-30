<script>
    import { page } from "$app/stores";
</script>

<h1 class="header">{$page.status}: {$page?.error?.message}</h1>

<p>The page you are looking for is either moved or removed.</p>
