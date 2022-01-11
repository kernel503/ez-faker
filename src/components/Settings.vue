<script setup>
import { ref } from "vue";
import faker from "faker";
import { get } from "lodash";

const types = [
  {
    group: "address",
    options: [
      {
        fn: "address.zipCode",
        name: "zipCode",
      },
      {
        fn: "address.zipCodeByState",
        name: "zipCodeByState",
      },
      {
        fn: "address.city",
        name: "city",
      },
      {
        fn: "address.cityPrefix",
        name: "cityPrefix",
      },
      {
        fn: "address.citySuffix",
        name: "citySuffix",
      },
      {
        fn: "address.cityName",
        name: "cityName",
      },
      {
        fn: "address.streetName",
        name: "streetName",
      },
      {
        fn: "address.streetAddress",
        name: "streetAddress",
      },
      {
        fn: "address.streetSuffix",
        name: "streetSuffix",
      },
      {
        fn: "address.streetPrefix",
        name: "streetPrefix",
      },
      {
        fn: "address.secondaryAddress",
        name: "secondaryAddress",
      },
      {
        fn: "address.county",
        name: "county",
      },
      {
        fn: "address.country",
        name: "country",
      },
      {
        fn: "address.countryCode",
        name: "countryCode",
      },
      {
        fn: "address.state",
        name: "state",
      },
      {
        fn: "address.stateAbbr",
        name: "stateAbbr",
      },
      {
        fn: "address.latitude",
        name: "latitude",
      },
      {
        fn: "address.longitude",
        name: "longitude",
      },
      {
        fn: "address.direction",
        name: "direction",
      },
      {
        fn: "address.cardinalDirection",
        name: "cardinalDirection",
      },
      {
        fn: "address.ordinalDirection",
        name: "ordinalDirection",
      },
      {
        fn: "address.nearbyGPSCoordinate",
        name: "nearbyGPSCoordinate",
      },
      {
        fn: "address.timeZone",
        name: "timeZone",
      },
    ],
  },
  {
    group: "lorem",
    options: [
      {
        fn: "lorem.word",
        name: "word",
      },
      {
        fn: "lorem.words",
        name: "words",
      },
      {
        fn: "lorem.sentence",
        name: "sentence",
      },
      {
        fn: "lorem.slug",
        name: "slug",
      },
      {
        fn: "lorem.sentences",
        name: "sentences",
      },
      {
        fn: "lorem.paragraph",
        name: "paragraph",
      },
      {
        fn: "lorem.paragraphs",
        name: "paragraphs",
      },
      {
        fn: "lorem.text",
        name: "text",
      },
      {
        fn: "lorem.lines",
        name: "lines",
      },
    ],
  },
  {
    group: "name",
    options: [
      {
        fn: "name.firstName",
        name: "firstName",
      },
      {
        fn: "name.lastName",
        name: "lastName",
      },
      {
        fn: "name.middleName",
        name: "middleName",
      },
      {
        fn: "name.findName",
        name: "findName",
      },
      {
        fn: "name.jobTitle",
        name: "jobTitle",
      },
      {
        fn: "name.gender",
        name: "gender",
      },
      {
        fn: "name.prefix",
        name: "prefix",
      },
      {
        fn: "name.suffix",
        name: "suffix",
      },
      {
        fn: "name.title",
        name: "title",
      },
      {
        fn: "name.jobDescriptor",
        name: "jobDescriptor",
      },
      {
        fn: "name.jobArea",
        name: "jobArea",
      },
      {
        fn: "name.jobType",
        name: "jobType",
      },
    ],
  },
  {
    group: "random",
    options: [
      {
        fn: "random.number",
        name: "number",
      },
      {
        fn: "random.float",
        name: "float",
      },
      {
        fn: "random.arrayElement",
        name: "arrayElement",
      },
      {
        fn: "random.arrayElements",
        name: "arrayElements",
      },
      {
        fn: "random.objectElement",
        name: "objectElement",
      },
      {
        fn: "random.uuid",
        name: "uuid",
      },
      {
        fn: "random.boolean",
        name: "boolean",
      },
      {
        fn: "random.word",
        name: "word",
      },
      {
        fn: "random.words",
        name: "words",
      },
      {
        fn: "random.image",
        name: "image",
      },
      {
        fn: "random.locale",
        name: "locale",
      },
      {
        fn: "random.alpha",
        name: "alpha",
      },
      {
        fn: "random.alphaNumeric",
        name: "alphaNumeric",
      },
      {
        fn: "random.hexaDecimal",
        name: "hexaDecimal",
      },
    ],
  },
  {
    group: "animal",
    options: [
      {
        fn: "animal.dog",
        name: "dog",
      },
      {
        fn: "animal.cat",
        name: "cat",
      },
      {
        fn: "animal.snake",
        name: "snake",
      },
      {
        fn: "animal.bear",
        name: "bear",
      },
      {
        fn: "animal.lion",
        name: "lion",
      },
      {
        fn: "animal.cetacean",
        name: "cetacean",
      },
      {
        fn: "animal.horse",
        name: "horse",
      },
      {
        fn: "animal.bird",
        name: "bird",
      },
      {
        fn: "animal.cow",
        name: "cow",
      },
      {
        fn: "animal.fish",
        name: "fish",
      },
      {
        fn: "animal.crocodilia",
        name: "crocodilia",
      },
      {
        fn: "animal.insect",
        name: "insect",
      },
      {
        fn: "animal.rabbit",
        name: "rabbit",
      },
      {
        fn: "animal.type",
        name: "type",
      },
    ],
  },
  {
    group: "datatype",
    options: [
      {
        fn: "datatype.number",
        name: "number",
      },
      {
        fn: "datatype.float",
        name: "float",
      },
      {
        fn: "datatype.datetime",
        name: "datetime",
      },
      {
        fn: "datatype.string",
        name: "string",
      },
      {
        fn: "datatype.uuid",
        name: "uuid",
      },
      {
        fn: "datatype.boolean",
        name: "boolean",
      },
      {
        fn: "datatype.hexaDecimal",
        name: "hexaDecimal",
      },
      {
        fn: "datatype.json",
        name: "json",
      },
      {
        fn: "datatype.array",
        name: "array",
      },
    ],
  },
  {
    group: "system",
    options: [
      {
        fn: "system.fileName",
        name: "fileName",
      },
      {
        fn: "system.commonFileName",
        name: "commonFileName",
      },
      {
        fn: "system.mimeType",
        name: "mimeType",
      },
      {
        fn: "system.commonFileType",
        name: "commonFileType",
      },
      {
        fn: "system.commonFileExt",
        name: "commonFileExt",
      },
      {
        fn: "system.fileType",
        name: "fileType",
      },
      {
        fn: "system.fileExt",
        name: "fileExt",
      },
      {
        fn: "system.directoryPath",
        name: "directoryPath",
      },
      {
        fn: "system.filePath",
        name: "filePath",
      },
      {
        fn: "system.semver",
        name: "semver",
      },
    ],
  },
];

defineProps({
  msg: String,
});

const count = ref(0);
</script>

<template>
  <div class="container">
    <div class="columns">
      <div class="column col-6 col-mr-auto">
        <form class="form-horizontal">
          <div class="form-group">
            <div class="col-3 col-sm-12">
              <label class="form-label" for="input-example-1">Name</label>
            </div>
            <div class="col-9 col-sm-12">
              <input
                class="form-input"
                type="text"
                id="input-example-1"
                placeholder="Name"
              />
            </div>
          </div>
        </form>
        <div class="accordion">
          <input
            id="accordion-1"
            type="checkbox"
            name="accordion-radio"
            hidden=""
            checked=""
          />
          <label class="accordion-header c-hand" for="accordion-1"
            ><i class="icon icon-arrow-right mr-1"></i>Elements</label
          >
          <div class="accordion-body">
            <ul class="menu menu-nav">
              <li class="menu-item"><a href="#accordions">Element 1</a></li>
              <li class="menu-item"><a href="#accordions">Element 2</a></li>
            </ul>
          </div>
        </div>
        <div class="accordion">
          <input
            id="accordion-2"
            type="checkbox"
            name="accordion-radio"
            hidden=""
            checked=""
          />
          <label class="accordion-header c-hand" for="accordion-2"
            ><i class="icon icon-arrow-right mr-1"></i>Elements</label
          >
          <div class="accordion-body">
            <ul class="menu menu-nav">
              <li class="menu-item"><a href="#accordions">Element 1</a></li>
              <li class="menu-item"><a href="#accordions">Element 2</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="column col-2">col-2</div>
    </div>
  </div>
</template>

<style scoped>
</style>
