const container = document.querySelector('.container');

for( var i =0 ; i<256 ; i++ ){
 const div = document.createElement('div');
    div.classList.add('divGrid');
    //div.classList.add('permanentHover');
    container.appendChild(div);  

}
const divs = document.querySelectorAll('.divGrid')
for (const div of divs){
div.addEventListener('click',()=>{div.classList.add('permanentHover')})
}
