//for Node
// const db2 = require(["./Db2"]);
// const db2.db2 = require(["./db2.db2"]);


import * as db2 from './Db2.js';


const resultA= db2.db2.map(([a,b,c,d,e,f])=> a);
// console.log(resultA);
const resultF = db2.db2.map(([a,b,c,d,e,f])=> f);
// console.log(resultF);
    const resultAF = db2.db2.map(([a,b,c,d,e,f])=> `${a}${f}`);
// console.log(resultAF);


const countA = resultA.reduce((acc, value) => {
    return {...acc, [value]: (acc[value] || 0) + 1};
  }, {});
  const countF = resultF.reduce((acc, value) => {
    return {...acc, [value]: (acc[value] || 0) + 1};
  }, {});

const countAF = resultAF.reduce((acc, value) => {
  return {...acc, [value]: (acc[value] || 0) + 1};
}, {});

console.table(countA);
console.table(countF);
console.table(countAF);

 
