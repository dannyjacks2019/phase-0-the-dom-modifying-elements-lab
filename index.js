const main = document.querySelector('#main')
main.remove()
const newHeader = document.createElement('h1')
newHeader.setAttribute("id","victory")
newHeader.innerHTML = "Dan is the champion"
Document.body.append(newHeader)