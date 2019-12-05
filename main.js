const ARR_NUMB = [1, 2, 3, 4, 5, 6, 7, 8, 21];

// Min, max, sum number array, callback
let arrMinNumb = arr => Math.min(...arr);
let arrMaxNumb = arr => Math.max(...arr);
let sumArr = arr => arr.reduce((sum, val) => sum + val);

//replaceMinMax
let replaceMinMax = arr => {
  let newArr = arr.slice();
  let minValue = arrMinNumb(newArr);
  let maxValue = arrMaxNumb(newArr);
  let keyMin = newArr.indexOf(minValue);
  let keyMax = newArr.indexOf(maxValue);
  newArr[keyMin] = maxValue;
  newArr[keyMax] = minValue;
  return newArr;
};

//Callback
let message = () => "Message";
let emptyFunc = funcMin => funcMin();

//fooBar add callback
let fooBar = arr => {
  let newArr = arr.map(value => {
    if (value % 3 == 0 && value % 7 == 0) {
      return "fooBar";
    } else if (value % 7 == 0) {
      return "bar";
    } else if (value % 3 == 0) {
      return "foo";
    } else {
      return value;
    }
  });
  return newArr;
};

//call all functions
const ARR_NUMB_FUNC = [arrMinNumb, arrMaxNumb, sumArr, replaceMinMax, fooBar];
let startFunc = arr => {
  arr.map(value => {
    console.log(value(ARR_NUMB));
  });
  return emptyFunc(message);
};
startFunc(ARR_NUMB_FUNC);
