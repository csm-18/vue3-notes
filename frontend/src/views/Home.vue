<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="home">
    <h1>My Vue3 Notes</h1>
    <div class="page-links">
      <router-link class="page-link" to="/project-setup">Project Setup</router-link>
      <router-link class="page-link" to="/sfc-template">SFC Template</router-link>
      <router-link class="page-link" to="/github-pages-deploy">GitHub Pages Deploy</router-link>
    </div>
  </div>
</template>

<style lang="scss">
.home {
  margin: 0 2rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  font-family: 'Inter', sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;

  h1 {
    margin: 0;
    width: 100%;
    text-align: center;
    padding: 1rem;
    font-size: 4.5rem;
    color: rgb(84, 201, 247);
    background-color: white;
  }

  .page-links {
    margin-top: 4rem;
    padding: 2rem;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;

    .page-link {
      text-align: center;
      color: #fff;
      background: rgb(84, 201, 247);
      text-decoration: none;
      font-size: 3rem;
      padding: 2rem;
      border-radius: 0.25rem;
    }
  }
}
</style>
