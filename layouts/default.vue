<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :expand-on-hover="$vuetify.breakpoint.lgAndUp"
      clipped
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar clipped-left fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer app>
      <span>&copy; 2020</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/"
        },
        {
          icon: "mdi-account",
          title: "About",
          to: "/about"
        },
        {
          icon: "mdi-contact-mail-outline",
          title: "Contact",
          to: "/contact"
        },
        {
          icon: "mdi-projector-screen",
          title: "Projects",
          to: "/projects"
        },
        {
          icon: "mdi-post-outline",
          title: "Blog",
          to: "/blog"
        },
        {
          icon: "mdi-file-document-outline",
          title: "CV",
          to: "/cv"
        }
      ],
      title: "George Soteriou"
    };
  }
};
</script>
