<template>
  <div>
    <v-layout ma-5 row justify-center align-center v-for="i in 55" :key="i">
      <vue-pdf-embed
        :source="T"
        :page="i"
        style="width: 80%; margin: 20px auto"
      ></vue-pdf-embed>
    </v-layout>
  </div>
</template>

<script>
import VuePdfEmbed from 'vue-pdf-embed/dist/vue2-pdf-embed'

export default {
  data() {
    return {
      T: '/docs/thesis.pdf',
    }
  },
  components: {
    VuePdfEmbed,
  },
}
</script>