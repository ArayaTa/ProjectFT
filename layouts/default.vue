<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      src="https://miro.medium.com/max/602/1*2MxJMMC2hZc6hrVXEYVzwg.png"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
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
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      src="https://miro.medium.com/max/602/1*2MxJMMC2hZc6hrVXEYVzwg.png"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light> mdi-repeat </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-calendar-clock',
          title: 'Tracking Number',
          to: '/',
        },
        {
          icon: 'mdi-truck-fast',
          title: 'Services',
          to: '/inspire',
        },
        {
          icon: 'mdi-calculator',
          title: 'Service Rates',
          to: '/inspire',
        },
        {
          icon: 'mdi-cube-send',
          title: 'Customer information',
          to: '/inspire',
        },
        {
          icon: 'mdi-dropbox',
          title: 'Our Philosophy',
          to: '/student',
        },
        {
          icon: 'mdi-message-reply-text',
          title: 'Contact Us',
          to: '/',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Tracking Number',
    }
  },
}
</script>
<style>
.theme--dark.v-application {
  background-image: url(https://nationalstores.co.in/wp-content/uploads/2020/07/national_distributors.gif);
  background-size: cover;
  max-width: 1920px;
  max-height: 1080px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #795548;
  margin-top: 60px;
}
</style>
