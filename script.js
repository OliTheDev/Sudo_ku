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



let cube =[
['00', '01', '02', '03', '04', '05', '06', '07', '08'],
 ['10', '11', '12', '13', '14', '15', '16', '17', '18'],
['20', '21', '22', '23', '24', '25', '26', '27', '28'],
['30', '31', '32', '33', '34', '35', '36', '37', '38'],
['40', '41', '42', '43', '44', '45', '46', '47', '48'],
['50', '51', '52', '53', '54', '55', '56', '57', '58'],
['60', '61', '62', '63', '64', '65', '66', '67', '68'],
['70', '71', '72', '73', '74', '75', '76', '77', '78'],
['80', '81', '82', '83', '84', '85', '86', '87', '88']]

let rows = {
  one : ["00","01","02",10,11,12,20,21,22],
  two : ["03","04","05",13,14,15,23,24,25],
  three : ["06","07","08",16,17,18,26,27,28],
  four : [30,31,32,40,41,42,50,51,52],
  five : [33,34,35,43,44,45,53,54,55],
  six : [36,37,38,46,47,48,56,57,58],
  seven : [60,61,62,70,71,72,80,81,82],
  eight : [63,64,65,73,74,75,83,84,85],
  nine : [66,67,68,76,77,78,86,87,88]
}

let columns = {
  one : ["00","03","06",30,33,36,60,63,66],
  two : ["01","04","07",31,34,37,61,64,67],
  three : ["02","05","08",32,35,38,62,65,68],
  four : [10,13,16,40,43,46,70,73,76],
  five : [11,14,17,42,44,47,71,74,77],
  six : [12,15,18,42,45,48,72,75,78],
  seven : [20,23,26,50,53,56,80,83,86],
  eight : [21,24,27,51,54,57,81,84,87],
  nine : [22,25,28,52,55,58,82,85,88]
  }

function isWin(){
let empties = []
cube.forEach((chk) => {
chk.forEach((cell) => {
if(document.getElementById(cell).innerHTML == 0){
empties.push(cell)
}
})
})
if(empties.length == 0 ){console.log("you win") }else{
console.log(empties.length, "spaces yet to fill")}
}
 
function bigIf(x){
  if(x < 30){
    for(let i = 0; i < 9; i++){
      if(rows.one[i] == x){        
        return {
          thisRow: rows.one,
          index : i
          }
        }
      if(rows.two[i] == x){    
       return {
          thisRow: rows.two,
          index : i
          }
        }
     if(rows.three[i] == x){
       return {
          thisRow: rows.three,
          index : i
          }
       
        }
     } 
    } else if(x < 60){
      for(let i = 0; i < 9; i++){

      if(rows.four[i] == x){        
        return {
          thisRow: rows.four,
          index : i
          }
        }

      if(rows.five[i] == x){    
       return {
          thisRow: rows.five,
          index : i
          }
        }

     if(rows.six[i] == x){
       return {
          thisRow: rows.six,
          index : i
          }
        }
        
      }
     }
      else{
      
        for(let i = 0; i < 9; i++){
      if(rows.seven[i] == x){        
        return {
          thisRow: rows.seven,
          index : i
          }
        }
      if(rows.eight[i] == x){    
       return {
          thisRow: rows.eight,
          index : i
          }
        }
     if(rows.nine[i] == x){
       return {
          thisRow: rows.nine,
          index : i
          }
       
        }
        
       } 
        
        }
  }
  
function smallIf(x){
  switch(x){
      case 0 : return columns.one
      break;
      case 1 : return columns.two
      break;
      case 2: return columns.three
      break;
      case 3 : return columns.four
      break;
      case 4 : return columns.five
      break;
      case 5: return columns.six
      break;
      case 6 : return columns.seven
      break;
      case 7 : return columns.eight
      break;
      case 8 : return columns.nine
      break;
      }
  }

function mainAlgo(thing,x,y,z){
  
  //check row first 
  for(let i = 0; i < x.length; i++){
    if(document.getElementById(x[i]).innerHTML != "0"){
       if(document.getElementById(x[i]).innerHTML == thing)
      {
        return false 
      }
    }
    }
  
 //then check column
  
  for(let i = 0; i < y.length; i++){
    if(document.getElementById(y[i]).innerHTML != "0"){
       if(document.getElementById(y[i]).innerHTML == thing)
      {
        return false 
      }
    }
 }
  
  // check box
   
  let Square = cube[z]
  for(let i = 0; i < Square.length; i++){
    if(document.getElementById(Square[i]).innerHTML != "0"){
       if(document.getElementById(Square[i]).innerHTML == thing)
      {
        return false 
      }

    }

 }
 return true   
  }

function rowchecker(row,num,input){
let col = 'd'
let numb = num
for(let i = 0;i<9;i++){
	if(i>2){
	col = "e"
  	}
		if(i == 3){
		numb = num}
			if(i>5){
			col = "f" }
if(i == 6){
numb = num
}
let newname = row + col + numb 	
if(map.get(newname) == input){
return false
refresh()
}
numb = numb + 1
return true
}

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
return true
}}


function isAble(input,x){
const brakedown = x.split("")
const box = brakedown[0] + brakedown[1]

//check box
for(let i = 1;i < 10;i++){
let searchbox = box + i
if(map.get(searchbox) == input){
console.log("not in this box")
refresh()
return
} }

//check row
if(brakedown[2] <4){
if(rowchecker(brakedown[0],1,input) == false){
console.log("not in this row")  
return
  }
 }

else if(brakedown[2] > 3 && brakedown[2] < 7){
if(rowchecker(brakedown[0],4,input) == false){

console.log("not in this row")
return 
}
}
else if(brakedown[2] > 6){

if(rowchecker(brakedown[0],7,input) == false){
console.log("not in this row")
return 
}
}

//check column
if(brakedown[2] == 1 ||brakedown[2] == 4 ||brakedown[2] == 7){
console.log("first")
let arrnum = [1,4,7] 

if(colchecker(arrnum,brakedown[1],input) == false){
console.log("not in this column")
return
}

}


if(brakedown[2] == 2 ||brakedown[2] == 5 ||brakedown[2] == 8){
console.log("second")
let arrnum = [2,5,8]
if(colchecker(arrnum,brakedown[1],input) == false){
console.log("not in this column")
return
}
}


if(brakedown[2] == 3 ||brakedown[2] == 6 ||brakedown[2] == 9){
console.log("third")
let arrnum = [3,6,9]
if(colchecker(arrnum,brakedown[1],input) == false){
console.log("not in this column")
return
}
}

console.log("does this happen")
let thething = document.getElementById(x)
map.set(x, input)
thething.innerHTML = input
thething.classList.remove('empty')
thething.classList.add('filled')
console.log(map.get(x))

/* 
let thing = el.innerHTML
                 
                      const theplace = document.getElementById(sel)
      if(mainAlgo(thing,x,y,z) == true) {                     
theplace.classList.add('filled');
theplace.classList.remove('selected')
theplace.classList.remove('selectedFull')
theplace.classList.remove('cell')
if(theplace.innerHTML == 0){
theplace.classList.remove('empty')      
theplace.innerHTML = thing   
//console.log(theplace)
          }}
 else{
           

theplace.classList.remove('selected');
theplace.classList.remove('selectedFull');
if(theplace.innerHTML == 0) {
    theplace.classList.add('empty')
}
          
                         }        
  */
  refresh()


  }


function refresh(x) {
  let butlist = document.querySelectorAll('.button');
  butlist.forEach((el) => {el.classList.remove('button');

                  el.classList.add('buttonDis')}) 
let old = document.querySelectorAll('.selected')
old.forEach((obj) => {
obj.classList.remove('selected')
})

let old2 = document.querySelectorAll('.selectedFull')
old2.forEach((obj) => {
obj.classList.remove('selectedFull')
})  

/*const theplace = document.getElementById(x)
const del = document.getElementById("delete")
let refdel = del.cloneNode(true);
del.remove()
document.getElementById("otherbutts").appendChild(refdel)
refdel.addEventListener("click", function clicked(stuff) {
theplace.innerHTML = 0
theplace.classList.remove('selected')
theplace.classList.remove('selectedFull')
theplace.classList.add('empty')

let butlist = document.querySelectorAll('.button')  

butlist.forEach((el) => {
  
    el.classList.remove('button');
      el.classList.add('buttonDis') 
      let newthing = el.cloneNode(true); 

    el.remove()

    document.getElementById("nums").appendChild(newthing)
                 
                        } )

}, {once:true})
*/




}

  function select(x) {
if(document.getElementById(x).classList.contains("placed")){
refresh()
return
}
//clear all old selected cells
let old = document.querySelectorAll('.selected')
old.forEach((obj) => {
obj.classList.remove('selected')
})

let old2 = document.querySelectorAll('.selectedFull')
old2.forEach((obj) => {
obj.classList.remove('selectedFull')
})
//assign new selected cell

let value = map.get(x)
console.log(value)


if(value == 0){
document.getElementById(x).classList.add('selected')
} else{
document.getElementById(x).classList.add('selectedFull')
}
  
/* 
let {thisRow, index}= bigIf(x)
  let thisCol = smallIf(index)
  let thisBox = document.getElementById(x).parentElement.id
  let boxSplitter = thisBox.split("")
let boxNum = Number(boxSplitter[1])
 */


//set up number select buttons
  let butlist = document.querySelectorAll('.buttonDis')  
  
 
  butlist.forEach((el) => {
  
    el.classList.remove('buttonDis');
      el.classList.add('button') 
      let newthing = el.cloneNode(true); 

    el.remove()
let input = newthing.innerHTML

    document.getElementById("nums").appendChild(newthing)
                    newthing.addEventListener("click", function clicker(stuff) {isAble(input,x) }, {once:true})
                        } )
 //refresh(x)

 }

function fillBoard() {
aggregate()
for(const [key,value] of map.entries()) {
let thing = document.getElementById(key)
thing.innerHTML = value
if(value > 0){thing.classList.add('placed')}
else{thing.classList.add('empty')}
addListen(thing)
}
  
}
    
  


function addListen(cell){

  cell.addEventListener("click" , function (){select(cell.id)})
  
  }

//menu logic

const wrapper = document.getElementById("wrapper")
const boardwrap = document.getElementById("board")

function newGame() {
boardwrap.style.display = "grid"
document.getElementById("menu").style.display = "none"
  document.getElementById("nums").style.display = "grid"
 document.getElementById("otherbutts").style.display = "grid" 
   fillBoard()
  
  }

document.getElementById("start").addEventListener("click", function(){ newGame()})
