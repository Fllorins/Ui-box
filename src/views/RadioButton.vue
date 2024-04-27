<script setup>
import { ref } from 'vue';
import RadioButton from '@/components/RadioButton.vue';

const footballClubs = ref([
  { name: 'Real Madrid', id: 'f1' },
  { name: 'Barcelona', id: 'f2' },
  { name: 'Bayern Munich', id: 'f3' },
  { name: 'Paris Saint Germain', id: 'f4' },
]);

const selectedClub = ref('');

const disabledRadio = ref(true);
const disabledRadioChecked = ref(true);
</script>

<template>
  <h1 class="heading-1">Radiobutton</h1>
  <h2 class="heading-2">Basic</h2>
  <div class="line line_block">
    <p>Selected club: {{ selectedClub }}</p>
    <div v-for="club in footballClubs" :key="club.id">
      <radioButton
        :value="club.name"
        :label="club.name"
        :id="club.id"
        name="club"
        v-model:checkedValue="selectedClub"
      />
    </div>
  </div>

  <h2 class="heading-2">Disabled</h2>
  <div class="line line_block">
    <radioButton
      name="Radiobutton Disabled"
      value="Radiobutton Disabled"
      id="radio-disabled"
      label="Radiobutton Disabled"
      :disabled="disabledRadio"
      v-model:checkedValue="disabledRadioChecked"
    />
  </div>
</template>

<style lang="scss" scoped></style>
