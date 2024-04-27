<script setup>
import { ref } from 'vue';
import Checkbox from '@/components/checkbox/Checkbox.vue';
import CheckboxGroup from '@/components/checkbox/CheckboxGroup.vue';

const checkboxActive = ref(true);
const checkboxDisabled = ref(true);
const checkboxDisabledChecked = ref(true);

const listOfHeroes = [
  { name: 'Spiderman', id: 'h1' },
  { name: 'Ironman', id: 'h2' },
  { name: 'Hulk', id: 'h3' },
  { name: 'Capitan America', id: 'h4' },
];

const selectHeroes = ref(['h1', 'h3']);

const switchProfessional = ref(false);
</script>

<template>
  <h1 class="heading-1">Checkbox</h1>
  <h2 class="heading-2">Checkbox Active</h2>
  <div class="line">
    <checkbox
      label="Checkbox Active"
      id="checkboxActive"
      value="I like it"
      name="checkboxActive"
      v-model:checked="checkboxActive"
    />
  </div>

  <h2 class="heading-2">Checkbox Disabled</h2>
  <div class="line">
    <checkbox
      label="Checkbox Disabled"
      id="checkboxDisabled"
      value="I don't like it"
      name="checkboxDisabled"
      :disabled="checkboxDisabled"
      v-model:checked="checkboxDisabledChecked"
    />
  </div>
  <h2 class="heading-2">Checkbox Group</h2>
  <div class="line line_block">
    <p>Selected heroes: {{ selectHeroes }}</p>
    <checkbox-group
      v-model:value="selectHeroes"
      name="heroes"
      :options="listOfHeroes"
    />
  </div>

  <h2 class="heading-2">Switch</h2>
  <div class="line line_block">
    <p>Switch: {{ switchProfessional }}</p>
    <checkbox
      type="switch"
      label="I'm a professional"
      id="switch"
      value="I'm a professional"
      name="switch"
      v-model:checked="switchProfessional"
    />
  </div>
</template>
q

<style scoped lang="scss"></style>
