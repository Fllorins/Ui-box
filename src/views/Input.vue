<script setup>
import { ref, computed } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import {
  helpers,
  minLength,
  maxLength,
  email,
  numeric,
  sameAs,
} from '@vuelidate/validators';
import Input from '@/components/Input.vue';
import Button from '@/components/Button.vue';

const nameField = ref('');
const emailField = ref('');
const luckyField = ref('');
const passwordField = ref('');
const confirmPasswordField = ref('');
const frontendField = ref('');

const mustBeFrontend = (value) => value.includes('frontend');

const rules = computed(() => ({
  nameField: {
    minLength: helpers.withMessage('Минимальная длина 3 символа', minLength(3)),
  },
  emailField: {
    email: helpers.withMessage('Некорректный email', email),
  },
  luckyField: {
    numeric: helpers.withMessage('Вы должны ввести число', numeric),
    maxLength: helpers.withMessage(
      'Максимальная длина 2 символа',
      maxLength(2)
    ),
  },
  passwordField: {
    minLength: helpers.withMessage(
      'Минимальная длина 6 символов',
      minLength(6)
    ),
  },
  confirmPasswordField: {
    sameAsPassword: helpers.withMessage(
      'Пароли должны совпадать',
      sameAs(passwordField.value)
    ),
  },
  frontendField: {
    mustBeFrontend: helpers.withMessage(
      'Поле должно содержать слово "frontend"',
      mustBeFrontend
    ),
  },
}));

const v = useVuelidate(rules, {
  nameField,
  emailField,
  luckyField,
  passwordField,
  confirmPasswordField,
  frontendField,
});

const submitForm = () => {
  v.value.$touch();
  if (v.value.$error) return;
  alert('Form submitted');
};
</script>

<template>
  <h1 class="heading-1">Inputs</h1>
  <form @submit.prevent="submitForm">
    <Input
      label="Your name"
      name="name"
      placeholder="Enter your name"
      v-model:value="v.nameField.$model"
      :error="v.nameField.$errors"
    />
    <Input
      label="Your email"
      name="email"
      placeholder="Enter your email"
      v-model:value="v.emailField.$model"
      :error="v.emailField.$errors"
    />
    <Input
      label="Your lucky number"
      name="lucky"
      placeholder="Enter your lucky number"
      v-model:value="v.luckyField.$model"
      :error="v.luckyField.$errors"
    />

    <br />

    <Input
      type="password"
      label="Enter your password"
      name="password"
      placeholder="Enter your password"
      v-model:value="v.passwordField.$model"
      :error="v.passwordField.$errors"
    />
    <Input
      type="password"
      label="Confirm your password"
      name="confirmPassword"
      placeholder="Confirm your password"
      v-model:value="v.confirmPasswordField.$model"
      :error="v.confirmPasswordField.$errors"
    />
    <Input
      label="Frontend string"
      name="frontend"
      placeholder="Enter frontend string"
      v-model:value="v.frontendField.$model"
      :error="v.frontendField.$errors"
    />
    <Button label="Submit" color="primary" />
  </form>
</template>

<style lang="scss" scoped></style>
