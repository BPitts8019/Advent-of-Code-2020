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
   const cache = new Map();
};

module.exports = { multiplyEntries, multiplyExtraEntries };
