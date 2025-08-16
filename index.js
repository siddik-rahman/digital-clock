 // Select input field
const result = document.getElementById("inputext");

  // To place numbers or operators on the display
 const  calculate =(number)=> {
 result.value += number;
    
 }

   //  To find a solution
 const Result =()=> {
   try {
    result.value = eval( result.value);
   } catch(err) {
    alert(" ⚠️ Enter a valid  input ");
   }
 }

  //  To clear everything
 const clr = () => {
    result.value = "";
 }

  //  To delete the last character
 const  del=()=> {
     result.value = result.value.slice(0,-1);
 }
