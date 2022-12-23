
let currentNames =[]
let currentIndex
let rasmLink
function elementValue(){
    let addNames = document.querySelector(".name").value

    //currentNames.push(addNames)
   
    currentNames.push({
      sarlavha: addNames,
      image: rasmLink 
    })
    document.querySelector(".name").value = ""

    reRender(currentNames)
}

function rasmLinkiniOlish(val){
  val.src = window.URL.createObjectURL(val.files[0])
  rasmLink = val.src

      reRender(currentNames)
}

function  reRender(students){

let divNames = document.querySelector(".divNames")
divNames.innerHTML = ""

students.map((item, index) =>{

let addImage = document.createElement("img")
addImage.src = item.image
addImage.alt = item.sarlavha
addImage.style.width = "100px"

let addNames = document.createElement("span")
addNames.innerText = index + 1 + ". " + item.sarlavha

  let deleButton = document.createElement("button")
  deleButton.innerText = "O'chirish"
  deleButton.setAttribute("onclick", `deleteName(${index})`)
  

  let editButton = document.createElement("button")
  editButton.innerText = "Tahrirlash"
  editButton.setAttribute("onclick", `editName(${index})`)

  let card = document.createElement("div")

  card.appendChild(addImage)
  card.appendChild(addNames)
  card.appendChild(deleButton)
  card.appendChild(editButton)

   divNames.appendChild(card)
   
  })

 }

   function deleteName(index){
    currentNames.splice(index, 1)

    reRender(currentNames)
   }

   function editName(index){
    currentIndex  = index
    document.querySelector(".name").value = currentNames[index]
    reRender(currentNames)
   }

   function currentEditName(){
    addNames = document.querySelector(".name").value
    currentNames[currentIndex].sarlavha = addNames
    currentNames[currentIndex].image = rasmLink

   // currentNames.splice(currentIndex, 1 , addNames)
    document.querySelector(".name").value = ""
    reRender(currentNames)
   }

function searchTittle(key){
  let newCurrentName = currentNames.filter(names =>{
    return names.sarlavha.toLowerCase().includes(key.value.toLowerCase())
  })
  reRender(newCurrentName)
}

 






