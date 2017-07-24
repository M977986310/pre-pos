'use strict';

function collectSameElements(collectionA, objectB) {
  var same = [];
  for (var i in collectionA) {
    for (var j in objectB.value) {
      if (collectionA[i].key === objectB.value[j]) {
        same.push(collectionA[i].key);
      }
    }
  }

  return same;
}
