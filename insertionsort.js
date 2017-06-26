function insertionSort(data) {
  for(i = 1; i < data.length; i++) {
    var current = data[i];
    var count = i - 1;
    for(;count >= 0 && data[count] > current; --count) {
      data[count+1] = data[count];
    }
    data[count+1] = current;
  }
  console.log(data);
}

insertionSort([4,2,1,3])
insertionSort(["d", "b", "a", "c"])
