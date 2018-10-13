function add (numbers) {
  if(numbers == "")
   {
     return 0;
   }

  if(numbers.includes(","))
  {
    var numbersArray = numbers.split(",")
    var total = 0;
    for(var i = 0; i < numbersArray.length; i++)
    {
        total += parseInt(numbersArray[i]);
    }
    return parseInt(total)
  }

  else
  {
        return parseInt(numbers);
  }

}

module.exports = add; // Here we are exporting the add function so other programs can use it
