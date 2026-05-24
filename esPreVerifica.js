let nome,cognome,meta,numBig,andata,rit,bag,baby,box;
function scelta() {
    nome=document.getElementById("fname").value;
    cognome=document.getElementById("sname").value;
    meta=document.querySelector('input[name="meta"]:checked');//prezzo
    metaNome=document.querySelector('label[for="' + meta.id + '"]').textContent;
    numBig=document.getElementById("num");
    andata=document.getElementById("ora").value;
    rit=document.getElementById("oraRit").value;
    bag=document.getElementById("bag");
    baby=document.getElementById("baby");
    box=document.getElementById("box");
    box.innerHTML="";
    if(nome==="") nome="Mario";
    if(cognome==="") cognome="Rossi";
    if(meta===null) 
    {
        alert("Scegli una meta!!!");
        return;
    }
}