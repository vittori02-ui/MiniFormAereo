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
    numBig=parseInt(numBig.value);
    if(numBig<=0) numBig=1;
    let extraTot=0;
    let extraText="";
    if(bag.checked) 
    {
        extraTot+=parseInt(bag.value);
        extraText+="Bagaglio extra 15€\n";
    }
    if(baby.checked) 
    {
        extraTot+=parseInt(baby.value);
        extraText+="Posto bambino 20€\n";
    }
    if(!bag.checked&&!baby.checked) 
    {
        extraText="NIENTE\n";
    }
    //let nuovaDiv=document.createElement("div");
    //box.style.width="200px";
    //box.style.height="50px";
    box.append("RIEPILOGO ORDINE"+"\n");
    box.append("Nome: "+nome+"\n");
    box.append("Cognome: "+cognome+"\n");
    box.append("Meta: "+metaNome+"\n");
    box.append("Numero biglietti: "+numBig+"\n");
    box.append("Data di andata: "+andata+"\n");
    box.append("Data di ritorno: "+rit+"\n");
    box.append("Servizi extra: "+"\n"+extraText+"\n");
    box.append("TOTALE: "+totale(extraTot)+"€");
}
function totale(extraTot)
{   
    let metaPrez=parseInt(meta.value);  
    return metaPrez*numBig+extraTot;
}
