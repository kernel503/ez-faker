import faker from "faker";

const { address, lorem, name, random, animal, datatype, system } = faker;

console.log({ address, lorem, name, random, animal, datatype, system });

let types = [
  {
    group: "address",
  },
  {
    group: "lorem",
  },
  {
    group: "name",
  },
  {
    group: "random",
  },
  {
    group: "animal",
  },
  {
    group: "datatype",
  },
  {
    group: "system",
  },
].map(({ group }) => {
  const functionsAvailable = get(faker, group);
  const entries = Object.keys(functionsAvailable).map((fnName) => ({
    fn: `${group}.${fnName}`,
    name: fnName,
  }));
  return { group, options: entries };
});