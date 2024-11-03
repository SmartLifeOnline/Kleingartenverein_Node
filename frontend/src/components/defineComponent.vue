<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String
  }
});
</script>

<template>
  <div>{{ msg }}</div>
</template>
