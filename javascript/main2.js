var PersonName ="SAHAR";
var PersonAge =27;

/*
console.log (PersonName);
console.log (PersonAge);
*/
/*console.log (`name: ${PersonName} age: ${PersonAge}`);*/

var Namber =27
var Name   ="sahar"
if (Namber < 27 ) {
    console.log(Name + "is younger");
    }
  else if(Namber == 27){
            console.log(`${Name} is 27 years old.`)
        }
    else 
    {
        console.log(`${Name} is older.`);

    }
  
    function sum(num1,num2) {
        var res;
        res= num1 / num2
        return res;
    } 
    var output = sum(40,2);
    console.log (output);

    function sum1(num3,num4){
        var res;
        res= num3 + num4
        return res; 
    }
    var output= sum1(7,8)
        console.log (output)

        function send () {
            var income, outgo;
          income = document.getElementById("income").value;
          outgo = document.getElementById("outgo").value;
          if (Number(income) > Number(outgo)) {
            console.log ("income > outgo");
          }
        else if (Number(income) < Number(outgo)) {
            console.log ("income < outgo");
        }
        else {
            console.log ("income = outgo");
        }
        
        }
 
        var profileInfo = ["Sahar",28,true,"aliabbasisaha7@gmail.com" ]
       
        //profileInfo.push("username");
        //console.log(profileInfo);
        //profileInfo.shift("username");
        //profileInfo.pop();
       //var show = profileInfo.indexOf(28)
       //profileInfo[3]= "sahar aliabbasi"
        console.log (profileInfo);