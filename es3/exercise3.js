// punto B
function valida() {
   let dati = document.getElementsByTagName('form').form;
   let nome= dati.Nome.value;
   let cognome= dati.Cognome.value;
   let matricola= dati.Matricola.value;
   let email= dati.Email.value;
   let residenza= dati.Regione.value;
   let telefono= dati.Telefono.value;
   //console.log(dati.form.Cognome.value);
   let email_valid = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-]{2,})+.)+([a-zA-Z0-9]{2,})+$/;

   if(nome.length>0)
    console.log("nome: "+nome);
        else 
            alert("Inserire un nome valido");

    if(cognome.length>0 )
    console.log("cognome: "+cognome);
        else 
            alert("Inserire un cognome valido");

            if( email_valid.test(email) )
            console.log("email: "+email);
                else 
                    alert("Inserire un email valida");

                    if(residenza.length>0)
                    console.log("residenza: "+residenza);
                        else 
                            alert("Selezionare una residenza");

                            if(!isNaN(telefono))
                            console.log("telefono:" +telefono);
                                else 
                                    alert("Inserire un numero di telefono valido");

                                    if(!isNaN(matricola))
                                    console.log("matricola:" +matricola);
                                        else 
                                            alert("Inserire un numero di matricola valido");

                    if(nome.length>0 && cognome.length>0 && email_valid.test(email)  && !isNaN(matricola) &&
                         residenza.length>0 && !isNaN(telefono))
                        stampa(nome,cognome,email,matricola,residenza,telefono);

}



let stampa= (nom,cognom,email,matricol,residenz,telefon)=> {
    alert("I dati inseriti nel form sono:"+nom+" "+ cognom+" "+ email+"</p>"+ matricol+" "+ residenz+" "+ telefon);
}