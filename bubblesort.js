  function bubbleSort(arr) {
    
      /* your code here */
      var j = 0, temp, flag = 1;
      while(flag){
        flag = 0;
        for(var i = 0; i < arr.length-1; i++){
            j = i+1;
            if(arr[i] > arr[j]){
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
                flag = 1;
            }
        }
      }
      return arr;
    }