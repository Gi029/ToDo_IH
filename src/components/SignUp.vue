<template>
  <div
    class="bg-gradient-to-t from-digitalLavander to-galacticCobalt rounded-md shadow-lg w-96 mt-20 mx-auto p-10 flex justify-center"
  >
    <form class="">
      <!--Registro-->

      <form @submit.prevent="signUp">
        <h1 class="text-4xl text-digitalLavander mb-6 p-18 text-center">
          Register
        </h1>

        <div class="flex flex-col mb-6">
          <label for="email" class="mb-3 text-base"></label>
          <input
            type="email"
            placeholder="Email"
            v-model="email"
            class="rounded p-3 focus:outline-none"
          />
        </div>

        <div class="flex flex-col mb-6">
          <label for="password" class="mb-3 text-base"></label>

          <input
            type="password"
            placeholder="Password"
            v-model="password"
            class="rounded p-3 focus:outline-none"
          />
        </div>

        <div class="flex flex-col mb-6">
          <label for="confirmPassword" class="mb-3 text-base"></label>
          <input
            type="password"
            v-model="confirmPassword"
            placeholder="Confirm Password"
            class="rounded p-3 focus:outline-none"
          />
        </div>

        <button
          type="submit"
          class="text-base bg-blue-700 text-white py-3 px-5 mx-24 mt-10 rounded-full flex flex-row"
        >
          Register
        </button>

        <!--Error registro-->
        <div class="mb-10 py-4 px-8 rounded-md bg-light-grey">
          <p v-if="errorMsg">{{ errorMsg }}</p>
          <!--link para registro-->
          <div class="flex flex-col items-center">
            <button
              class="text-base mt-9 p-2 mb-px text-blue-700 flex flex-col items-center"
              @click="$emit('changeView')"
            >
              Already have an account?

              <span
                class="text-base hover:bg-blue-700 text-white py-2 px-5 rounded-full flex flex-col items-center"
                >Login</span
              >
            </button>
          </div>
        </div>
      </form>
    </form>
  </div>
</template>

<script setup>
import { supabase } from "../supabase";
import { useRouter } from "vue-router";
import { ref } from "vue";

// Auth[HACER SIGN IN] Variables
const email = ref(null);
const password = ref(null);
const confirmPassword = ref(null);
const errorMsg = ref(null);

//Router variable
const router = useRouter();

//Async function that will enable the user to log in into my cool app
async function signUp() {
  if (password.value === confirmPassword.value) {
    try {
      const { user, error } = await supabase.auth.signUp({
        email: email.value,
        password: password.value,
      });
      if (error) throw error;
      router.push({ path: "/" });
    } catch (error) {
      errorMsg.value = `Error: ${error.message}`;
      setTimeout(() => {
        errorMsg.vale = null;
      }, 5000);
    }
    return { email, password, confirmPassword, errorMsg };
  }
  errorMsg.value = "Confirm your email!";
  setTimeout(() => {
    errorMsg.vale = null;
  }, 5000);
}
</script>

<style></style>
