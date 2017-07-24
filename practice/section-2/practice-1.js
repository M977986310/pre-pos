'use strict';

function countSameElements(collection) {
  var same = [];

  collection.forEach(item => {
    if (!same.find(element => element.key === item))
      same.push({key: item, count: collection.filter(element => element === item).length});
  });

  return same;
}
