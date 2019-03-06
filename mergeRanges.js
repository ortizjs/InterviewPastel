var mergeRanges = function(arr) {
  let sorted = arr.sort((a,b) => a.startTime - b.startTime);
  let result = [sorted[0]];
  for (let i = 1; i < sorted.length - 1; i++){
    let las = result.length - 1;
    if (sorted[i].startTime < result[las].endTime){
      result[las].endTime = sorted[i].endTime;
    }
    else {
      result.push({"startTime": sorted[i].startTime, "endTime": sorted[i].endTime})
    }
  }
  return result;
};



mergeRanges(  [
  { startTime: 0,  endTime: 1 },
  { startTime: 3,  endTime: 5 },
  { startTime: 4,  endTime: 8 },
  { startTime: 10, endTime: 12 },
  { startTime: 9,  endTime: 10 },
]);

//result
// [
//     { startTime: 0, endTime: 1 },
//     { startTime: 3, endTime: 8 },
//     { startTime: 9, endTime: 12 },
// ]