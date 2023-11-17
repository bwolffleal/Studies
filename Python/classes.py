class Person():
    def __init__ (self, name, age, country):
        self.name = name
        self.age = age
        self.country = country
    
    def showPerson(self):
        print(f'My name is {self.name}')
        print(f'I\'m {self.age} years old')
        print(f'I live in {self.country}')