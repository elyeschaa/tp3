var plusbtn = document.getElementsByClassName("plusbtn");
var moinsbtn = document.getElementsByClassName("moinsbtn");
var count = document.getElementsByClassName("count");
var del = document.getElementsByClassName("delete") ;
var like = document.getElementsByClassName("like");


plusbtn[0].addEventListener ("click", function(){
    count[0].innerHTML= +count[0].innerHTML +1
});

moinsbtn[0].addEventListener ("click", function(){
   if  (+count[0].innerHTML >0){
    count[0].innerHTML= +count[0].innerHTML -1
   }else{
       alert("pay attention");
   };
});


plusbtn[1].addEventListener ("click", function(){
    count[1].innerHTML= +count[1].innerHTML +1
});

moinsbtn[1].addEventListener ("click", function(){
   if  (+count[1].innerHTML >1){
    count[1].innerHTML= +count[1].innerHTML -1
   }else{
       alert("pay attention");
   };
});

plusbtn[2].addEventListener ("click", function(){
    count[2].innerHTML= +count[2].innerHTML +1
});

moinsbtn[2].addEventListener ("click", function(){
   if  (+count[2].innerHTML >2){
    count[2].innerHTML= +count[2].innerHTML -1
   }else{
       alert("pay attention");
   };
});

del[0].addEventListener("click",function(){
    var remove=document.getElementsByClassName("card");
    remove[0].remove();
})

del[1].addEventListener("click",function(){
    var remove=document.getElementsByClassName("card");
    remove[1].remove();
})


del[2].addEventListener("click",function(){
    var remove=document.getElementsByClassName("card");
    remove[2].remove();
})

like[0].addEventListener ("click", function(){

document.getElementsByClassName("like")[0].style.background="rgb(255,100,100)";
});
like[1].addEventListener ("click", function(){

    document.getElementsByClassName("like")[1].style.background="rgb(255,100,100)";
    });
like[2].addEventListener ("click", function(){

        document.getElementsByClassName("like")[2].style.background="rgb(255,100,100)";
        });

