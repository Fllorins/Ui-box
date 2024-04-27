<script setup>
import { ref, computed } from 'vue';
import Tabs from '@/components/Tabs.vue';

const tabs = [
  { name: 'About', label: 'О проекте' },
  { name: 'Vue', label: 'Про Vue' },
  { name: 'React', label: 'Про React' },
  { name: 'Angular', label: 'Про Angular' },
];

const selectedTab = ref('Vue');

const changeTab = (tabName) => {
  selectedTab.value = tabName;
};
</script>
<template>
  <h1 class="heading-1">Tabs</h1>
  <Tabs :names="tabs" :selectedTab="selectedTab" @changeTab="changeTab">
    <div v-if="selectedTab === 'About'">Lorem ipsum</div>
    <div v-if="selectedTab === 'Vue'">loren ipsum lorem ipsum loren ipsum</div>
    <div v-if="selectedTab === 'React'">
      loren ipsum lorem ipsum loren ipsumnkjdnfksjfvbndefjvb dfjhnvbsdf
      jkvmsfdjkvnsef;oj
    </div>
    <div v-if="selectedTab === 'Angular'">
      kwjhfiejvejbhnjerwoufjnbewjoifhcjnvfmefjnjermcnerijv
      oiernkvoeiknceorijvnkeroijnveirujnveijrkbnvierjbvneriubnveirubjvnuneriubverjuvberujvbujb
    </div>
  </Tabs>
</template>
