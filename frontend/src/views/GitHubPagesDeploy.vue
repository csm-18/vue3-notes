<script setup>
import NavBar from '@/components/NavBar.vue'
import CodeBlock from '@/components/CodeBlock.vue'
</script>

<template>
  <div class="container">
    <nav-bar />
    <h1>GitHub Pages Deployment</h1>
    <h2>1. Install gh-pages</h2>
    <code-block class="code" dollar="true" :code="['bun add -d gh-pages']" />
    <h2>2. Edit router/index.js</h2>
    <p>Set the history mode to createWebHashHistory:</p>
    <code-block
      class="code"
      :code="[
        'import { createRouter, createWebHashHistory } from \'vue-router\'',
        'const router = createRouter({',
        '  history: createWebHashHistory(),',
        '  routes: [',
        '    // your routes here',
        '  ]',
        '})',
      ]"
    />
    <p class="green">Note: This is necessary for GitHub Pages to handle routing correctly.</p>
    <h2>3. Edit vite.config.js <br /></h2>
    Add the base field with your repo name:
    <code-block
      class="code"
      :code="[
        'export default defineConfig({',
        '  base: \'/<your-repo-name>/\',',
        '  // other configurations',
        '})',
      ]"
    />
    <h2>4. Add deploy script in package.json</h2>
    <code-block
      class="code"
      :code="['\'scripts\': {', '  \'deploy\': \'gh-pages -d dist\'', '}']"
    />
    <h2>5. Build and deploy</h2>
    <code-block class="code" dollar="true" :code="['bun run build']" />
    <code-block class="code" dollar="true" :code="['bun run deploy']" />
    <h2>6. Visit your GitHub Pages URL</h2>
    <p>Your site should be live at:</p>
    <code-block class="code" :code="['https://<your-username>.github.io/<your-repo-name>/']" />
    <p class="green">FYI: It can take 2-10 minutes!</p>
  </div>
</template>

<style scoped lang="scss">
.container {
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
    margin-top: 1.8rem;
    margin-left: 2rem;
    margin-bottom: 2rem;
  }

  .green {
    color: var(--green);
  }
}
</style>
