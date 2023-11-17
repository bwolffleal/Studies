from classes import Person

for i in range(3):
    print('hello world')

person = Person('Alex', 18, 'Brazil')
person.showPerson()

numbers = [1, 2, 4, 6, 9, 10]
for num in numbers:
    print(num)


z=set('abc')
z.add('san')
z.update(set(['p','q']))
print(z)

l1 = [1, 2, 3, 4]
l2 = [5, 6, 7]

result = l1 + l2
print(result)
