<script setup>
import { ref } from 'vue';
import ProgressBar from '@/components/progress/ProgressBar.vue';
import ProgressCircle from '@/components/progress/ProgressCircle.vue';
import Button from '@/components/Button.vue';

const percentBar = ref(40);
const percentCircle = ref(60);

const addPercent = () => {
  if (percentBar.value < 100) {
    percentBar.value += 10;
  }
};
const addPercentCircle = () => {
  if (percentCircle.value < 100) {
    percentCircle.value += 10;
  }
};
</script>

<template>
  <h1 class="heading-1">Progress</h1>
  <h2 class="heading-2">Progress Bar</h2>
  <div class="line line_block">
    <ProgressBar maxWidth="400px" :percent="percentBar" color="success" />
    <Button label="add 10%" @click="addPercent" />
  </div>

  <h2 class="heading-2">Progress Circle</h2>
  <div class="line line_block">
    <ProgressCircle :percent="percentCircle" color="second" />
    <Button label="Add 10%" @click="addPercentCircle" />
  </div>
</template>

<style scoped lang="scss"></style>
