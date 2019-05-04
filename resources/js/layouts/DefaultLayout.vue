<template>
  <main class="container mx-auto sm:py-8 lg:py-12">
    <slot />
  </main>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class DefaultLayout extends Vue {}
</script>

