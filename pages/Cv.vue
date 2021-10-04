<template>
  <div>
    <v-layout ma-5 row justify-center align-center>
      <v-btn color="primary" large @click="saveFile">
        <v-icon>mdi-download</v-icon>
        Download CV
      </v-btn>
    </v-layout>
    <v-layout ma-5 row justify-center align-center>
      <PDF
        :resize="true"
        :src="CV"
        :page="1"
        style="width:100%;margin:20px auto;"
      ></PDF>
    </v-layout>
    <v-layout ma-5 row justify-center align-center>
      <PDF
        :resize="true"
        :src="CV"
        :page="2"
        style="width:100%;margin:20px auto;"
      ></PDF>
    </v-layout>
  </div>
</template>

<script>
import PDF from "pdfvuer";

export default {
  data() {
    return {
      CV: "./CV.pdf"
    };
  },
  components: {
    PDF
  },
  methods: {
    saveFile: function() {
      const linkSource = this.CV;
      const downloadLink = document.createElement("a");
      const fileName = "GeorgeSoteriouCV.pdf";

      downloadLink.href = linkSource;
      downloadLink.download = fileName;
      downloadLink.click();
    }
  }
};
</script>
