import sys
n = int(sys.stdin.readline())
stack = []

for i in range(int(n)):
   b = list(map(str,n.split())) #[push,2]
   if b[0] == "push":
     stack.append(int(b[1]))  #스택에 값추가
   elif b[0] == "pop":
     if len(stack) == 0: #스택에 아무것도 없으면 마지막 데이터로 출력
       print(-1)
     else:
       stack.pop()
       print(stack[-1])
   elif b[0] == "size":
     print(len(stack))
   elif b[0] == "empty": # 비어있으면 1 아니면 0
     if len(stack) == 0:
       print(1)
     else:
       print(0)
   else:
     if len(stack) == 0: #0이면 -1출력 있으면 마지막수
       print(-1)
     else:
       print(stack[-1])
