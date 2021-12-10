#짝이 맞아야함
print("블라블라")
n = int(input()) 

for i in range(n) :
  data = input()
  arr =[]

  for j in data :
    if j == "(" :
      arr.append(j)
    elif j == ")":
     if len(arr) != 0 and arr[-1] == '(':
       arr.pop()
     else:
       arr.append(')')
       break
  
  if len(arr) == 0 :
    print("Yes")
  else:
    print("NO")
     