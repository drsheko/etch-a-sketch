const container = document.querySelector('.container');
let num = prompt('enter num:')
for( var i =0 ; i<num ; i++ ){
 const div = document.createElement('div');
    div.classList.add('divGrid');
    container.appendChild(div);
    for (var j =0 ; j<num ; j++){
        const column = document.createElement('div');
        column.classList.add('divColumn');
        div.appendChild(column);
    }  

}
const columns = document.querySelectorAll('.divColumn')
for (const column of columns){
column.addEventListener('click',()=>{column.classList.add('permanentHover')})
}

const clear = document.querySelector('.clear')
for (const column of columns){
clear.addEventListener('click',()=>{column.classList.remove('permanentHover')})}

const erase = document.querySelector('.erase')
erase.addEventListener('click',()=>{column.classList.remove('permanentHover')})



var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; 


slider.oninput = function() {
  output.innerHTML = this.value;
   
}


