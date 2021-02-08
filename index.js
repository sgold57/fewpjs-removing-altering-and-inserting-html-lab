// Write your code here!
const nodeToRemove = document.getElementById('main')
nodeToRemove.remove()

const newHeader = document.createElement("h1")
newHeader.id = "victory"
newHeader.innerHTML = "SAM is the champion"
document.body.append(newHeader)

