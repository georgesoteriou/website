<template>
  <div>
    <v-layout ma-5 row justify-center align-center>
      <v-btn color="primary" large @click="saveFile">
        <v-icon>mdi-download</v-icon>
        Download CV
      </v-btn>
    </v-layout>
    <v-layout ma-5 row justify-center align-center>
      <vue-pdf-embed
        :source="C"
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
      C: '/docs/CV.pdf',
    }
  },
  components: {
    VuePdfEmbed,
  },
  methods: {
    saveFile: function () {
      const linkSource = this.C
      const downloadLink = document.createElement('a')
      const fileName = 'GeorgeSoteriouCV.pdf'

      downloadLink.href = linkSource
      downloadLink.download = fileName
      downloadLink.click()
    },
  },
}
</script>

<style>
.vue-pdf-embed > div {
  margin-bottom: 20px;
}
</style>