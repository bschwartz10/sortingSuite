function bubbleSort(data) {
  var swap = true;

  while (swap === true) {
    swap = false;
    var previous = 0;
    var current = previous + 1;
      while (current < data.length) {
        if (data[previous] > data[current]) {
          data[current] = [data[previous], data[previous] = data[current]][0];
          swap = true;
        }
        previous++;
        current++;
      }
  }
  console.log(data);
}

bubbleSort([4,2,1,3])
bubbleSort(["d", "b", "a", "c"])
