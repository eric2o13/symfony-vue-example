<script>
export default {
  methods: {
    removeOptionByIndex(index) {
      this.$store.commit('removeSelectedOptionByIndex', index)
    }
  },
  computed: {
    selected(){
      return this.$store.state.selected
    },
    totalValue(){
      return this.$store.state.selected.reduce((sum, value) => {
        return sum + value.price
      }, 0).toLocaleString('en-US', { maximumFractionDigits: 2, minimumFractionDigits: 2 })
    }
  },
}
</script>

<template>
  <div class="component-b">
    <h1>Component B</h1>
    <p v-if="!selected.length > 0">
      No selected options.
    </p>
    <ul v-if="selected.length > 0">
      <li>Total selected options: {{selected.length}} </li>
      <li v-for="(option, i) in selected" class="option">
        {{option.name}}
        <button @click="removeOptionByIndex(i)">
          Remove
        </button>
      </li>
      <li>Total price:  $ {{totalValue}}</li>
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
