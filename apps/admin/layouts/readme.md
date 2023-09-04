# Admin App Layouts

The following layouts handle the logic for realtime updates on the login status.

## Default Layout

The default layout is used for all pages that do require authentication. This layout is enabled by default by all pages under the `/pages` directory.

## Unauthenticated Layout

The unauthenticated layout is used for all pages that do not require authentication. To use it in a page, add the following to the page metadata:

```HTML
<script setup lang="ts">
import { definePageMeta } from '#imports';

definePageMeta({
  layout: 'unauthenticated',
});
</script>

```
