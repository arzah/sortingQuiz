var validFlag = false;
var help = 0;
var idk = 0;
var what = 0;



function setupForm() {
    document.info.fname.addEventListener("focus",fnameFocus, false);
    document.info.fname.addEventListener("blur",fnameBlur, false);
    document.info.lname.addEventListener("focus",lnameFocus, false);
    document.info.lname.addEventListener("blur",lnameBlur, false);
    document.info.email.addEventListener("focus",emailFocus, false);
    document.info.email.addEventListener("blur",emailBlur, false);
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

}


function answers() {
  event.preventDefault();

    var Gryffindor = 0;
    var Ravenclaw = 0;
    var Hufflepuf = 0;
    var Slytherin = 0;
    var answerbox = document.getElementById('answer');
    //var Peggy = document.getElementById('results');


    
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


    
    if (total == 9) {
  

    var maxscore = Math.max(Gryffindor, Ravenclaw, Hufflepuf, Slytherin);
    
    
    if (Gryffindor == maxscore) {
    var g = document.createTextNode("YOU ARE A GRYFFINDOR");   
    answerbox.appendChild(g);
    var x = document.createElement("IMG");

    var p = document.createElement("FIGCAPTION");
    var q = document.createTextNode("Congratulations!");
    p.appendChild(q);  
    answer.appendChild(p); 

    x.setAttribute("src", "https://github.com/arzah/imageHosting/blob/master/gryffindor.jpg?raw=true");
    x.setAttribute("width", "304");
    x.setAttribute("height", "228");
    x.setAttribute("alt", "Gryffindor");
    answerbox.appendChild(x);
 
    }
        
        
    if (Ravenclaw == maxscore && Ravenclaw > Hufflepuf && Ravenclaw > Slytherin && Ravenclaw > Gryffindor) { 
    var r = document.createTextNode("YOU ARE A RAVENCLAW");
    answerbox.appendChild(r);
    var y = document.createElement("IMG");

    var n = document.createElement("FIGCAPTION");
    var o = document.createTextNode("Congratulations!");
    n.appendChild(o);  
    answer.appendChild(n);

    y.setAttribute("src", "https://github.com/arzah/imageHosting/blob/master/ravenclaw.png?raw=true");
    y.setAttribute("width", "304");
    y.setAttribute("height", "228");
    y.setAttribute("alt", "Ravenclaw");
    answerbox.appendChild(y);
    }
        
        
    if (Hufflepuf == maxscore && Hufflepuf > Ravenclaw && Hufflepuf > Slytherin && Hufflepuf > Gryffindor) { 
    var h = document.createTextNode("YOU ARE A HUFFLEPUF");
    answerbox.appendChild(h);
    var z = document.createElement("IMG");

    var l = document.createElement("FIGCAPTION");
    var m = document.createTextNode("Congratulations!");
    l.appendChild(m);  
    answer.appendChild(l);

    z.setAttribute("src", "https://github.com/arzah/imageHosting/blob/master/hufflepuff.jpg?raw=true");
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
      var t = document.createTextNode("Congratulations!");
      x.appendChild(t);  
      answer.appendChild(x);


    a.setAttribute("src", "https://github.com/arzah/imageHosting/blob/master/slytherin.png?raw=true");
    a.setAttribute("width", "304");
    a.setAttribute("height", "228");
    a.setAttribute("alt", "Slytherin");
    answer.appendChild(a);

    }
        
        
    if (Ravenclaw > maxscore && Ravenclaw == Gryffindor || Ravenclaw == Hufflepuf || Ravenclaw == Slytherin) { 
    var r = document.createTextNode("You have attributes of two houses");
    answerbox.appendChild(r);
        
        if (Ravenclaw == Hufflepuf) {
                var y = document.createElement("IMG");
    var yTwo = document.createElement("IMG");

    var n = document.createElement("FIGCAPTION");
    var o = document.createTextNode("Congratulations!");
    n.appendChild(o);  
    answer.appendChild(n);

    yTwo.setAttribute("src", "https://github.com/arzah/imageHosting/blob/master/hufflepuff.jpg?raw=true");
    yTwo.setAttribute("width", "304");
    yTwo.setAttribute("height", "228");
    yTwo.setAttribute("alt", "Ravenclaw");
    answerbox.appendChild(yTwo);
        
    y.setAttribute("src", "https://github.com/arzah/imageHosting/blob/master/ravenclaw.png?raw=true");
    y.setAttribute("width", "304");
    y.setAttribute("height", "228");
    y.setAttribute("alt", "Ravenclaw");
    answerbox.appendChild(y);
        }
        if (Ravenclaw == Slytherin) {
                var y = document.createElement("IMG");
    var yTwo = document.createElement("IMG");

    var n = document.createElement("FIGCAPTION");
    var o = document.createTextNode("Congratulations!");
    n.appendChild(o);  
    answer.appendChild(n);

    yTwo.setAttribute("src", "https://github.com/arzah/imageHosting/blob/master/slytherin.png?raw=true");
    yTwo.setAttribute("width", "304");
    yTwo.setAttribute("height", "228");
    yTwo.setAttribute("alt", "Ravenclaw");
    answerbox.appendChild(yTwo);
        
    y.setAttribute("src", "https://github.com/arzah/imageHosting/blob/master/ravenclaw.png?raw=true");
    y.setAttribute("width", "304");
    y.setAttribute("height", "228");
    y.setAttribute("alt", "Ravenclaw");
    answerbox.appendChild(y);
        }
        if (Ravenclaw == Gryffindor) {
                var y = document.createElement("IMG");
    var yTwo = document.createElement("IMG");

    var n = document.createElement("FIGCAPTION");
    var o = document.createTextNode("Congratulations!");
    n.appendChild(o);  
    answer.appendChild(n);

    yTwo.setAttribute("src", "https://github.com/arzah/imageHosting/blob/master/gryffindor.jpg?raw=true");
    yTwo.setAttribute("width", "304");
    yTwo.setAttribute("height", "228");
    yTwo.setAttribute("alt", "Ravenclaw");
    answerbox.appendChild(yTwo);
        
    y.setAttribute("src", "https://github.com/arzah/imageHosting/blob/master/ravenclaw.png?raw=true");
    y.setAttribute("width", "304");
    y.setAttribute("height", "228");
    y.setAttribute("alt", "Ravenclaw");
    answerbox.appendChild(y);
        }
        
    }
    
    if (Gryffindor > maxscore && Gryffindor == Hufflepuf || Gryffindor == Ravenclaw || Gryffindor == Slytherin) { 
    var r = document.createTextNode("You have attributes of two houses");
    answerbox.appendChild(r);
    var y = document.createElement("IMG");
    var yTwo = document.createElement("IMG");

    var n = document.createElement("FIGCAPTION");
    var o = document.createTextNode("Congratulations!");
    n.appendChild(o);  
    answer.appendChild(n);

    yTwo.setAttribute("src", "https://github.com/arzah/imageHosting/blob/master/hufflepuff.jpg?raw=true");
    yTwo.setAttribute("width", "304");
    yTwo.setAttribute("height", "228");
    yTwo.setAttribute("alt", "Ravenclaw");
    answerbox.appendChild(yTwo);
        
    y.setAttribute("src", "https://github.com/arzah/imageHosting/blob/master/ravenclaw.png?raw=true");
    y.setAttribute("width", "304");
    y.setAttribute("height", "228");
    y.setAttribute("alt", "Ravenclaw");
    answerbox.appendChild(y);
    }
      }else{
        var one = document.getElementById('answer');
        var two = document.createTextNode('You did not fill everything. Refresh and do it again.');
        one.appendChild(two);
        
    }
  
   
}

window.addEventListener("load", setupForm, false);