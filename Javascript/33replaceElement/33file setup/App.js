//New Header
const oldHeader = document.getElementById('name-title')
const newHeader = document.createElement('h2')
newHeader.id = 'name-title';
newHeader.appendChild(document.createTextNode('New title'));
const header = document.querySelector('.collection-header')
header.replaceChild(newHeader, oldHeader)

//New element
const li = document.createElement('li')
li.id = 'new-item'
li.className = 'collection-item'
li.setAttribute('title', 'New Item')
li.append(document.createTextNode('A new list'))

//Create a tag
const link = document.createElement('a')
link.className = 'secondary-content'

//Add icon
link.innerHTML = '<i class="material-icons">grade</i>'
li.appendChild(link)
document.querySelector('ul.collection').appendChild(li)

