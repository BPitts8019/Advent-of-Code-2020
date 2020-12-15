const cacheSums = (numsList) => {
   const cache = new Map();

   for (let i = 0; i < numsList.length; i++) {
      let currentNum = numsList[i];

      for (let j = i + 1; j < numsList.length; j++) {
         let otherNum = numsList[j];
         let sum = currentNum + otherNum;
         if (!cache.has(sum)) {
            cache.set(sum, [currentNum, otherNum]);
         }
      }
   }

   return cache;
};

const multiplyEntries = (numsList, targetSum = 2020) => {
   const cache = new Set();

   for (let i = 0; i < numsList.length; i++) {
      let currentNum = numsList[i];

      //process currentNum
      const targetNum = targetSum - currentNum;
      if (cache.has(targetNum)) {
         return currentNum * targetNum;
      }

      //cache the current number
      cache.add(currentNum);
   }

   return null;
};

const multiplyThreeEntries = (numsList) => {
   const uniqueSums = cacheSums(numsList);

   for (let i = 0; i < numsList.length; i++) {
      let currentNum = numsList[i];
      let targetSum = 2020 - currentNum;

      if (uniqueSums.has(targetSum)) {
         // console.log(`Cache: (${targetSum}: [${uniqueSums.get(targetSum)}])`);
         return (
            currentNum *
            uniqueSums.get(targetSum)[0] *
            uniqueSums.get(targetSum)[1]
         );
      }
   }

   return null;
};

module.exports = { multiplyEntries, multiplyThreeEntries };
