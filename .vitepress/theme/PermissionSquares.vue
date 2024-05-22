<template>
  <div style="display: flex; justify-content: center; gap: 4px;">
    <span v-if="level >= 1" style="display: inline-block; width: 10px; height: 10px; background-color: red; border-radius: 2px;"></span>
    <span v-if="level >= 2" style="display: inline-block; width: 10px; height: 10px; background-color: orange; border-radius: 2px;"></span>
    <span v-if="level >= 3" style="display: inline-block; width: 10px; height: 10px; background-color: green; border-radius: 2px;"></span>
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
