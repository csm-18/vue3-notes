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
      <code-block class="code" dollar="true" :code="['npm create vue@latest']" />
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
      <p>3. Open project in vs code</p>
      <code-block class="code" dollar="true" :code="['code <your-project-name>']" />
      <p>4. Install and test run</p>
      <code-block class="code" dollar="true" :code="['bun install']" />
      <code-block class="code" dollar="true" :code="['bun dev']" />
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
  }
}
</style>
