function solution(expression) {
  var answer = 0;
  //연산자를 미리 배열형태로 담아놓음
  const arr = [
    ["-", "+", "*"],
    ["-", "*", "+"],
    ["*", "-", "+"],
    ["*", "+", "-"],
    ["+", "-", "*"],
    ["+", "*", "-"],
  ];
  //각각 우선순위에 계산한 결과를 담아놓을 배열을 만듬
  let result = [];
  //연산자 배열을 이중for문으로 돌면서 해당 연산자가 문자열에 포함되어있는지 체크하면서 While문
  for (let a of arr) {
    //정규표현식[3,+,2,-,10,*,100]과 같이 배열의 형태로 담아두기 위해 잘라줌, 연산자가 포함되어있는지
    //체크하고 해당 연산자를 기준으로 앞뒤 숫자를 가져와 해당연산자로 연산
    const temp = expression.split(/(\D)/);
    //이중 for문을 통해 현재 체크하고 있는 연산자가 '-'라면 while문을 통해 현재 체크하고 있는 연산자가 temp에 담기는지 체크
    for (let exp of a) {
      while (temp.includes(exp)) {
        //담겨있다면 연산자 위치를 idx변수에 담음
        const idx = temp.indexOf(exp);
        temp.splice(idx - 1, 3, eval(temp.slice(idx - 1, idx + 2).join("")));
      }
    }
    result.push(Math.abs(temp[0]));
  }
  return Math.max(...result);
}
