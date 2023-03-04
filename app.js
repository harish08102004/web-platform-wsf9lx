// Progression 1: create a consant "NEG_INF" with -1000000 value, and a function createPop
var NEG_INF = -1000000;
function createPop() {
  // Progression 2: add 3 : title, currIndex, check
  var title = document.createElement('h3');
  var currIndex = NEG_INF;
  var check = false;

  // Progression 3: create a function "find" (inside createPop function only).

  function find() {
    arrayOfNumbers.includes(itemToSearch)
      ? ((currIndex = arrayOfNumbers.indexOf(itemToSearch)), (check = true))
      : Error;

    // Progression 4: return a function (can be anonymous).

    return (function () {
      return check
        ? `The item is present and is at index ${currIndex}`
        : `The item is not present and is at index ${currIndex}`;
    })();
  }
  return find();
}

const arrayOfNumbers = [1, 2, 3, 4, 5, 6];
const itemToSearch = 9;
