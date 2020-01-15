<template>
  <v-layout my-5 row justify-center align-center>
    <v-flex xl2 lg3 md3 sm5 xs8>
      <v-img :src="require('@/assets/me.jpg')"></v-img>
      <v-flex class="caption">[George Soteriou]</v-flex>
    </v-flex>
    <v-flex xl4 lg6 md8 sm11 xs11>
      <v-layout column justify-center align-center>
        <v-flex class="display-4 py-xs-5 pa-lg-5 mt-1">Hello!</v-flex>
        <v-flex class="display-2 py-xs-5 pa-lg-5 mb-1 text-center">
          This is George Soteriou's home of really cool stuff!
        </v-flex>
        <v-flex class="display-1 text-center my-2">
          Feel free to look around!
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
export default {};
</script>
