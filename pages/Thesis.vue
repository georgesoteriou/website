<template>
  <div>
    <v-layout row justify-center align-center>
      <vue-pdf-embed
        :source="T"
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

<style>
.vue-pdf-embed>div {
    margin-bottom: 20px;
}
</style>