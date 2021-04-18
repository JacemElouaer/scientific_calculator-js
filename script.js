//Merci pour votre attention 


// 2  input variable  et 2 par id et 2 par nodelist
var number = document.querySelectorAll('.numbers div'), 
    operator = document.querySelectorAll('.operators div'), 
    special_operator  = document.querySelectorAll('.special_operator div'),
    input= document.getElementById('input'),
    input1= document.getElementById('input1'),
    result  = document.getElementById('result'), 
    clear =document.getElementById('clear'), 
    resultDisplayed  =true, 
    resultat = "", 
    current_value ="", 
    results ="";   
    



function factoriel(n){
  let out=1;
  for (i =1 ; i<=n ; i++){
    out*=i; 
  } 
  return (out); 
}  
function degrees_to_radians(degrees)
{
  var pi = Math.PI;
  return degrees * (pi/180);
}



/// probleme ... ====>valider
///solution de la probleme des nombre.nombre *nombre. ====>valider
///solution de la probleme des ** // -- ++ ====>valider
///solution scientific operators // 







//number click event
    for (var i = 0; i < number.length; i++) {
        number[i].addEventListener("click", (e)=> {
          
          
          var currentString = input.innerHTML;
          var lastChar = currentString[currentString.length - 1];
          var current_real= input1.innerHTML;
          var arriver;
          var lastChar_current_real = current_real[current_real.length -1];
          if(e.target.innerHTML=="±"){
            // var current_real1 = "(-"+current_real+")"; 
            if(current_real.includes("(-"))
            {
              current_real = current_real.substring(2 , current_real.length-1) ; 
              input1.innerHTML =current_real; 
              input.innerHTML  = input.innerHTML.substring(0,currentString.length-current_real.length-3); 
              results  = results.substring(0,currentString.length-current_real.length-3); 
              input.innerHTML+=current_real; 
              results+=current_real;

            } 
            else { 
              input.innerHTML  = input.innerHTML.substring(0,currentString.length-current_real.length);  
              // console.log(input.innerHTML);
              results  = results.substring(0,currentString.length-current_real.length);  
              current_real = "(-"+current_real+")";
              input1.innerHTML = current_real;   
              input.innerHTML+=current_real;
              // console.log(currentString);
              
              // input.innerHTML+=current_real;
            }
          } 
          
          else{
          if (resultDisplayed === false) { 
             if(currentString.includes('.') && lastChar!='.' && current_real.includes('.')&& lastChar_current_real!='.'){
                if (e.target.innerHTML!="."){
                  input1.innerHTML+=e.target.innerHTML;
                  currentString +=e.target.innerHTML; 
                  input.innerHTML=currentString;
                  results+=e.target.innerHTML;
                }
            } else {
              if (lastChar==="." && lastChar_current_real==="."){ 
              if (e.target.innerHTML!="."){
              input1.innerHTML+=e.target.innerHTML;
              currentString +=e.target.innerHTML; 
              input.innerHTML=currentString; 
              results+=e.target.innerHTML;
            }
              else {
                results = results.substring(0,currentString.length - 1)+ e.target.innerHTML;
                currentString = currentString.substring(0,currentString.length - 1)+ e.target.innerHTML;
                input.innerHTML = currentString;
                if (e.target.innerHTML==="."){

                }else  input1.innerHTML +=e.target.innerHTML;
              }

            }else  {
              // e.target.innerHTML =='log'?  
              input.innerHTML += e.target.innerHTML;
              results+=e.target.innerHTML;
              input1.innerHTML+=e.target.innerHTML;
          } 
        }
      }
            else if (resultDisplayed === true && lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/") {
            resultDisplayed = false;
            input1.innerHTML=""; 
            input1.innerHTML+=e.target.innerHTML;
            input.innerHTML += e.target.innerHTML; 
            results+=e.target.innerHTML;
          } else {
          
            resultDisplayed = false;
            input.innerHTML = "";
            results = "";
            results+=e.target.innerHTML;
            input.innerHTML+=e.target.innerHTML;
            input1.innerHTML +=e.target.innerHTML;
          }
        }
        current_real = input1.innerHTML; 
        // console.log(current_real);
        
        });
      } 


//operator click event 

/// we use new string to understand the logic behind the substring use    !!!!!! ///


for(var i =0 ; i <operator.length ; i++){
    operator[i].addEventListener("click" , (e)=>{
        var currentString = input.innerHTML; 
        var lastChar = currentString[currentString.length - 1];  
        var avant_last_char  =  currentString[currentString.length-2]; 
        let newString; 
        
    if (e.target.innerHTML=="&lt;="){
        if(["l"].includes(currentString[currentString.length-3])){
          results= results.substring(0 , results.length-10);
          input.innerHTML = input.innerHTML.substring(0 , input.innerHTML.length-4);
          input1.innerHTML = input1.innerHTML.substring(0 , input1.innerHTML.length-4);
          
        }else if (["t","s","c","l"].includes(currentString[currentString.length-4])){
          results= results.substring(0 , results.length-10);
          input.innerHTML = input.innerHTML.substring(0 , input.innerHTML.length-5);
          input1.innerHTML = input1.innerHTML.substring(0 , input1.innerHTML.length-5);
        }
        else {
        // inportant <=    ===> eface
        newString = currentString.substring(0 , currentString.length - 1);  
        results = results.substring(0 , results.length-1); 
        input.innerHTML = newString;
        input1.innerHTML = input1.innerHTML.substring(0 , input1.innerHTML.length - 1);
        
    }  } 
    else { 
      if(lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/" || lastChar==="."|| lastChar ==="e"){
      input.innerHTML  = newString;
      input1.innerHTML=""; 
      // console.log(lastChar); 
      newString = currentString.substring(0 ,currentString.length - 1)+ e.target.innerHTML; 
      results = results.substring(0 ,results.length - 1)+ e.target.innerHTML;
      input.innerHTML = newString;  
      
      }
      else  if(currentString.length == 0){ 
          alert("entrer un valeur"); 
      } else{
          // add operator for the first time 
        input.innerHTML+=e.target.innerHTML;
        input1.innerHTML="";  
        results += e.target.innerHTML; 
        //["x!" , "x^" ,"x²"].includes(e.target.innerHTML)? input.innerHTML +=e.target.innerHTML[e.target.innerHTML.length-1] : input.innerHTML+=e.target.innerHTML;
        } 
      }
      console.log(results);
    }); 
}
 




for (var i=0 ;i <special_operator.length ; i++ ){
  special_operator[i].addEventListener("click" , (e)=>{
    var currentString = input.innerHTML; 
    var lastChar = currentString[currentString.length - 1];
    var newString= "";
    current_value = input1.innerHTML; // fixe log 
    if(e.target.innerHTML=="="){
    
    }
     else{
    if (e.target.innerHTML.includes("x!")){ 
      if (input1.innerHTML==""){
        current_value=input.innerHTML;
      }
    input.innerHTML+=e.target.innerHTML[1];  
    results = results.substring(0,results.length-current_value.length);
    let res =  factoriel(current_value); 
    results +=res;   
    console.log(current_value);
    console.log(results);
     } 
  else{ 
    if(lastChar === "+" || lastChar === "-"  || lastChar === "/" || lastChar === "*" ||results=="" || lastChar===""){
     
     switch(e.target.innerHTML){
        case "log": 
          results+="Math.log(";  
          break; 
        case "x^":
          results = results.substring(0,results.length-current_value.length);
          results+="Math.pow("+current_value+",";
          console.log(results);
          break;
        case "ln": 
          results+="("+Math.LN2+"*"; 
          break;
        case  'rcn' : 
          results+="Math.sqrt("; 
          break;  
        case "tan": 
          results+="Math.tan("; 
          break;
        case  'cos' : 
          results+="Math.cos("; 
          break;  
        case "sin": 
          results+="Math.sin("; 
          break;
        case  'cos' : 
          results+="Math.cos("; 
          break;  
        case 'pi': 
          results+="3.14159265359" ;
          break;
        case 'e': 
          results +="2.718281828459045*(";
          break;
        case "x²": 
          results = results.substring(0,results.length-current_value.length);
          results +="(Math.pow("+current_value +","+2+"))";  
          // console.log(results);
          break;
      } 
    if(e.target.innerHTML.includes('x^')){ 
      input.innerHTML+=e.target.innerHTML.substring(1,e.target.innerHTML.length)+"("; 
      input1.innerHTM+=e.target.innerHTML.substring(1,e.target.innerHTML.length)+"("; 
    }
      else {
        if(e.target.innerHTML.includes('x²')) {
        input.innerHTML+=e.target.innerHTML.substring(0,e.target.innerHTML.length-1); 
        input1.innerHTM+=e.target.innerHTML.substring(0,e.target.innerHTML.length-1);
        
    }else{ 
      if(e.target.innerHTML.includes("rad")){
        let rad =degrees_to_radians(current_value); 
        input.innerHTML=rad;
        input1.innerHTML="";  
      }
      console.log(results); 
      input.innerHTML+=e.target.innerHTML+"(";   
      input1.innerHTML=e.target.innerHTML+"(";
    }
  }
}
    else {
      switch(e.target.innerHTML){
       
        case "log": 
          results+="*Math.log(";  
          break;
        case "x²": 
        results = results.substring(0,results.length-current_value.length);
        results+="Math.pow("+current_value +","+2+")"; 
          break;
        case "x^": 
          console.log(results.length);
          results = results.substring(0,results.length-current_value.length);
          results+="(Math.pow("+current_value +","; 
          break; 
        case "ln": 
          results+="*(" +Math.LN2+"*"; 
          break;
        case  'rcn' : 
          results+="*Math.sqrt("; 
          break;  
        case "tan": 
          results+="*Math.tan("; 
          break;
        case  'cos' : 
          results+="*Math.cos("; 
          break;  
        case "sin": 
          results+="*Math.sin("; 
          break;
        case  'cos' : 
          results+="*Math.cos("; 
          break;  
        case 'e': 
          results +="*2.718281828459045*(";
          break;
        case 'pi': 
          results+="*3.14" ;
          break;         
      } 
      if(e.target.innerHTML.includes('x^')){ 
        input.innerHTML+=e.target.innerHTML.substring(1,e.target.innerHTML.length)+"("; 
        input1.innerHTM+=e.target.innerHTML.substring(1,e.target.innerHTML.length)+"("; 
      }
        else {
          if(e.target.innerHTML.includes('x²')) {
          input.innerHTML+=e.target.innerHTML.substring(1,e.target.innerHTML.length); 
          input1.innerHTM+=e.target.innerHTML.substring(1,e.target.innerHTML.lengths);
          
      }else{
      if(e.target.innerHTML.includes("rad")){
        let rad =degrees_to_radians(current_value); 
        input.innerHTML=rad;
        input1.innerHTML="";  
      }else{
        console.log(results); 
        input.innerHTML+="*"+e.target.innerHTML+"(";   
        input1.innerHTML="*"+e.target.innerHTML+"(";
      }
    }
  }
    } 
  }
}
  });
} 




//result handling with eval function 
result.addEventListener("click" ,(e) =>{
    var currentString = input.innerHTML; 
    resultat; 
    var lastChar  = results[results.length-1]; 
    input1.innerHTML = "";
    console.log(Math.LN2);
    if(results.length==0){
        alert("faut entrer quelque chose a calculer"); 
    }else
    if(resultat.length==0){
    
    if(lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "/"){
        resultat = results.substring(0,results.length-1); 
        input.innerHTML = ""; 
        Math.LN2  
        console.log(eval("Math.LN2(5)"));
        input.innerHTML = eval(resultat);
        resultDisplayed = true; 
        resultat = "";      
    }else{
        resultat = results;  
        input.innerHTML = "";  
        console.log(resultat);
        input.innerHTML = eval(resultat);
        resultDisplayed = true; 
        resultat= ""; 
    }
  } 
  else {
      if(lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "/"){
        resultat = resultat.substring(0,results.length-1); 
        input.innerHTML = ""; 
        input.innerHTML = eval(resultat);
        resultDisplayed = true; 
        resultat = "";      
    }else{   
        resultat=results;
        input.innerHTML = "";  
        input.innerHTML = eval(resultat);
        resultDisplayed = true; 
        resultat= "" ; 
    }  
  }  
  input1.innerHTML= input.innerHTML;
  // console.log(resultat); 
  // console.log(factoriel(5));
});


clear.addEventListener('click', (e)=>{
      input.innerHTML="";
      results="";
      input1.innerHTML = "";
});  










