<template>
  <div style="display: flex; justify-content: center; gap: 4px;">
    <div v-if="level >= 1" style="width: 10px; height: 10px; background-color: red; border-radius: 2px;"></div>
    <div v-if="level >= 2" style="width: 10px; height: 10px; background-color: orange; border-radius: 2px;"></div>
    <div v-if="level >= 3" style="width: 10px; height: 10px; background-color: green; border-radius: 2px;"></div>
  </div>
</template>

<script>
export default {
  props: {
    level: {
      type: Number,
      required: true
    }
  }
}
</script>
