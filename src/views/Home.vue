<template>
  <div
    class="h-screen bg-gradient-to-b from-astroDust to-digitalLavander font-sans"
  >
    <AppHeader />
    <!--Para crear nuevos paneles-->
    <div>
      <NewTask @getAll="getAllTasks" />
      <!-- <h1 class="bg-purple-200 text-center py-10"></h1> -->
      <TaskItem @getAll="getAllTasks" v-for="task in tasks" :task="task" />
    </div>
    <AppFooter />
  </div>
</template>

<script>
import { supabase } from "../supabase";
import AppHeader from "../components/AppHeader.vue";
import TaskItem from "../components/TaskItem.vue";
import NewTask from "../components/NewTask.vue";
import AppFooter from "../components/AppFooter.vue";

export default {
  components: {
    AppHeader,
    TaskItem,
    NewTask,
    AppFooter,
  },
  data() {
    return {
      tasks: [],
    };
  },
  methods: {
    // Get tasks
    async getUserId() {
      const res = localStorage.getItem("supabase.auth.token");
      const myJson = JSON.parse(res);
      const id = myJson.currentSession.user.id;
      return id;
    },
    async getAllTasks() {
      const { data } = await supabase
        .from("tasks")
        .select("*")
        .order("id", { ascending: false });
      this.tasks = data;
    },
  },
  mounted() {
    this.getAllTasks();
  },
};
</script>

<style></style>
