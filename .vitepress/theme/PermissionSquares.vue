<template>
  <div style="display: flex; justify-content: center;">
    <img v-if="level >= 1" src="/red_square.svg" alt="Admin" style="margin-right: 5px" />
    <img v-if="level >= 2" src="/orange_square.svg" alt="Teacher" style="margin-right: 5px" />
    <img v-if="level >= 3" src="/green_square.svg" alt="Student" style="margin-right: 5px" />
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
