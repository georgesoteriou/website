<template>
  <v-app dark>
    <v-card class="text-center">
      <v-card-title>
        <v-flex class="title" v-if="error.statusCode === 404">
          {{ pageNotFound }}
        </v-flex>
        <v-flex class="title" v-else>
          {{ otherError }}
        </v-flex>
      </v-card-title>
      <v-card-text>
        <NuxtLink style="color:white" to="/">
          Home page
        </NuxtLink>
      </v-card-text>
    </v-card>
  </v-app>
</template>

<script>
export default {
  layout: "empty",
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
    return {
      title
    };
  },
  data() {
    return {
      pageNotFound: "404 Not Found",
      otherError: "An error occurred"
    };
  }
};
</script>
