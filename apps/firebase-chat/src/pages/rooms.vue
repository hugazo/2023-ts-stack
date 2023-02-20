<template lang="pug">
div
  q-drawer(
    show-if-above
    :width=200
  )
    q-scroll-area.fit
      .q-pa-sm
        template(v-for="n in 100")
          div
            router-link(:to="`/rooms/${n}`")
              | Drawer {{ n }} / 100
  q-page-container
    router-view
</template>
