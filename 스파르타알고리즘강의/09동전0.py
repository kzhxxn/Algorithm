# n: 동전의 종류
# k: 동전의 합
n, k = map(int, input().split())
coin = []
index = 0
result = 0

# 동전의 가치 입력 (오름차순)
for i in range(n):
    x = int(input())
    coin.append(x)

coin.sort(reverse=True)

for i in range(n):
    if coin[i] <= k:
        index = i
        result += k // coin[i]
        k = k - ((k // coin[i]) * coin[i])

print(result)

#위의 경우 coin = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 5, 1] 으로 정렬한다.
#가치의 합 K (=4200) 보다 작거나 같은 값의 인덱스 (= 3 / coin[3] = 1000)
#result = result + (k // coin[3]) 이므로 result = 0 + (4600 // 1000) = 4
#k = 4600 - ((4600 // 1000) * 1000) = 600