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

const multiplyExtraEntries = (numsList) => {
   const sums = cacheSums(numsList);

   console.log(sums);
};

module.exports = { multiplyEntries, multiplyExtraEntries };
