<template>
  <div>
    <h1>Your Tasks</h1>

    <label>Sort By</label>
    <div class="row">
      <div class="input-field col s6">
        <select class="browser-default" ref="select" v-model="filter">
          <option value="" disabled selected>Choose your option</option>
          <option value="all">All</option>
          <option value="outdated">Outdated</option>
          <option value="active">Active</option>
          <option value="completed">Completed</option>
        </select>
      </div>
    </div>


    <hr>
    <table v-if="tasks.length">
      <thead>
      <tr>
        <th>#</th>
        <th>Title</th>
        <th>Date</th>
        <th>Description</th>
        <th>Status</th>
        <th>Open</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(task,i) of displayTasks"
      :key="task.id"
      >
        <td>{{i + 1}}</td>
        <td>{{task.title}}</td>
        <td>{{new Date(task.date).toLocaleDateString()}}</td>
        <td class="td"><div class="texts">{{task.description}}</div></td>
        <td>{{task.status}}</td>
        <td>
          <router-link tag="button" class="btn btn-small"
                       :to="/task/ + task.id" >
            Open
          </router-link>
        </td>
      </tr>
      </tbody>
    </table>
    <p v-else>No Tasks🤨</p>
  </div>
</template>

<style>
.texts {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.td {
  max-width: 400px;
}
</style>

<script>
export default {
  data: () => ({
    filter : "all"
  }),
  computed : {
    tasks() {
      return this.$store.getters.tasks
    },
    displayTasks() {
      return this.tasks.filter(t => {
        if (this.filter==='all') {
          return true
        }
        return t.status === this.filter
      })
    }
  },
  mounted() {
    M.FormSelect.init(this.$refs.select)
  }
}
</script>