let turn ='o';
let title=document.querySelector(`.title`);
let sq=[];
let x=1;
function end_of_game(sq1,sq2,sq3){
     if(turn=='x'){
          document.getElementById('ti').innerHTML='O is winner';
          document.getElementById('s'+sq1).style.background='red';
          document.getElementById('s'+sq2).style.background='red';
          document.getElementById('s'+sq3).style.background='red';
          setInterval(function(){document.getElementById('ti').innerHTML+='.';},500);
          setTimeout(function(){location.reload();},1500);
     }
     else{
          document.getElementById('ti').innerHTML='X is winner';
          document.getElementById('s'+sq1).style.background='red';
          document.getElementById('s'+sq2).style.background='red';
          document.getElementById('s'+sq3).style.background='red';
          setInterval(function(){document.getElementById('ti').innerHTML+='.';},500);
          setTimeout(function(){location.reload();},1500);
     }
}
function winner(){
     x++;
     for(let i=1;i<10;i++){
        sq[i]=document.getElementById('s'+i).innerHTML;  
     }
     if((sq[1]==sq[2]&&sq[2]==sq[3]&&sq[1]!='')){
          end_of_game (1,2,3);
     }
     else if(sq[4]==sq[5]&&sq[5]==sq[6]&&sq[4]!=''){
          end_of_game (4,5,6);               
     }
     else if(sq[7]==sq[8]&&sq[9]==sq[8]&&sq[7]!=''){
          end_of_game (7,8,9);
     }
     else if(sq[1]==sq[4]&&sq[4]==sq[7]&&sq[1]!=''){
          end_of_game (1,4,7);
     }
     else if(sq[2]==sq[5]&&sq[5]==sq[8]&&sq[2]!=''){
          end_of_game (2,5,8);
     }
     else if(sq[3]==sq[6]&&sq[6]==sq[9]&&sq[3]!=''){
          end_of_game (3,6,9);
     }
     else if(sq[1]==sq[5]&&sq[5]==sq[9]&&sq[1]!=''){
          end_of_game (1,5,9);
     }
     else if(sq[3]==sq[5]&&sq[5]==sq[7]&&sq[3]!=''){
          end_of_game (3,5,7);
     }
     else if(x===10){
          document.getElementById('ti').innerHTML='NO ONE WON';
          setInterval(function(){document.getElementById('ti').innerHTML+='.';},500);
          setTimeout(function(){location.reload();},1500);
     }
}
function game(id){
     let el=document.getElementById(id);
     if(turn === 'x' && el.innerHTML==''){
          el.innerHTML='X';
          turn='o';
          document.getElementById('ti').innerHTML='O';
     }
     if(turn === 'o' && el.innerHTML==''){
          el.innerHTML='O';
          turn='x';
          document.getElementById('ti').innerHTML='X';
     }
     winner();
}