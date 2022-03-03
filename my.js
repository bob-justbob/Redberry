const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email')
const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;




fname.addEventListener('change', ()=> {
    if(fname.value.length < 2) {
        alert( fname.value + '    need more then two letters')
    } 
    
})

lname.addEventListener('change', ()=>{
    if(lname.value.length < 2) {
        alert(lname.value + ' need more then two letters')
    }
})