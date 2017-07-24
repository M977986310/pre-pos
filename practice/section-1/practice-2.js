'use strict';

function collectSameElements(collectionA, collectionB) {
  var sames = [];
  collectionA.forEach(item => {
    if (matchTheSame(item, collectionB).length!=0) {
      sames.push(matchTheSame(item, collectionB));
    }
  })

  return sames;
}

function matchTheSame(item, collectionB) {
  for (let i in collectionB) {
    var same = '';
    for (let j in collectionB[i]) {
      if (collectionB[i][j] === item) {
        same = item;
      }
    }
  }

  return same;
}
