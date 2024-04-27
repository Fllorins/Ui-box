<script setup>
import { ref, computed } from 'vue';
import BaseTable from '@/components/table/BaseTable.vue';
import TableRow from '@/components/table/TableRow.vue';
import TableColumn from '@/components/table/TableColumn.vue';
import Button from '@/components/Button.vue';

const tableHeads = ['id', 'Author', 'Title', 'Cover', ''];
const tableSizeColumns = '50px 1fr 2fr 150px 140px';

// сортировка по id
const sortField = ref('id');
// сортировка по возрастанию
const typeSort = ref('asc'); // asc - по возрастанию, desc - по убыванию

const books = ref([
  {
    id: 1,
    author: 'Dmitry Glukhovsky',
    title: 'Metro 2033',
    image:
      'https://cdn1.epicgames.com/offer/petunia/metro_2033_epic_tile_1200x1600_1200x1600-c126d15c1891a94e95491ae3cd056948',
    bg: '#FFA26B',
  },
  {
    id: 12,
    author: 'James Clear',
    title: 'Atomic Habits: An Easy',
    image:
      'https://m.media-amazon.com/images/P/0735211299.01._SCLZZZZZZZ_SX500_.jpg',
    bg: '#00C48C',
  },
  {
    id: 2,
    author: 'J. K. Rowling',
    title: 'Harry Potter and the Order of the Phoenix',
    image: 'https://i.insider.com/5978b6df197cf7fd1f8b48a4?width=700',
    bg: '#00C48C',
  },
]);

const booksSorting = computed(() => {
  return books.value.sort((a, b) => {
    let modifier = 1;
    if (typeSort.value === 'desc') modifier = -1;
    if (a[sortField.value] < b[sortField.value]) return -1 * modifier;
    if (a[sortField.value] > b[sortField.value]) return 1 * modifier;
    return 0;
  });
});

const setSort = (name) => {
  if (sortField.value === name) {
    if (typeSort.value === 'asc') {
      typeSort.value = 'desc';
    } else {
      typeSort.value = 'asc';
    }
  } else {
    sortField.value = name;
  }
};
</script>

<template>
  <h1 class="heading-1">Table</h1>
  <span>Sort Field: {{ sortField }}</span> <br />
  <span>Sort Type: {{ typeSort }}</span> <br />
  <base-table
    :head="tableHeads"
    :columnTemplates="tableSizeColumns"
    @sorting="setSort"
  >
    <table-row
      v-for="book in booksSorting"
      :key="book.id"
      :columnTemplates="tableSizeColumns"
      :bgRow="book.bg"
    >
      <table-column :columnTitle="tableHeads[0]">{{ book.id }}</table-column>
      <table-column :columnTitle="tableHeads[1]">{{
        book.author
      }}</table-column>
      <table-column :columnTitle="tableHeads[2]">{{ book.title }}</table-column>
      <table-column :image="true" :srcImage="book.image"></table-column>
      <table-column><Button label="View"></Button></table-column>
    </table-row>
  </base-table>
</template>

<style scoped lang="scss"></style>
