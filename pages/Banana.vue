<template>
  <v-layout column justify-center align-center>
    <v-flex xs12>
        alert("b" + "a" + +"a" + "a")
    </v-flex>
  </v-layout>
</template>

<script>
import * as GitgraphJS from '@gitgraph/js/lib'

export default {
  mounted() {
    alert("b" + "a" + +"a" + "a")
  }
}
</script>
