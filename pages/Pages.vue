<template>
  <v-layout row wrap justify-center align-center>
    <v-flex xs12 my-3 class="display-3 text-center">Public Links</v-flex>
    <v-flex pa-5 v-for="(publicLinks, i) in publicLinkss" :key="i" xs12 sm6 lg4>
      <a :href="publicLinks.link" target="_blank">
        <v-card class="pa-2" outlined>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="headline mb-1">
                {{ publicLinks.name }}
              </v-list-item-title>
              <v-list-item-subtitle>
                {{ publicLinks.info }}
              </v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-avatar tile size="100">
              <v-img contain v-if="publicLinks.pic" :src="publicLinks.pic"></v-img>
            </v-list-item-avatar>
          </v-list-item>
        </v-card>
      </a>
    </v-flex>
    <v-flex xs12 my-3 class="display-3 text-center">Private Links</v-flex>
    <v-flex pa-5 v-for="(privateLinks, i) in privateLinkss" :key="i" xs12 sm6 lg4>
      <a :href="privateLinks.link" target="_blank">
        <v-card class="pa-2" outlined>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="headline mb-1">
                {{ privateLinks.name }}
              </v-list-item-title>
              <v-list-item-subtitle>
                {{ privateLinks.info }}
              </v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-avatar tile size="100">
              <v-img contain v-if="privateLinks.pic" :src="privateLinks.pic"></v-img>
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
      publicLinkss: [
        {
          name: "NextCloud",
          pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Nextcloud_Logo.svg/1200px-Nextcloud_Logo.svg.png",
          link: "https://cloud.georgesoteriou.com/",
          info: "cloud.georgesoteriou.com"
        },
        {
          name: "Jellyfin",
          pic: "https://developer.asustor.com/uploadIcons/0020_999_1568614457_Jellyfin_256.png",
          link: "https://jellyfin.georgesoteriou.com/",
          info: "jellyfin.georgesoteriou.com"
        },
        {
          name: "Photos",
          pic: "https://raw.githubusercontent.com/CorneliousJD/Docker-Templates/master/icons/photoview.png",
          link: "https://photos.georgesoteriou.com/",
          info: "photos.georgesoteriou.com"
        },
      ],
      privateLinkss: [
        {
          name: "Server",
          pic: "http://www.tomk.xyz/media/unraid_icon2.ico",
          link: "http://boss.georgesoteriou.com/",
          info: "boss.georgesoteriou.com"
        },
        {
          name: "Home Assistant",
          pic: "https://raw.githubusercontent.com/balloob/unraid-docker-templates/master/balloob/home-assistant-icon.png",
          link: "http://home.georgesoteriou.com/",
          info: "home.georgesoteriou.com"
        },
        {
          name: "Grafana",
          pic: "https://github.com/atribe/unRAID-docker/raw/master/icons/grafana.png",
          link: "http://boss.georgesoteriou.com:3000/",
        },
        {
          name: "Series",
          pic: "https://raw.githubusercontent.com/binhex/docker-templates/master/binhex/images/sonarr-icon.png",
          link: "http://boss.georgesoteriou.com:8989/",
        },
        {
          name: "Movies",
          pic: "https://raw.githubusercontent.com/binhex/docker-templates/master/binhex/images/radarr-icon.png",
          link: "http://boss.georgesoteriou.com:7878/",
        },
        {
          name: "SAB",
          pic: "https://raw.githubusercontent.com/binhex/docker-templates/master/binhex/images/sabnzbd-icon.png",
          link: "http://boss.georgesoteriou.com:8080/",
        },
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
