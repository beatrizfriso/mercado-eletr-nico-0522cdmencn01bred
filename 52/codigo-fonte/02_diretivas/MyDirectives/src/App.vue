<script>
export default {
  data() {
    return {
      name: null,
      fruts: [
        {
          id: 1,
          name: 'manga'
        },
        {
          id: 2,
          name: 'morango'
        },
        {
          id: 3,
          name: 'maçã'
        }
      ]
    }
  }
}
</script>

<template>
  <ul>
    <li v-for="frut in fruts">
      {{ frut.id }} {{ frut.name }}
    </li>
  </ul>

  <hr>

  <h1 v-show="name">{{ name }}</h1>

  <input v-model="name" type="text" placeholder="nome">

</template>

<style scoped>
</style>
