export const GET = async ({ url }) => {
    const modules = import.meta.glob("../../blog/*/*.{md,svx,svelte.md}");
    const postPromises = [];

    for (let [path, resolver] of Object.entries(modules)) {
        const slug = path.replace("../../blog/", "").replace("/+page.md", "");

        const promise = resolver().then((post) => ({
            slug,
            ...post.metadata,
        }));

        postPromises.push(promise);
    }

    const posts = await Promise.all(postPromises);

    const publishedPosts = posts
        .filter((post) => post.published !== false)

    return new Response(JSON.stringify(publishedPosts));
};
