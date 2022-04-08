<template>
  <header class="">
    <nav
      class="text-lg font-bold text-digitalLavander py-5 px-20 flex flex-col gap-8 items-rigth rounded-lg"
    >
      <div class="flex items-center gap-x-4 rounded-lg">
        <h1>To Do App</h1>
        <ul class="flex flex-1 justify-end gap-x-10">
          <router-link class="cursor-pointer text-align: right" to="/">
            Home
          </router-link>

          <li class="cursor-pointer">Logout</li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
// import { supabase } from "../supabase";
// import { useRoute, useRoute } from "vue-router";
export default {
  name: "header",
  //get user from store
  //const router = useRoute()

  //   //Logout function
  //   const logout = async ()=> {
  //     await supabase.auth.signOut();
  //     router.push({name:"Home"});
  // },

  //  return { logout }
};
</script>
