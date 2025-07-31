<script setup>
import CodeBlock from './CodeBlock.vue'
</script>
<template>
  <div class="project-setup">
    <h1>Project Setup</h1>
    <div class="tools">
      <h2>Tools</h2>
      <ul>
        <li>linux</li>
        <li>vscode</li>
        <li>bun</li>
      </ul>
    </div>

    <div class="steps">
      <h2>Steps</h2>
      <p>1. Get vue</p>
      <code-block class="code" dollar="true" :code="['bun create vue@latest']" />
      <p>2. Select these options</p>
      <code-block
        class="code"
        :code="[
          'Project name: <your-project-name>',
          'Vue Router? Yes',
          'Pinia? Yes',
          'ESLint? Yes',
          'Prettier? Yes',
        ]"
      />
      <code-block
        class="code"
        :code="['Skip all example code and start with a blank Vue project? Yes']"
      />
      <p>3. Open project in vs code</p>
      <code-block class="code" dollar="true" :code="['code <your-project-name>']" />
      <p>4. Install and test run</p>
      <code-block class="code" dollar="true" :code="['bun install']" />
      <code-block class="code" dollar="true" :code="['bun dev']" />
      <p>5. Add sass</p>
      <code-block class="code" dollar="true" :code="['bun add -D sass-embedded']" />
      <h3>Refactoring for Hello app</h3>
      <p>6. Refactor <b>/index.html</b></p>
      <ul>
        <li>remove icon or change source</li>
        <li>change title of the page</li>
      </ul>
      <code-block
        class="code"
        :code="[
          '<!DOCTYPE html>',
          '<html lang=\'en\'>',
          '<head>',
          '  <meta charset=\'utf-8\'>',
          '  <meta name=\'viewport\' content=\'width=device-width, initial-scale=1.0\'>',
          '  <title>Hello App</title>',
          '</head>',
          '<body>',
          '  <div id=\'app\'></div>',
          '  <script type=\'module\' src=\'/src/main.js\'></script>',
          '</body>',
          '</html>',
        ]"
      />
      <p>7. Add routes and guard to <b>src/router/index.js</b></p>
      <code-block
        class="code"
        :code="[
          'import { createRouter, createWebHistory } from \'vue-router\'',
          'import Home from \'@/views/Home.vue\'',
          '',
          'const router = createRouter({',
          '  history: createWebHistory(import.meta.env.BASE_URL),',
          '  routes: [',
          '    {',
          '      path: \'/\',',
          '      name: \'home\',',
          '      component: Home,',
          '      meta: { title: \'Home\' }, //Add title here',
          '    },',
          '  ],',
          '})',
          '',
          'router.beforeEach((to, from, next) => {',
          '  const defaultTitle = \'Hello\' //Fallback title',
          '  document.title = String(to.meta.title) || defaultTitle',
          '  next()',
          '})',
          '',
          'export default router',
        ]"
      />
      <p>8. Add global styling</p>
      <ul>
        <li>create src/assets folder</li>
        <li>create src/assets/main.css</li>
      </ul>
      <code-block
        class="code"
        :code="[
          'html,',
          'body {',
          '  margin: 0;',
          '  padding: 0;',
          '}',
          '',
          ':root {',
          ' width: 100vw;',
          ' height: 100vh;',
          '}',
        ]"
      />
      <p>Add <b>main.css</b> to <b>src/main.js</b></p>
      <code-block
        class="code"
        :code="[
          'import \'./assets/main.css\' //add this line',
          '',
          'import { createApp } from \'vue\'',
          'imort { createPinia } from \'pinia\'',
          '',
          'import App from \'./App.vue\'',
          'import router from \'./router\'',
          '',
          'const app = createApp(App)',
          '',
          'app.use(createPinia())',
          'app.use(router)',
          '',
          'app.mount(\'#app\')',
        ]"
      />
      <p>9. Create <b>src/components</b> folder (for storing components).</p>
      <p>10. Create <b>src/views</b> folder (for storing page components).</p>
      <p>11. Create <b>src/views/Home.vue</b></p>
      <code-block
        class="code"
        :code="[
          '<script setup></script>',
          '',
          '<template>',
          '  <h1>Hello</h1>',
          '</template>',
          '',
          '<style scoped lang=\'scss\'>',
          'h1 {',
          '  text-align: center;',
          '  font-size: 5rem;',
          '}',
          '</style>',
        ]"
      />
      <p>12. Change <b>src/App.vue</b></p>
      <code-block
        class="code"
        :code="[
          '<script setup>',
          'import {RouterView} from \'vue-router\'',
          '</script>',
          '',
          '<template>',
          '  <RouterView />',
          '</template>',
          '',
          '<style scoped lang=\'scss\'><style>',
        ]"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.project-setup {
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.8rem;
  font-family: sans;
  padding-bottom: 4rem;

  h1 {
    font-size: 4rem;
  }

  .tools {
    padding: 0rem 5rem;
    padding-bottom: 4rem;
    align-self: flex-start;

    ul {
      list-style: none;
      display: flex;
      gap: 4rem;
      li {
        padding: 0.2rem 0.8rem;
        border-radius: 12px;
        font-size: 1.6rem;
        background: rgb(84, 201, 247);
      }
    }
  }

  .steps {
    padding: 0rem 5rem;
    display: flex;
    flex-direction: column;
    align-self: flex-start;

    .code {
      margin-left: 2rem;
    }

    h3 {
      margin-top: 5rem;
    }
  }
}
</style>
