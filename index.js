const cursor = document.querySelector(".cursor")
var timeout ;

document.addEventListener('mousemove', (e)=>{
    let x = e.pageX;
    let y = e.pageY;

    cursor.style.top = y +'px'
    cursor.style.left = x +'px'
    cursor.style.display ='block'
    console.log(e.pageX);

    function mouseStop (){
        cursor.style.display = 'none'
    }

    clearTimeout(timeout)
    timeout = setTimeout(mouseStop , 1000);

})