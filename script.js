const container = document.querySelector('.container');

/*const para = document.createElement("div");
container.appendChild(para)
para.textContent='shady'*/
for( var i =0 ; i<256 ; i++ ){
 const div = document.createElement('div');
    div.classList.add('divGrid')
    container.appendChild(div);
    
   


}
//div.textContent='shady'