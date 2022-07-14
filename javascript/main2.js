

/*
console.log (PersonName);
console.log (PersonAge);
*/
/*console.log (`name: ${PersonName} age: ${PersonAge}`);*/
/*
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
        //var res;
        //res= num3 + num4
   //     return res; 
    }
  //  var output= sum1(7,8)
      //  console.log (output)

       // function send () {
         //   var income, outgo;
         // income = document.getElementById("income").value;
         // outgo = document.getElementById("outgo").value;
         // if (Number(income) > Number(outgo)) {
       //     console.log ("income > outgo");
        //  }
       // else if (Number(income) < Number(outgo)) {
           // console.log ("income < outgo");
      //  }
       // else {
           // console.log ("income = outgo");
      //  }
        
        //}
 
        //var profileInfo = ["Sahar",28,true,"aliabbasisaha7@gmail.com" ]
       
        //profileInfo.push("username");
        //console.log(profileInfo);
        //profileInfo.shift("username");
        //profileInfo.pop();
       //var show = profileInfo.indexOf(28)
       //profileInfo[3]= "sahar aliabbasi"
        //console.log (profileInfo);

        //var profileInfo = {
          //  Name: "Sara",
          //  Email: "sara@gmail.com",
        //  age: 20,
          //  job:"music"
      //  }
      //  profileInfo ["job"] = "music"
      //  profileInfo["Name"]="sahar"
      //  var show = profileInfo["job"];
       // console.log(show);
        //console.log(profileInfo);
/*
var profileInfo = {
  Name:"sahar",
  phone:09146590378,
  adress:"tabriz",
  age: function(yearofbirth) {
    return 2022 - yearofbirth;
  }

};

console.log(profileInfo.age(1994));
   

var i;
for (i = 0; i <= 10; i++) {
  console.log(i);
};

var skills = ["html","css" ,"bootstrap" ,"javascript"];
for (i=0; i < 4; i++){
  console.log(skills[i]);
  if (i===2){
    break;
  }
} */

 function send () {   
  var i, j, input;
  input = document.getElementById("input").value;
  for (i=0 ; i < input; i++) {
  document.write("<br>");
  for (j=0 ; j < i ; j++ ) {
    document.write("@")
  }
}
 }
