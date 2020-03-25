

//document.addEventListener("DOMContentLoaded", function() {
  console.log("hehe")
 
  
const fill= document.querySelector('.fill');
const empties= document.querySelectorAll('.empty');

//event listeners
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);
//loop through empties
//then run your function
for(const empty of empties) {
    empty.addEventListener('dragover', towerOver);
    empty.addEventListener('dragenter', towerEnter);
    empty.addEventListener('dragleave', towerLeave);
    empty.addEventListener('drop', towerDrop)
    
    }
function dragStart() {
    this.className += ' hold';

    setTimeout(()=>(this.className = 'invisible'), 0)
console.log('start')
}

function dragEnd() {
this.className = 'fill'
console.log('end')
}




function towerOver (e) {
    e.preventDefault();
console.log('over')
}
function towerEnter (e) {
    e.preventDefault();
    this.className += ' hovered';
    console.log('enter')
}
function towerLeave () {
    this.className += ' empty';
    console.log('leave')
}
function towerDrop () {
    this.className += ' empty';
    this.append(fill);
    console.log('drop')
}


//});