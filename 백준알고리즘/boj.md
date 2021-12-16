# 백준 알고리즘 자바스크립트 풀이시 입력받는 방법

### 1. fs모듈

---

- file system 모듈을 불러온다.  
  const fs = require('fs');

- fs모듈의 readFileSync 함수를 해당 경로의 파일 전체를 읽음
- 백준에서는 '/dev/stdin' 경로에 테스트 케이스 파일이 있다.
- 읽어드린 정보는 toString()함수를 통해 문자열로 변환하여야 사용할 수 있다.
- 입력 받은 문자열을 split() 함수를 통해 배열화한다. (split(' '), split('\n') 등)

> 예) 2 3 입력시,  
 inputData = ['2', '3']  
 const fs = require('fs');  
 const inputData1 = fs.readFileSync('/dev/stdin').toString().split(' ');

- options으로 인코딩을 string 자료형으로 넘기는 경우,  
  toString을 할 필요없이 문자열 반환  
  const inputData2 = fs.readFileSync(0, 'utf8').split(' ');

### 2. readline 모듈

---

- readline 모듈을 사용할 경우에는, 각 줄이 입력될 때마다 'line' 이벤트가 매번 발생하여 이를 변수에 저장하며, 'close' 이벤트가 발생한 경우 저장된 변수를 가지고 계산을 진행하게 된다.

> const readline = require('readline');  
> const rl = readline.createInterface({
> input: process.stdin,
> output: process.stdout,
> });  
> rl.on('line', (line) => {line을 가공하여 변수에 저장
> }).on('close', () => {
> 저장된 변수를 이용하여 계산 후 출력
> });
