import {shelfConstants} from './constants';

export const shelfKey = {
    [shelfConstants.CURRENTLY_READING]: 'Currently Reading',
    [shelfConstants.WANT_TO_READ]: 'Want To Read',
    [shelfConstants.READ]: 'Read'
  };

export const groupBy = (list, key) => {
  // create an object
  // run through the list
  // use the key and with each new key value, add it to the object with a list if a list doesn't already exist
  // return the first object
  let map = {};
  list.forEach((listItem) => {
    const group = listItem[key];
    if (map[group]) {
      map[group].push(listItem)
    } else {
      map[group] = [listItem];
    }
  })

  return map;
}

export const getShelfTitle = (shelfCategory) => {
  return shelfKey[shelfCategory];
};