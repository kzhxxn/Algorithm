import sys
import heapq as hq

numbers = int(input())
heap = []

for i in range(numbers):
    num = int(sys.stdin.readline())
    # print(num)
    if num >0:
        hq.heappush(heap,(-num,num)) #-를 하여 제일 큰 값이 맨 앞에 가도록 한다
    else:
        if heap:
           print(hq.heappop(heap)[1]) #맨앞에 수를 꺼내는데 value값을 꺼낸다 (-5,5)
        else:
            print(0)