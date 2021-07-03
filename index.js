 const canvas = document.getElementById("c1");
 const ctx = canvas.getContext('2d');
 let myColor = 'red';


 document.getElementById('color').oninput = function ()  {
     myColor = this.value;
 }


  
    canvas.onmousedown = function (event){
            canvas.onmousemove=function(event){
            const x = event.offsetX;
            const y = event.offsetY;
            ctx.fillRect(x-5, y-5, 10, 10);
            ctx.fillStyle = myColor;
            ctx.fill();
        }
        
        canvas.onmouseup = function (){
            canvas.onmousemove = null;
        }
    }




 

