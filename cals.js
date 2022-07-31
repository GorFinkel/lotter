//for Node
// const db2 = require(["./Db2"]);
// const db1.db1 = require(["./db1.db1"]);


import * as db1 from './Db1.js';


const resultA= db1.db1.map(([a,b,c,d,e,f])=> a);
// console.log(resultA);
const resultF = db1.db1.map(([a,b,c,d,e,f])=> f);
// console.log(resultF);
    const resultAF = db1.db1.map(([a,b,c,d,e,f])=> `${a}${f}`);
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

 
