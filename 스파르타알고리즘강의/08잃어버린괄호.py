arr = input().split('-')
result = 0 

for i in arr[0].split('+'):
    result += int(i)

for i in arr[1:]:
    for j in i.split('+'):
        result -= int(j)

print(result)

#-를 기준으로 분리
#-를 기준으로 i에 있는것을 다 더해줌 +가 나오기 전까지는 다더함
#1번 인덱스부터 반복해서 +가 있는것들을 다 빼줌