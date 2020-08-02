<template>
  <div>
    <div v-if="task">
      <h1>
        {{task.title}}
      </h1>
      <form @submit.prevent="submitHandler">
        <div ref="chips" class="chips disabled"></div>

        <div class="input-field">
          <textarea style="min-height: 150px" v-model="description" id="description" class="materialize-textarea"></textarea>
          <span class="character-counter" style="float: right; font-size: 12px;">
            {{description.length}}/2048
          </span>
        </div>

        <input type="text" ref="datepicker">
        <div v-if="(task.status !== 'completed') && (task.status !== 'outdated')">
        <button class="btn" type="submit" style="margin-right: 1rem;">Update</button>

        <button class="btn deep-orange" @click="completeTask" type="button">Complete</button>
        </div>
      </form>
    </div>
    <p v-else>Task Not Found!!!</p>
  </div>
</template>

<script>
export default {
  computed: {
    task() {
      return this.$store.getters.taskById(+this.$route.params.id)
    }
  },
    name: 'Create',
    data: () => ({
      description: '',
      chips:null,
      date:null
    }),
    mounted() {
    this.description = this.task.description
      this.chips = M.Chips.init(this.$refs.chips, {
        placeholder: 'Task tags',
        data: this.task.tags
      })
      this.date = M.Datepicker.init(this.$refs.datepicker, {
        format: 'dd.mm.yyyy',
        defaultDate: new Date(this.task.date),
        setDefaultDate: true
      })
    },
    methods: {
    completeTask() {
      this.$store.dispatch('completeTask',this.task.id)
      this.$router.push('/list')
    },
      submitHandler() {

        this.$store.dispatch('updateTask',{
          id: this.task.id,
          description : this.description,
          date: this.date.date,

        })
        this.$router.push('/list')
      }
    },
    destroyed() {
      if (this.date && this.date.destroy) {
        this.date.destroy()
      }
      if (this.chips && this.chips.destroy) {
        this.chips.destroy()
      }
    }

}
</script>