'use strict';

function createUpdatedCollection(collectionA, objectB) {
  for (var i in collectionA) {
    for (var j in objectB.value) {
      if (collectionA[i].key === objectB.value[j]) {
        if (collectionA[i].count % 3 === 0) {
          collectionA[i].count = collectionA[i].count -= collectionA[i].count / 3;
        } else if (collectionA[i].count % 3 === 1) {
          collectionA[i].count = collectionA[i].count -= (collectionA[i].count - 1 ) / 3;
        } else if (collectionA[i].count % 3 === 2) {
          collectionA[i].count = collectionA[i].count -= (collectionA[i].count-2) / 3;
        }
      }
    }
  }

  return collectionA;
}
