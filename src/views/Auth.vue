<template>
  <div
    class="h-screen bg-gradient-to-b from-astroDust to-digitalLavander font-sans"
  >
    <AppHeader />
    <SignIn v-if="login" @changeView="login = !login" />
    <SignUp v-else @changeView="login = !login" />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader.vue";
import AppFooter from "../components/AppFooter.vue";
import SignIn from "../components/SignIn.vue";
import SignUp from "../components/SignUp.vue";

export default {
  components: {
    SignIn,
    SignUp,
    AppHeader,
    AppFooter,
  },
  data() {
    return {
      login: true,
    };
  },
};
</script>

<style></style>
