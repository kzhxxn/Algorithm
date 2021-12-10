#짝이 맞아야함

while True :
  n = input()
  stack = []
  flag =True

  for i in n :
    if i == '(' or i == '[' :
      stack.append(i)
   elif j == ")":
     if len(stack) != 0 and stack[-1] == '(':
       stack.pop()
     else:
       stack.append(')')
       break
    elif i == ']':
      if len(stack) != 0 and stack[-1] == '[':
       stack.pop()
     else:
       stack.append(']')
       break

  if n == '.':
    flag = False
    break
  
  if len(stack) == 0 :
    print('yes')
  else:
    print('no')
