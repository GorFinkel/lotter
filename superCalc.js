//for Node
// const db2 = require(["./Db2"]);
// const db.db = require(["./db.db"]);


import * as db from './superDb.js';

console.log(db.db)
const rightOnes= [...db.db.filter((num)=>num.length==6)]
const fixed = [...db.db.filter(num=>num.length==5).map(res=>`0${res}`),
...db.db.filter(num=>num.length==4).map(res=>`00${res}`),
...db.db.filter(num=>num.length==3).map(res=>`000${res}`),
...db.db.filter(num=>num.length==2).map(res=>`0000${res}`),
...db.db.filter(num=>num.length==1).map(res=>`00000${res}`)]
const together=[...rightOnes,...fixed]

//first
const resultA= together.map(([a,b,c,d,e,f])=> a);
//last
const resultF = together.map(([a,b,c,d,e,f])=> f);
// first-last
    const resultAF = together.map(([a,b,c,d,e,f])=> `${a}${f}`);

const resultB= together.map(([a,b,c,d,e,f])=> b);
const resultC= together.map(([a,b,c,d,e,f])=> c);
const resultD= together.map(([a,b,c,d,e,f])=> d);
const resultE= together.map(([a,b,c,d,e,f])=> e);

// first3
const resultABC = together.map(([a,b,c,d,e,f])=> `${a}${b}${c}`);
// last3
const resultDEF = together.map(([a,b,c,d,e,f])=> `${d}${e}${f}`);

// last4
const resultCDEF = together.map(([a,b,c,d,e,f])=> `${c}${d}${e}${f}`);
// last5
const resultBCDEF = together.map(([a,b,c,d,e,f])=> `${b}${c}${d}${e}${f}`);


//simple number array of all
const resultResult=[...resultA,...resultB,...resultC,...resultD,...resultE,...resultD]



//first
const countA = resultA.reduce((acc, value) => {
    return {...acc, [value]: (acc[value] || 0) + 1};
  }, {});

  //last
  const countF = resultF.reduce((acc, value) => {
    return {...acc, [value]: (acc[value] || 0) + 1};
  }, {});

  // first last
const countAF = resultAF.reduce((acc, value) => {
  return {...acc, [value]: (acc[value] || 0) + 1};
}, {});

const countB = resultB.reduce((acc, value) => {
    return {...acc, [value]: (acc[value] || 0) + 1};
  }, {});
  const countC = resultC.reduce((acc, value) => {
    return {...acc, [value]: (acc[value] || 0) + 1};
  }, {});
  const countD = resultD.reduce((acc, value) => {
    return {...acc, [value]: (acc[value] || 0) + 1};
  }, {});
  const countE = resultE.reduce((acc, value) => {
    return {...acc, [value]: (acc[value] || 0) + 1};
  }, {});

  // first3
  const countABC = resultABC.reduce((acc, value) => {
    return {...acc, [value]: (acc[value] || 0) + 1};
  }, {});

    // last3
    const countDEF = resultDEF.reduce((acc, value) => {
        return {...acc, [value]: (acc[value] || 0) + 1};
      }, {});
  
         // last4
    const countCDEF = resultCDEF.reduce((acc, value) => {
        return {...acc, [value]: (acc[value] || 0) + 1};
      }, {});
       
         // last5
    const countBCDEF = resultBCDEF.reduce((acc, value) => {
        return {...acc, [value]: (acc[value] || 0) + 1};
      }, {});
  

//simple number statistis
const countResultResult=resultResult.reduce((acc, value) => {
    return {...acc, [value]: (acc[value] || 0) + 1};
  }, {});

        


//all 6 digit numbers
const countTogether= together.reduce((acc, value) => {
    return {...acc, [value]: (acc[value] || 0) + 1};
  }, {});
//transfrom to an array for filtering
  const asArray = Object.entries(countTogether);
  const filtered = asArray.filter(([key, value]) => value >1);

//   const winner=countTogether.filter((f,value)=>f[value]>1)

console.table(countA);
// console.table(countF);
// console.table(countAF);
console.table(filtered);
// console.table(countB);
// console.table(countC);
// console.table(countD);
// console.table(countE);
// console.table(countABC);
console.table(countDEF);
// console.table(countCDEF);
// console.table(countBCDEF);
console.table(countResultResult)


// console.log(rightOnes)
// console.log(fixed)
// console.log(together)

