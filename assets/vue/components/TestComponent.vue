<script>
export default {
  methods: {
    addOption(option){
      this.$store.commit('addOption', option)
    }
  },
  computed: {
    options(){
      return this.$store.state.options
    },
  }
}
</script>

<template>
  <div class="component-a">
    <h1>Component A</h1>
    <ul>
      <li v-for="option in options" class="option">
          {{option.name}}
          <button @click="addOption(option)">Add</button>
      </li>
    </ul>
  </div>
</template>

<style>
.component-a {
  border: 1px solid orange
}
.option {
  color: green;
  font-weight: bold;
}
</style>
