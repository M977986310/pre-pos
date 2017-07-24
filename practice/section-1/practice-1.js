'use strict';

function collectSameElements(collectionA, collectionB) {
  var same = [];
  collectionA.forEach(item => {
    collectionB.forEach(element =>{
    if (item===element){
      same.push(item)
    }
    })
  })
  return same;
}
