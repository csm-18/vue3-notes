<script setup>
import NavBar from '@/components/NavBar.vue'
import CodeBlock from '@/components/CodeBlock.vue'
</script>

<template>
  <div class="sfc-template">
    <nav-bar />
    <h1>Single File Component Template</h1>
    <code-block
      class="code"
      :code="[
        '<script setup></script>',
        '',
        '<template></template>',
        '',
        '<style scoped lang=\'scss\'>',
        '</style>',
      ]"
    />
  </div>
</template>

<style scoped lang="scss">
.sfc-template {
  font-family: 'Inter', sans;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;

  margin: 0 10rem;
  display: flex;
  flex-direction: column;
  font-size: 2rem;
  padding-bottom: 4rem;

  h1 {
    color: var(--blue);
  }

  .code {
    margin-left: 2rem;
  }
}
</style>
