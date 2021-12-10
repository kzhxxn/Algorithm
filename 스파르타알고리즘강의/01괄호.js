var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var result = arr.reduce((acc, element, i, array) => {
  console.log(
    `인덱스:${i}, 누산기:${acc}, 현재원소:${element} | 원본 배열:${array}`
  );
  return acc + element;
});
console.log(result);
