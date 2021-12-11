import heapq
import sys
input = sys.stdin.readline
q = []
n = int(input())
for _ in range(n):
    temp = int(input())
    if temp == 0:
        if q:
            print(heapq.heappop(q))
        else:
            print(0)
    else:
        heapq.heappush(q, temp)