<template>
  <div>
    <v-layout row justify-center align-center>
      <div v-if="isLoading" class="text-h3">Loading...</div>
      <vue-pdf-embed
        :source="T"
        style="width: 80%; margin: 20px auto"
        @rendered="handleDocumentRender"
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
      isLoading: true,
    }
  },
  components: {
    VuePdfEmbed,
  },
  methods: {
    handleDocumentRender() {
      this.isLoading = false
    },
  },
}
</script>

<style>
.vue-pdf-embed > div {
  margin-bottom: 20px;
}
</style>