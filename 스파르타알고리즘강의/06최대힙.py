n = int(input()) 
stack = []

for i in range(n):
    a = int(input())
    if a==0:
        print(stack(-1))
        stack.pop(-1)
    else:
        stack.append(a)
print(sum(stack))

