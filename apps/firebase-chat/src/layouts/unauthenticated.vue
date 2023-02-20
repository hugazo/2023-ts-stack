<template lang="pug">
q-layout
  router-view
</template>

<script lang="ts">
import useAuthStore from '@store/auth';

const store = useAuthStore();

await store.userLoad();
</script>
