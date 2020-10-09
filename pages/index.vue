<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-container>
      <v-alert type="brown lighten-3">
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="namein"
              label="Your Name *"
              solo-inverted
              required="required"
              data-validation-required-message="Please enter your name."
              class="help-block text-danger"
            />
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="email"
              label="Your Email *"
              solo-inverted
              color="blue-grey darken-4"
              required="required"
              data-validation-required-message="Please enter your email address."
              class="help-block text-danger"
            />
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="phonein"
              solo-inverted
              color="blue-grey darken-4"
              label="Phone number"
              required
            />
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="message"
              label="Your Message *"
              solo-inverted
              required="required"
              data-validation-required-message="Please enter your message."
              class="help-block text-danger"
            />
          </v-col>
        </v-row>
      </v-alert>
    </v-container>

    <v-btn color="brown lighten-2" class="mr-4" @click="validate">
      submit
    </v-btn>
  </v-form>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      namein: '',
      email: '',
      message: '',
      phonein: '',
    }
  },
  computed: {
    ...mapGetters(['data']),
  },
  methods: {
    validate() {
      const name = this.namein
      const email = this.email
      // eslint-disable-next-line no-unused-vars
      const Message = this.message
      const phonenumber = this.phonein
      this.$store.commit('input', {
        name,
        // eslint-disable-next-line no-undef
        email,
        phonenumber,
      })
    },
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
  color: #3a0414;
  margin-top: 60px;
}
</style>
