<template>
  <div
    class="bg-gradient-to-t from-digitalLavander to-galacticCobalt rounded-md shadow-lg w-96 mt-20 mx-auto p-10 flex flex-row justify-center"
  >
    <!--INPUT-->
    <form @click="submit" class="">
      <input
        type="text"
        placeholder="Add a new task"
        class="rounded p-2 pl-4 pr-10 focus:outline-none"
        v-model="task"
      />
      <button
        type="submit"
        class="bg-astroDust text-white font-bold ml-1 py-2 px-4 rounded-full flex flex-row float-right"
      >
        Add
      </button>
    </form>
  </div>
</template>

<script>
import { supabase } from "../supabase";

export default {
  methods: {
    async submit() {
      const id = this.getUserId();
      const { data, error } = await supabase
        .from("tasks")
        .insert([{ title: this.task, user_id: id }]);
      this.getAllTasks();
    },
    getUserId() {
      const res = localStorage.getItem("supabase.auth.token");
      const finalRes = JSON.parse(res);
      const id = finalRes.currentSession.user.id;
      return id;
    },
    getAllTasks() {
      this.$emit("getAll");
    },
  },
  data() {
    return {
      task: "",
    };
  },
};
</script>
