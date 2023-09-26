# Route Documentation

For route usage, please direct to [Nuxt documentation](https://nuxt.com/docs/getting-started/routing)

## Route Metadata

We enabled metadata per-component, right now the following options can be set:

```html
<!-- pages/my-page.vue -->
<script setup lang="ts">
  definePageMeta({
  // optional, disables auth checks
  layout: 'unauthenticated',
  // optional, sets the page title
  title: 'My Page'
});
</script>
```
