<script setup>
const props = defineProps(['dollar', 'code'])
</script>
<template>
  <div class="code-block">
    <p v-for="(line, index) in code" :key="index">
      <span v-if="dollar" class="dollar">$</span> {{ line }}
    </p>
  </div>
</template>

<style scoped>
.code-block {
  font-size: 1.6rem;
  padding: 0.3rem 1rem;
  border-radius: 12px;
  background: rgb(17, 14, 54);
  color: rgb(67, 149, 196);
  margin: 0.5rem 0;

  .dollar {
    padding-right: 0.4rem;
    color: rgb(166, 83, 244);
  }
}
</style>
