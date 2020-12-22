







// changelagunge


function change(lang){
    if(lang =="en"){
      return "change,language";
    }else if(lang =="ka"){
      return "ჩანგელაგუნგე";
    }else {
      return "change, language";
    }
    
  }
  
  console.log(change("ka"));
  
  
  
  
  // ____________________________________________________________________
  
  // greaternum
  
  function greaternum( x , y) {
   if (x > y){
     return x;
   }else if (x == y){
     return "equal"
   }else{
     return y;
   }
    
  }
  
  console.log(greaternum(3,3));
  
  // ___________________________________________________________________
  
  // assigngrade
  
  function assigngrade(grade){
      if (grade >=8){
          return "A"
      }else if (grade >=6){
          return "B"
      }else if (grade >=4){
          return "C"
      }else if (grade >=2){
          return "D"
      }else{
          return "f"
      }
              
  }
  
  console.log(assigngrade(7));