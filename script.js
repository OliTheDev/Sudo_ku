let map = new Map()
let prev = ["start"]
const board = [
  [8,0,1,3,4,0,0,2,0],
  [0,5,0,6,0,0,8,0,3],
  [0,0,0,0,9,5,1,0,0],
  [6,0,0,0,5,9,0,0,4],
  [0,0,3,0,0,0,7,5,0],
  [0,0,5,2,3,0,6,8,0],
  [0,0,9,5,0,8,4,0,6],
  [5,7,0,1,0,0,2,0,8],
  [3,0,6,0,0,0,0,0,0]
  ]

let empties =  0

function sort(num,axis,array) {
const xAx = axis
let yAx = "d"
let numb = num
for(let i = 0;i<9;i++){

if(i>2){
yAx = "e"
  }
if(i == 3){
numb = num}
if(i>5){
yAx = "f"
}
if(i == 6){
numb = num
}
let newname = xAx + yAx + numb 	
map.set(newname,array[i])
numb = numb + 1

 }
}

function aggregate(){
sort(1,"a",board[0])
sort(4,"a",board[1])
sort(7,"a",board[2])

sort(1,"b",board[3])
sort(4,"b",board[4])
sort(7,"b",board[5])


sort(1,"c",board[6])
sort(4,"c",board[7])
sort(7,"c",board[8])

}


function rowchecker(row,num,input){
let col = 'd'
let numb = num
for(let i = 0;i<9;i++){
	if(i > 2){col = "e"}
		if(i == 3){numb = num}
			if(i>5){col = "f" }
if(i == 6){numb = num}
let newname = row + col + numb 	
if(map.get(newname) == input){

refresh()
return false

}
numb = numb + 1

}
return true
}

function colchecker(arrnum,current,input){
for(let i = 0; i<3;i++){
let newname = "a" + current + arrnum[i]
if(map.get(newname) == input){
console.log("absolutly not")
refresh()
return false
}
}


for(let i = 0; i<3;i++){
let newname = "b" + current + arrnum[i]
if(map.get(newname) == input){
console.log("absolutly not")
refresh()
return false
}
}


for(let i = 0; i<3;i++){
let newname = "c" + current + arrnum[i]
if(map.get(newname) == input){
refresh()
console.log("absolutly not")
return false
}
}

return true

}


function isAble(input,x){
const brakedown = x.split("")
const box = brakedown[0] + brakedown[1]

//check box
for(let i = 1;i < 10;i++){
let searchbox = box + i
if(map.get(searchbox) == input){
refresh()
return
} }

//check row
if(brakedown[2] <4){
if(rowchecker(brakedown[0],1,input) == false){
return
  }
 }

else if(brakedown[2] > 3 && brakedown[2] < 7){
if(rowchecker(brakedown[0],4,input) == false){
return 
}
}
else if(brakedown[2] > 6){

if(rowchecker(brakedown[0],7,input) == false){
return 
}
}

//check column
if(brakedown[2] == 1 ||brakedown[2] == 4 ||brakedown[2] == 7){

let arrnum = [1,4,7] 

if(colchecker(arrnum,brakedown[1],input) == false){
refresh()
return
}

}


if(brakedown[2] == 2 ||brakedown[2] == 5 ||brakedown[2] == 8){
let arrnum = [2,5,8]
if(colchecker(arrnum,brakedown[1],input) == false){
refresh()
return
}
}


if(brakedown[2] == 3 ||brakedown[2] == 6 ||brakedown[2] == 9){
let arrnum = [3,6,9]
if(colchecker(arrnum,brakedown[1],input) == false){
refresh()
return
}
}

let thething = document.getElementById(x)
map.set(x, input)
thething.innerHTML = input
thething.classList.remove('empty')
thething.classList.add('filled')
if(thething.classList.contains("selectedFull") == true){
console.log("alreadyfull")
}else{empties = empties - 1}


if(empties == 0){
console.log("you win")
}
  refresh()


  }


function refresh(x) {
  let butlist = document.querySelectorAll('.button');
  butlist.forEach((el) => {el.classList.remove('button');
                  el.classList.add('buttonDis')
if(el.hasAttribute("data-listener") && el.getAttribute("data-listener") == "clicker"){
let newthing = el.cloneNode(true); 

    el.remove()
let input = newthing.innerHTML
newthing.removeAttribute("data-listener")
    document.getElementById("nums").appendChild(newthing)
}
}) 
let old = document.querySelectorAll('.selected')
old.forEach((obj) => {
obj.classList.remove('selected')
})

let old2 = document.querySelectorAll('.selectedFull')
old2.forEach((obj) => {
obj.classList.remove('selectedFull')
})  


}



function buttonthing(x) {
  let butlist = document.querySelectorAll('.buttonDis')  
  
 
  butlist.forEach((el) => {
  
    el.classList.remove('buttonDis');
      el.classList.add('button') 
      let newthing = el.cloneNode(true); 

    el.remove()
let input = newthing.innerHTML

    document.getElementById("nums").appendChild(newthing)
newthing.setAttribute('data-listener', 'clicker')     
               newthing.addEventListener("click", function clicker(stuff) {isAble(input,x) }, {once:true})
                        } )

}


  function select(x) {
let elem = document.getElementById(x)
refresh()

if(elem.classList.contains("placed")){
refresh()
return
}
// this sets up the delete button 
if(elem.classList.contains("filled")){
elem.classList.remove("filled")
let  delbut = document.getElementById("delete")
delbut.classList.remove("deletedis")
delbut.classList.add("delete")
delbut.addEventListener("click", function getrid(){delbut.classList.remove('delete'); delbut.classList.add('deletedis')
map.set(x,0); elem.innerHTML = 0; refresh(); elem.classList.add("empty"); empties = empties + 1  
},{once:true})
}

//clear all old selected cells . 

/*
let old = document.querySelectorAll('.selected')
old.forEach((obj) => {
obj.classList.remove('selected')
})

let old2 = document.querySelectorAll('.selectedFull')
old2.forEach((obj) => {
obj.classList.remove('selectedFull')
})

*/ 
//assign new selected cell

let value = map.get(x)

if(value == 0){
document.getElementById(x).classList.add('selected')
} else{
document.getElementById(x).classList.add('selectedFull')
}
  


//set up number select buttons
buttonthing(x)
 //refresh(x)

 }

function fillBoard() {
aggregate()
for(const [key,value] of map.entries()) {
let thing = document.getElementById(key)
thing.innerHTML = value
if(value > 0){thing.classList.add('placed')}
else{thing.classList.add('empty')
empties++
}
addListen(thing)
}
  console.log(empties)
}
    
  


function addListen(cell){

  cell.addEventListener("click" , function (){select(cell.id)})
  
  }

//menu logic

const wrapper = document.getElementById("wrapper")
const boardwrap = document.getElementById("board")
const start = document.getElementById("start")
const resume = document.getElementById("resume")
const menu = document.getElementById("menu")



function goforward() {
boardwrap.style.display = "grid"
menu.style.display = "none"
  document.getElementById("nums").style.display = "grid"
 document.getElementById("otherbutts").style.display = "grid" 

}


function goback(){
boardwrap.style.display = "none"
menu.style.display = "flex"
  document.getElementById("nums").style.display = "none"
 document.getElementById("otherbutts").style.display = "none"
resume.style.display = "block"
resume.addEventListener("click", goforward)

}

let objwrap = function newGame() {
boardwrap.style.display = "grid"
menu.style.display = "none"
  document.getElementById("nums").style.display = "grid"
 document.getElementById("otherbutts").style.display = "grid" 
map.clear()  
empties = 0 
fillBoard()
document.getElementById("mainmenu").addEventListener("click", goback)  
  }


start.addEventListener("click", objwrap)
