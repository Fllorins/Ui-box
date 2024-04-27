<script setup>
import Button from '@/components/Button.vue';

const eventForButton = () => {
  alert('Button Clicked');
};
</script>
<template>
  <h1 class="heading-1">Button</h1>
  <h2 class="heading-2">Disabled</h2>
  <div class="line">
    <Button label="Primary" color="primary" :disabled="true" />
    <Button label="Secondary" color="second" disabled />
  </div>
  <h2 class="heading-2">Colors</h2>
  <div class="line">
    <Button label="Primary" color="primary" />
    <Button label="Secondary" color="second" />
    <Button label="Success" color="success" />
    <Button label="Info" color="info" />
    <Button label="Warning" color="warning" />
    <Button label="Danger" color="danger" />
  </div>
  <h2 class="heading-2">Rounded</h2>
  <div class="line">
    <Button label="Primary" color="primary" :rounded="true" />
    <Button label="Secondary" color="second" :rounded="true" />
    <Button label="Success" color="success" rounded />
    <Button label="Info" color="info" rounded />
    <Button label="Warning" color="warning" rounded />
    <Button label="Danger" color="danger" rounded />
  </div>
  <h2 class="heading-2">Outline</h2>
  <div class="line">
    <Button label="Primary" color="primary" :outline="true" />
    <Button label="Secondary" color="second" :outline="true" />
    <Button label="Success" color="success" outline />
    <Button label="Info" color="info" outline />
    <Button label="Warning" color="warning" outline />
    <Button label="Danger" color="danger" outline />
  </div>
  <h2 class="heading-2">Icon</h2>
  <div class="line">
    <Button color="primary" icon="heart" outline />
    <Button color="second" icon="hand" />
    <Button color="success" icon="address-book" :outline="true" />
    <Button color="info" icon="credit-card" />
    <Button color="warning" icon="lemon" outline />
    <Button color="danger" icon="hourglass" />
  </div>
  <h2 class="heading-2">Size</h2>
  <div class="line">
    <Button label="Normal" color="primary" />
    <Button label="Large" size="large" color="second" />
  </div>
  <h2 class="heading-2">Event</h2>
  <div class="line">
    <Button label="Normal" color="danger" @click="eventForButton" />
  </div>
</template>
