// <!-- 문자 찾기
// 한 개의 문자열을 입력받고, 특정 문자를 입력받아 해당 특정문자가 입력받은 문자열에 몇 개 존재하는지 알아내는 프로그램을 작성하세요.
// 문자열의 길이는 100을 넘지 않습니다. ▣ 입력설명
// 첫 줄에 문자열이 주어지고, 두 번째 줄에 문자가 주어진다. ▣ 출력설명
// 첫 줄에 해당 문자의 개수를 출력한다. ▣ 입력예제 1
// COMPUTERPROGRAMMING R
// ▣ 출력예제 1 3 -->


    function solution(x, t){
        let answer=0;//answer에 누적counting하여 개수를 출력해야하므로 -> let answer = 0
        for(let a of x){//for of 반복문으로 문자열의 문자하나씩 돌면서 탐색 -> 조건문으로 x가 인수와 같으면 answer를 증감
            if(a===t) answer++;
        
    }
    return answer;
}
    
    let str="COMPUTERPROGRAMMING";
    console.log(solution(str, 'O'));



    function solution(s, t){
        let answer=s.split(t).length;
        return answer-1;
    }
    
    let str="COMPUTERPROGRAMMING";
    console.log(solution(str, 'R'));
