<script setup>
import { ref } from 'vue';

const links = ref([
  { name: 'Typography', href: '/typography' },
  { name: 'Button', href: '/button' },
  { name: 'Checkbox', href: '/checkbox' },
  { name: 'Radiobutton', href: '/radio-button' },
  { name: 'Progress', href: '/progress' },
  { name: 'Input', href: '/input' },
  { name: 'Tabs', href: '/tabs' },
  { name: 'Table', href: '/table' },
]);

const props = defineProps({
  openSidebar: Boolean,
  required: true,
});
</script>
<template>
  <div :class="['sidebar', { sidebar_isopen: openSidebar }]">
    <router-link
      class="sidebar__link"
      v-for="link in links"
      :key="link.name"
      :to="link.href"
      >{{ link.name }}</router-link
    >
  </div>
</template>

<style scoped lang="scss">
.sidebar {
  left: 0;
  top: 62px;
  height: 100%;
  background: #fff;
  position: fixed;
  width: 250px;
  padding: 20px;
  transition: 0.2s;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.07);
  transform: translateX(-250px);
  &_isopen {
    transform: translateX(0);
  }
  &__link {
    display: block;
    border-radius: 12px;
    border: 2px solid #fff;
    transition: 0.2s;
    font-weight: bold;
    margin-bottom: 10px;
    &:hover {
      border-color: var(--primary);
    }
  }
}
</style>
