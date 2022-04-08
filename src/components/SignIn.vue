<template>
  <div>
    <form
      class="bg-gradient-to-t from-digitalLavander to-galacticCobalt rounded-md shadow-lg w-96 mt-20 mx-auto p-10 flex justify-center"
    >
      <!--Login-->
      <form @submit.prevent="signIn">
        <form action="">
          <h1 class="text-4xl text-digitalLavander mb-6 p-18 text-center">
            Login
          </h1>
        </form>

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
        <!--boton registro-->

        <button
          type="submit"
          class="text-base bg-blue-700 text-white py-3 px-5 mx-24 mt-10 rounded-full flex flex-row"
        >
          Sign in
        </button>

        <div>
          <button
            class="text-base mt-12 p-3 mb-px text-blue-700"
            @click="$emit('changeView')"
          >
            Don´t have an account?
            <span
              class="text-base hover:bg-blue-700 text-white py-3 px-5 rounded-full"
              >Sign up</span
            >
          </button>
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
const errorMsg = ref(null);

//Router variable
const router = useRouter();

//Async function that will enable the user to log in into my cool app
async function signIn() {
  try {
    const { user, error } = await supabase.auth.signIn({
      email: email.value,
      password: password.value,
    });
    if (error) throw error;
    router.push({ path: "/" });
  } catch (error) {
    errorMsg.value = `Error: &{error.message}`;
    setTimeout(() => {
      errorMsg.vale = null;
    }, 5000);
  }
  return { emai, password, errorMsg };
}
</script>

<style></style>
