var validFlag = false;
var help = 0;
var idk = 0;
var what = 0;
var works = 0;





function setupForm() {
    document.info.fname.addEventListener("focus",fnameFocus, false);
    document.info.fname.addEventListener("blur",fnameBlur, false);
    document.info.lname.addEventListener("focus",lnameFocus, false);
    document.info.lname.addEventListener("blur",lnameBlur, false);
    document.info.email.addEventListener("focus",emailFocus, false);
    document.info.email.addEventListener("blur",emailBlur, false);
    document.info.address.addEventListener("focus",addyFocus, false);
    document.info.address.addEventListener("blur",addyBlur, false);
    document.info.submit.addEventListener("click",answers, false);


}
function fnameFocus(){

    var q1 = document.getElementById('q1');
    var span = q1.getElementsByTagName('span');
    span[0].firstChild.nodeValue = "Please enter a valid name! (letters only)";
    var y = document.getElementById('fail1')
    y.style.display="none"; 
    var x = document.getElementById('check1');
    x.style.display="none"; 
  

}
function fnameBlur(){
 
    help++;

    validateData();
    
      }



function lnameFocus(){
    var q2 = document.getElementById('q2');
    var span = q2.getElementsByTagName('span');
    span[0].firstChild.nodeValue = "Please enter a valid name! (letters only)";
    var y = document.getElementById('fail2')
    y.style.display="none"; 
    var x = document.getElementById('check2');
    x.style.display="none"; 

    }

function lnameBlur(){

    idk++
    validateData();

}
function emailFocus(){
    var q3 = document.getElementById('q3');
    var span = q3.getElementsByTagName('span');
    span[0].firstChild.nodeValue = "Please enter enter a valid email address!(Must contain @)";
    var y = document.getElementById('fail3')
        y.style.display="none"; 
    var x = document.getElementById('check3');
    x.style.display="none"; 
}
function emailBlur(){
    what++
    validateData();
}
function addyFocus(){
    var q4 = document.getElementById('q4');
    var span = q4.getElementsByTagName('span');
    span[0].firstChild.nodeValue = "Please enter your CAH url (must contain ~ and begin with http://)";
    var y = document.getElementById('fail4')
    y.style.display="none"; 
    var x = document.getElementById('check4');
    x.style.display="none"; 


}
function addyBlur(){
   works++
   validateData();

}


function validateData(){

    if (help>0){
    var myReg = /^[a-zA-Z]+$/;
    var first = document.info.fname.value;
    var q1 = document.getElementById('q1');
    var span = q1.getElementsByTagName('span');

    if (first.match(myReg) != null){
      
       
        span[0].firstChild.nodeValue = "Success!";
        var x = document.getElementById('check1');
        x.style.display="block"; 
        var y = document.getElementById('fail1')
        y.style.display="none"; 
        

        validFlag = true;
        

    } else{
        var y = document.getElementById('fail1')
        y.style.display="block"; 
        var x = document.getElementById('check1');
        x.style.display="none"; 
        var q1 = document.getElementById('q1');
        var span = q1.getElementsByTagName('span');
        span[0].firstChild.nodeValue = "Error!";
        validFlag = false;
   
    }
}
   
    if (idk>0){
 
    var Reg = /^[a-zA-Z]+$/;
    var first = document.info.lname.value;
    var q2 = document.getElementById('q2');
    var span = q2.getElementsByTagName('span');
    if (first.match(Reg) != null){
        span[0].firstChild.nodeValue = "Success!";
        var x = document.getElementById('check2');
        x.style.display="block"; 
        var y = document.getElementById('fail2')
        y.style.display="none"; 
        validFlag = true;
    } else{
        var y = document.getElementById('fail2')
        y.style.display="block"; 
        var x = document.getElementById('check2');
        x.style.display="none"; 
        var q2 = document.getElementById('q2');
        var span = q2.getElementsByTagName('span');
        span[0].firstChild.nodeValue = "Error!";
        validFlag = false;
    }
    }

    if (what > 0){

    var Burr = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    var mail = document.info.email.value;
    if (mail.match(Burr) != null){
        var q3 = document.getElementById('q3');
        var span = q3.getElementsByTagName('span');
        span[0].firstChild.nodeValue = "Success!";

        var x = document.getElementById('check3');
        x.style.display="block"; 
        var y = document.getElementById('fail3')
        y.style.display="none"; 
        validFlag = true;
    } else{
        var y = document.getElementById('fail3')
        y.style.display="block"; 
        var x = document.getElementById('check3');
        x.style.display="none"; 
        var q3 = document.getElementById('q3');
        var span = q3.getElementsByTagName('span');
        span[0].firstChild.nodeValue = "Error!";
        validFlag = false;
    }

    }

    if(works>0){
  
    var Ham = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
    var dress = document.info.address.value;
    if (dress.match(Ham) != null){
        var q4 = document.getElementById('q4');
        var span = q4.getElementsByTagName('span');
        span[0].firstChild.nodeValue = "Success!";

        var x = document.getElementById('check4');
        x.style.display="block"; 
        var y = document.getElementById('fail4')
        y.style.display="none"; 
        validFlag = true;
    } else{
        var y = document.getElementById('fail4')
        y.style.display="block"; 
        var x = document.getElementById('check4');
        x.style.display="none"; 
        var q4 = document.getElementById('q4');
        var span = q4.getElementsByTagName('span');
        span[0].firstChild.nodeValue = "Error!";
        validFlag = false;
    }
    }
}


function answers() {
  event.preventDefault();

    var Gryffindor = 0;
    var Ravenclaw = 0;
    var Hufflepuf = 0;
    var Slytherin = 0;
    var answerbox = document.getElementById('answer');
    var Peggy = document.getElementById('results');


    
    var choices = document.getElementsByTagName('input');
    for (i=0; i<choices.length; i++) {
      if (choices[i].checked) {
        if (choices[i].value == 'Red') {
          Gryffindor++;
        }
        if (choices[i].value == 'Blue') {
          Ravenclaw++;
        }
        if (choices[i].value == 'Yellow') {
          Hufflepuf++;
        }
        if (choices[i].value == 'Green') {
          Slytherin++;
        }
        if (choices[i].value == 'DADA') {
            Gryffindor++;
          }
          if (choices[i].value == 'Charms') {
            Ravenclaw++;
          }
          if (choices[i].value == 'Transfiguration') {
            Hufflepuf++;
          }
          if (choices[i].value == 'Potions') {
            Slytherin++;
          }
          if (choices[i].value == 'Frog') {
            Gryffindor++;
          }
          if (choices[i].value == 'Owl') {
            Ravenclaw++;
          }
          if (choices[i].value == 'Cat') {
            Hufflepuf++;
          }
          if (choices[i].value == 'Snake') {
            Slytherin++;
          }
          if (choices[i].value == 'Summer') {
            Gryffindor++;
          }
          if (choices[i].value == 'Autumn') {
            Ravenclaw++;
          }
          if (choices[i].value == 'Winter') {
            Hufflepuf++;
          }
          if (choices[i].value == 'Spring') {
            Slytherin++;
          }
          if (choices[i].value == 'Spontaneous') {
            Gryffindor++;
          }
          if (choices[i].value == 'Indecisive') {
            Ravenclaw++;
          }
          if (choices[i].value == 'Wallflower') {
            Hufflepuf++;
          }
          if (choices[i].value == 'Resourceful') {
            Slytherin++;
          }
          if (choices[i].value == 'ROR') {
            Gryffindor++;
          }
          if (choices[i].value == 'Library') {
            Ravenclaw++;
          }
          if (choices[i].value == 'Great Hall') {
            Hufflepuf++;
          }
          if (choices[i].value == 'Chamber') {
            Slytherin++;
          }
          if (choices[i].value == 'Travel') {
            Gryffindor++;
          }
          if (choices[i].value == 'Hogwarts') {
            Ravenclaw++;
          }
          if (choices[i].value == 'Hogsmead/Diagon Alley') {
            Hufflepuf++;
          }
          if (choices[i].value == 'Prime Minister') {
            Slytherin++;
          }
          if (choices[i].value == 'Phoenix Feather') {
            Gryffindor++;
          }
          if (choices[i].value == 'Thestral Hair') {
            Ravenclaw++;
          }
          if (choices[i].value == 'Unicorn Hair') {
            Hufflepuf++;
          }
          if (choices[i].value == 'Dragon Heartstring') {
            Slytherin++;
          }
          if (choices[i].value == 'Invisibility Cloak') {
            Gryffindor++;
          }
          if (choices[i].value == 'Philosophers Stone') {
            Ravenclaw++;
          }
          if (choices[i].value == 'None') {
            Hufflepuf++;
          }
          if (choices[i].value == 'Elder Wand') {
            Slytherin++;
          }

      }
     
    }

     total = Gryffindor + Slytherin + Ravenclaw + Hufflepuf;
    console.log(total);
    console.log(Gryffindor);
    console.log(Slytherin);
    console.log(Ravenclaw);
    console.log(Hufflepuf);


    
      if (total == 9){

                    var alexander = document.createTextNode("First name is " +document.info.elements["fname"].value +
                    " and last name is " + document.info.elements["lname"].value + " Your email address is " + document.info.elements["email"].value +
                    " Your cah address is " + document.info.elements["address"].value);

                    Peggy.appendChild(alexander);
                  
                  
              var radio_buttons = document.info.elements["colour"];
              for (var x = 0; x < radio_buttons.length; x++){
                  if(radio_buttons[x].checked){
                    var une = document.createTextNode( radio_buttons[x].value + "  button is checked and the value is  " +radio_buttons[x].value);
                    Peggy.appendChild(une);  
                  }else {
                    var deux = document.createTextNode(radio_buttons[x].value + " button is not checked ");  
                    Peggy.appendChild(deux);  
                  }
              }
              var radio_buttons = document.info.elements["class"];
              for (var x = 0; x < radio_buttons.length; x++){
                  if(radio_buttons[x].checked){
                    var trois = document.createTextNode(radio_buttons[x].value + " button is checked and the value is  " +radio_buttons[x].value);
                    Peggy.appendChild(trois); 
                  }else {
                    var quatre = document.createTextNode(radio_buttons[x].value + " button is not checked ");  
                    Peggy.appendChild(quatre); 
                  }
              }
              var radio_buttons = document.info.elements["pet"];
              for (var x = 0; x < radio_buttons.length; x++){
                  if(radio_buttons[x].checked){
                    var cinq = document.createTextNode(radio_buttons[x].value + " button is checked and the value is  " +radio_buttons[x].value);
                    Peggy.appendChild(cinq); 
                  }else {
                    var six = document.createTextNode(radio_buttons[x].value + " button is not checked ");  
                    Peggy.appendChild(six);
                  }
              }
              var radio_buttons = document.info.elements["season"];
              for (var x = 0; x < radio_buttons.length; x++){
                  if(radio_buttons[x].checked){
                    var sept = document.createTextNode(radio_buttons[x].value + " button is checked and the value is  " +radio_buttons[x].value);
                    Peggy.appendChild(sept); 
                  }else {
                    var huit = document.createTextNode(radio_buttons[x].value + " button is not checked ");  
                    Peggy.appendChild(huit);
                  }
              }
              var radio_buttons = document.info.elements["personality"];
              for (var x = 0; x < radio_buttons.length; x++){
                  if(radio_buttons[x].checked){
                    var neuf = document.createTextNode(radio_buttons[x].value + " button is checked and the value is  " +radio_buttons[x].value);
                    Peggy.appendChild(neuf); 
                  }else {
                    var dix = document.createTextNode(radio_buttons[x].value + " button is not checked ");  
                    Peggy.appendChild(dix);
                  }
              }
              var radio_buttons = document.info.elements["fav"];
              for (var x = 0; x < radio_buttons.length; x++){
                  if(radio_buttons[x].checked){
                    var onze = document.createTextNode(radio_buttons[x].value + " button is checked and the value is  " +radio_buttons[x].value);
                    Peggy.appendChild(onze); 
                  }else {
                    var douze = document.createTextNode(radio_buttons[x].value + " button is not checked ");  
                    Peggy.appendChild(douze);
                  }
              }
              var radio_buttons = document.info.elements["after"];
              for (var x = 0; x < radio_buttons.length; x++){
                  if(radio_buttons[x].checked){
                    var trieze = document.createTextNode(radio_buttons[x].value + " button is checked and the value is  " +radio_buttons[x].value);
                    Peggy.appendChild(trieze); 
                  }else {
                    var quatorze = document.createTextNode(radio_buttons[x].value + " button is not checked ");  
                    Peggy.appendChild(quatorze);
                  }
              }
              var radio_buttons = document.info.elements["core"];
              for (var x = 0; x < radio_buttons.length; x++){
                  if(radio_buttons[x].checked){
                    var quinze = document.createTextNode(radio_buttons[x].value + " button is checked and the value is  " +radio_buttons[x].value);
                    Peggy.appendChild(quinze); 
                  }else {
                    var seize = document.createTextNode(radio_buttons[x].value + " button is not checked ");  
                    Peggy.appendChild(seize);
                  }
              }
              var radio_buttons = document.info.elements["death"];
              for (var x = 0; x < radio_buttons.length; x++){
                  if(radio_buttons[x].checked){
                    var dixSept = document.createTextNode(radio_buttons[x].value + " button is checked and the value is  " +radio_buttons[x].value);
                    Peggy.appendChild(dixSept); 
                  }else {
                    var dixHuit = document.createTextNode(radio_buttons[x].value + " button is not checked ");  
                    Peggy.appendChild(dixHuit);
                  }
              }
            


    var maxscore = Math.max(Gryffindor, Ravenclaw, Hufflepuf, Slytherin);
    
    
    if (Gryffindor == maxscore) {
    var g = document.createTextNode("YOU ARE A GRYFFINDOR");   
    answerbox.appendChild(g);
    var x = document.createElement("IMG");

    var p = document.createElement("FIGCAPTION");
    var q = document.createTextNode("URL - https://1.bp.blogspot.com/-WV_sb7UjMIo/V_ENTue9HCI/AAAAAAABCrA/XocZ5xwp9mo7DSoaB-qXU_AxLKC7e2DbgCEw/s1600/gryffindor.jpg");
    p.appendChild(q);  
    answer.appendChild(p);

    x.setAttribute("src", "img/gryffindor.jpg");
    x.setAttribute("width", "304");
    x.setAttribute("height", "228");
    x.setAttribute("alt", "Gryffindor");
    answerbox.appendChild(x);
 
    }
    if (Ravenclaw == maxscore) { 
    var r = document.createTextNode("YOU ARE A RAVENCLAW");
    answerbox.appendChild(r);
    var y = document.createElement("IMG");

    var n = document.createElement("FIGCAPTION");
    var o = document.createTextNode("URL - https://4.bp.blogspot.com/-FfxqfrKt9UA/V_ENUpNkHuI/AAAAAAABCrE/a16s6N7zEBIsWl8-QAw5oQk9AMMcYFr2gCEw/s1600/ravenclaw.jpg");
    n.appendChild(o);  
    answer.appendChild(n);

    y.setAttribute("src", "img/ravenclaw.jpg");
    y.setAttribute("width", "304");
    y.setAttribute("height", "228");
    y.setAttribute("alt", "Ravenclaw");
    answerbox.appendChild(y);
    }
    if (Hufflepuf == maxscore) { 
    var h = document.createTextNode("YOU ARE A HUFFLEPUF");
    answerbox.appendChild(h);
    var z = document.createElement("IMG");

    var l = document.createElement("FIGCAPTION");
    var m = document.createTextNode("URL - https://2.bp.blogspot.com/-UcA_FGXVBHQ/V_EN4vkmPFI/AAAAAAABCrM/LjhvcqfOo841_NmuelBqFW40dz7zxG9QQCLcB/s1600/hufflepuff.jpg");
    l.appendChild(m);  
    answer.appendChild(l);

    z.setAttribute("src", "img/hufflepuff.jpg");
    z.setAttribute("width", "304");
    z.setAttribute("height", "228");
    z.setAttribute("alt", "Hufflepuf");
    answerbox.appendChild(z);

    }
    if (Slytherin == maxscore) { 
    var s = document.createTextNode("YOU ARE A SLYTHERIN");
    answer.appendChild(s);
    var a = document.createElement("IMG");

      var x = document.createElement("FIGCAPTION");
      var t = document.createTextNode("URL - https://1.bp.blogspot.com/-nQCYFpQIJQQ/V_ENVM7G_ZI/AAAAAAABCrI/5FfjP0hh6skEKKbGP5yhd17gqrkeYymUQCEw/s1600/slytherin.jpg");
      x.appendChild(t);  
      answer.appendChild(x);


    a.setAttribute("src", "img/slytherin.jpg");
    a.setAttribute("width", "304");
    a.setAttribute("height", "228");
    a.setAttribute("alt", "Slytherin");
    answer.appendChild(a);

    }
      }else{
        var one = document.getElementById('answer');
        var two = document.createTextNode('You did not fill everything. Refresh and do it again.');
        one.appendChild(two);
        
    }
  
   
}

window.addEventListener("load", setupForm, false);