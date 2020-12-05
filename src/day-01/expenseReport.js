const multiplyEntries = (numsList) => {
   const cache = new Set();

   for (let i = 0; i < numsList.length; i++) {
      let currentNum = numsList[i];

      //process currentNum
      const targetNum = 2020 - currentNum;
      if (cache.has(targetNum)) {
         return currentNum * targetNum;
      }

      //cache the current number
      cache.add(currentNum);
   }

   return null;
};

module.exports = { multiplyEntries };
