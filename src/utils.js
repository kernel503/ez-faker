import faker from 'faker';
import { get } from 'lodash';

function getValueFromFaker(text) {
  try {
    const value = get(faker, text);
    return value;
  } catch (error) {
    return '';
  }
}

export { getValueFromFaker };
