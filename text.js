const hamburger= document.querySelector('.hamburger');
const navItems= document.querySelector('.nav-items')
const menuIsActive =()=>{
    hamburger.classList.toggle('active');
    navItems.classList.toggle('active');
};
hamburger.addEventListener('click', menuIsActive)



document.querySelectorAll('.nav-link').forEach(n=> n.
    addEventListener('click', ()=>{
        hamburger.classList.remove('active');
        navItems.classList.remove('active');

    }))

const handleClick=()=>{
 const message= document.querySelector("#message");
 if(message.value==""){
    document.querySelector("#message_error").innerHTML="Please enter a message"
    document.querySelector("#message").style.border="1px solid red"
 }
 else{
    document.querySelector("#message_error").innerHTML=""
    document.querySelector("#message").style.border="1px solid #d0d5dd";
    }
}