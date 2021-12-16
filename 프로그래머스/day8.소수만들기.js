// 문제 설명
// 주어진 숫자 중 3개의 수를 더했을 때 소수가 되는 경우의 개수를 구하려고 합니다. 숫자들이 들어있는 배열 nums가 매개변수로 주어질 때, nums에 있는 숫자들 중 서로 다른 3개를 골라 더했을 때 소수가 되는 경우의 개수를 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// nums에 들어있는 숫자의 개수는 3개 이상 50개 이하입니다.
// nums의 각 원소는 1 이상 1,000 이하의 자연수이며, 중복된 숫자가 들어있지 않습니다.
function solution(nums) {
  let answer = 0;

  //1. 3자리 숫자 만들기
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      for (let k = j + 1; k < len; k++) {
        const number = nums[i] + nums[j] + nums[k];
        if (isPrime(number)) answer++;
      }
    }
  }

  //2. 소수 판별(2~number까지 하나씩 비교)
  function isPrime(number) {
    if (number < 2) return true;
    for (let i = 2; i < number; i++) {
      if (number % i == 0) return false;
    }
    return true;
  }

  return answer;
}


//다른사람풀이
function primecheck(n){
  for(var i=2;i<=Math.sqrt(n);i++){
      if(n%i == 0){
          return false;
      }
  }
  return true;    
}
function solution(nums){
  var cnt = 0;
  for(var i=0;i<nums.length-2;i++){
      for(var j=i+1;j<nums.length-1;j++){
          for(var w=j+1;w<nums.length;w++){
                  //console.log(nums[i]+"/"+nums[j]+"/"+nums[w]);

                  if(primecheck(nums[i]+nums[j]+nums[w])){
                      //console.log(nums[i]+nums[j]+nums[w]);
                      cnt++;
                  }
          }
      }
  }
  return cnt;
}