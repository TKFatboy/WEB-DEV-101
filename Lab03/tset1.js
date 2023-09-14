var num= 0;

function add(){
    if(num>=0 && num<=9){
        num ++;
        console.log(num);
    }
}
 const button_add = document.querySelector('#buttonadd');
 button_add.addEventListener('click', add);

 function minus(){
    if(num>=1){
        num --;
        console.log(num);
    }
}
 const button_minus = document.querySelector('#buttonminus');
 button_minus.addEventListener('click', minus);