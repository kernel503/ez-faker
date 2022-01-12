<script setup>
import { ref, computed } from 'vue';
import types from '../types';

import { getValueFromFaker } from '../utils';

const defaultInput = { name: '', group: '', fn: '' };

const rowsToGenerate = ref(5);

const data = ref('');

const fields = ref([{ name: '_id', group: 'datatype', fn: 'datatype.uuid' }]);

function hasError() {
  const parsedValue = +rowsToGenerate.value;
  if (Number.isNaN(parsedValue) || !Number.isInteger(parsedValue)) return true;
  return parsedValue <= 0;
}

function addColumn() {
  fields.value = [...fields.value, { ...defaultInput }];
}

function getFunctionsByGroup(group) {
  let filter = types.find((type) => type.group === group);
  filter ||= { options: [] };
  return filter.options;
}

function generateData() {
  if (hasError()) {
    data.value = 'Error';
    return;
  }

  const rows = +rowsToGenerate.value;

  let fakeData = [];

  for (let step = 0; step < rows; step++) {
    let faker = {};
    for (let indexField = 0; indexField < fields.value.length; indexField++) {
      const fieldName = fields.value[indexField].name.trim();
      const fieldFn = fields.value[indexField].fn;
      
      if (fieldName && fieldFn) {
        faker = { ...faker, [fieldName]: getValueFromFaker(fieldFn) };
      }
    }
    fakeData.push(faker);
  }

  data.value = fakeData;
}
</script>

<template>
  <div class="container m-2">
    <div class="columns">
      <div class="column col-6 col-mr-auto">
        <div class="columns">
          <template class="input-group" v-for="field in fields" :key="field.value">
            <input class="form-input input-lg column col-4" type="text" placeholder="" v-model="field.name" />
            <select class="form-select select-lg column col-4" v-model="field.group" @change="field.fn = ''">
              <option v-for="type in types" :key="type.group" :value="type.group">
                {{ type.group }}
              </option>
            </select>
            <select class="form-select select-lg column col-4" v-model="field.fn">
              <option v-for="type in getFunctionsByGroup(field.group)" :key="type.fn" :value="type.fn">
                {{ type.name }}
              </option>
            </select>
          </template>
        </div>

        <button class="btn text-primary mt-2 float-right" @click="addColumn">Agregar columna</button>
      </div>
      <div class="divider-vert"></div>
      <div class="column">
        <div class="columns">
          <div class="input-group column col-4">
            <input
              class="form-input"
              type="text"
              placeholder="Cantidad a generar"
              :class="{ 'is-error': hasError() }"
              v-model="rowsToGenerate"
            />
            <button class="btn text-primary input-group-btn" @click="generateData">Generar</button>
          </div>
        </div>
        <pre class="mt-2">
          {{ data }}
        </pre>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
