<template>
  <div>
    <header>
      <nav class="container mx-auto py-8">
        <ul class="list-reset flex justify-center items-center font-serif text-xl font-semibold text-black">
          <li class="px-8">Coffees</li>
          <li><router-link :to="{ name: 'app'}"><DarkLogo /></router-link></li>
          <li class="px-8">Roaster</li>
        </ul>
      </nav>
    </header>
    <main class="container mx-auto sm:py-8 lg:py-12">
      <slot />
    </main>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import DarkLogo from '@icons/DarkLogo.vue';

@Component({
  components: {
    DarkLogo
  }
})
export default class DefaultLayout extends Vue {}
</script>

