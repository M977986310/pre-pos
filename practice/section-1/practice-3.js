'use strict';

function collectSameElements(collectionA, objectB) {
  var same = [];
  for (let i in collectionA) {
    for (let j in objectB.value) {
      if (collectionA[i] === objectB.value[j]) {
        same.push(collectionA[i]);
      }
    }
  }

  return same;
}
