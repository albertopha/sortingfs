function split(wholeArray) {

  var firstHalf = [];
  var secondHalf = [];
  if (wholeArray.length % 2 === 0) { // There is an even number of elements in array
    // [4,2,1,1] .length = 4
    var midpoint = wholeArray.length/2 - 1; // would be 1

  }else { // there is an odd number of elements in array
    // [5,4,3,2,1] .length = 5
    var midpoint = Math.floor(wholeArray.length/2);
  }

  for (var i = 0; i<=midpoint;i++){
    firstHalf.push(wholeArray[i]);
  }
  for (var i = midpoint + 1; i<wholeArray.length;i++){
    secondHalf.push(wholeArray[i]);
  }
  return [firstHalf, secondHalf];
}

function merge(array){
  var firstHalf = array[0];
  var secondHalf = array[1];
  var totalLength = firstHalf.length + secondHalf.length;
  var firstHalfIterator = 0, secondHalfIterator = 0;

  for (var i = 0; i < totalLength; i++){
    if (firstHalf[firstHalfIterator] <= first)
  }

}

function mergeSort(array) {


}
