<script>
export default {
  computed: {
    selected(){
      return this.$store.state.selected
    },
  },
}
</script>

<template>
  <div class="component-b">
    <h1>Component B</h1>
    <p v-if="!selected.length > 0">
      Je hebt nog geen opties toegevoegd.
    </p>
    <ul v-if="selected.length > 0">
      <li>Aantal geselecteerde opties: {{selected.length}}</li>
      <li v-for="option in selected" class="option">
        {{option.name}}
      </li>
    </ul>
  </div>
</template>

<style>
.component-b {
  border: 1px solid red
}
.option {
  color: green;
  font-weight: bold;
}
</style>
