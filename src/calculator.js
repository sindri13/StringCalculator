function add (numbers) {

  if(numbers == "")
   {
     return 0;
   }
   if(numbers.length == 1)
   {
     return parseInt(numbers);
   }
  var numbersArray = splitstring(numbers);
  filterNegatives(numbersArray);
  return sum(numbersArray);
}

function sum(numbersArray){
  var total = 0;
  for(var i = 0; i < numbersArray.length; i++)
  {
      if(numbersArray[i] > 1000)
      {
  				numbersArray.splice(i, 1);
      }

      total += parseInt(numbersArray[i]);
  }
  return parseInt(total)
}

function filterNegatives(numbersArray){
    var negativeNumbers = [];
    for(var i = 0; i < numbersArray.length; i++){
        if(parseInt(numbersArray[i]) < 0){
            negativeNumbers.push(numbersArray[i]);
        }
    }
    if(negativeNumbers.length > 0){
        throw new Error("Negatives not allowed: " + negativeNumbers.join(','));
    }
}

function splitstring(numbers)
{

  if(numbers.includes(",") || numbers.includes("n"))
  {
    var numbersArray = numbers.split(/[\n,;"'{}|/\\]/);
  }
  return numbersArray;
}

module.exports = add;
