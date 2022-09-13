export default {
  data: () => ({
    random: Math.random()
  }),
  template: `
    <section style="border: 1px solid lime;">
      <h1>Random component</h1>
      <p>Hi i will display a random number {{ random }}</p>
    </section>
  `
}
