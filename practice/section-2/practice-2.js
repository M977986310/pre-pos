'use strict';

function countSameElements(collection) {
  var same = [];

  collection.forEach((element, index) => {
    var item = element.split("-");
    if (item.length > 1) {
      collection.splice(index, 1);
      for (var i = 0; i < item[1]; i++) {
        collection.push(item[0]);
      }
    }
  });

  collection.forEach(item => {
    if (!same.find(element => element.key === item))
      same.push({key: item, count: collection.filter(element => element === item).length});
  });

  return same;
}
