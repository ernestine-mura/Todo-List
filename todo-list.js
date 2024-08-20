// creer un bouton de fermeture et l'attribuer a chacun des elements de liste
var mylist = document.getElementsByTagName("li");
var i;
for (i=0; i< mylist.length; i++){
    var span = document.createElement("SPAN");
    var btn = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(btn);
    mylist[i].appendChild(span);
}

// cliquer sur le bouton de fermeture pour effacer(cacher) un element de liste
var close = document.getElementsByClassName("close");
var i;
for(i = 0; i< close.length; i++){
    close[i].onclick = function() {
        var eff = this.parentElement;
        eff.style.display = "none";
    }                                                                                              
}

// ajouter un symbole de coché au moment où on clique sur un element de liste
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if (ev.target.tagName ==='LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

//creer un nouveau element de liste 
function addtach(){
    var li = document.createElement("li");
    var inputValue = document.getElementById("newtach").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if(inputValue === ""){
        alert("Vous devez ecrire quelque chose!");
    }else{
        inputValue = document.getElementById("list").appendChild(li);
    }
    document.getElementById("list").value = "";

// ajouter le bouton fermeture au elements de liste nouvellement crées
    var span = document.createElement("SPAN");
    var btn = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(btn);
    mylist[i].appendChild(span);

    for(i = 0; i< close.length; i++){
        close[i].onclick = function() {
            var eff = this.parentElement;
            eff.style.display = "none";
        }                                                                                              
    }   
}
