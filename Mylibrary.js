function hascollided(body1, body2) {
    damage= 0.5*weight*speed*speed
    /(thickness*thickness*thickness)
    
    if(body1.x - body2.x<= body1.width/2+body2.width/2 && (damage<100)) {
      body2.shapeColor= "green";
      body2.velocityX=0;
   
   
   }
     else if(body1.x - body2.x<= body1.width/2+body2.width/2 && (damage>180)){ 
     body2.shapeColor= "red";
     body2.velocityX= 0;
     
   }
  }