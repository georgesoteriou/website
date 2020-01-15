<template>
  <v-layout row wrap justify-center align-center>
    <v-flex pa-5 v-for="(contact, i) in contacts" :key="i" xs12 sm6 lg3>
      <a :href="contact.link" target="_blank">
        <v-card class="pa-2" outlined>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="headline mb-1">
                {{ contact.name }}
              </v-list-item-title>
              <v-list-item-subtitle>
                {{ contact.info }}
              </v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-avatar tile size="100">
              <v-img v-if="contact.pic" :src="contact.pic"></v-img>
            </v-list-item-avatar>
          </v-list-item>
        </v-card>
      </a>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      contacts: [
        {
          name: "Facebook",
          pic: require("@/assets/social/fb.png"),
          link: "https://www.facebook.com/georgesot",
          info: "georgesot"
        },
        {
          name: "Twitter",
          pic: require("@/assets/social/tw.png"),
          link: "https://twitter.com/GeorgeSoteriou",
          info: "@georgesoteriou"
        },
        {
          name: "LinkedIn",
          pic: require("@/assets/social/li.png"),
          link: "https://www.linkedin.com/in/georgesoteriou/",
          info: "georgesoteriou"
        },
        {
          name: "Github",
          pic: require("@/assets/social/git.png"),
          link: "https://github.com/georgesoteriou",
          info: "georgesoteriou"
        },
        {
          name: "Instagram",
          pic: require("@/assets/social/in.png"),
          link: "https://www.instagram.com/georgesoteriou/",
          info: "georgesoteriou"
        },
        {
          name: "Email",
          pic: require("@/assets/social/email.png"),
          link: "mailto:george@soteriou.me",
          info: "george@soteriou.me"
        }
      ]
    };
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
