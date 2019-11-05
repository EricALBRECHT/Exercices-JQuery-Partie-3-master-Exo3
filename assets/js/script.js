var nombreSecret = getNumber();
i=0;
$('.button').click(function (){
   var saisie = $("#nombre").val();
   i++;
   console.log(nombreSecret);
    if (saisie == nombreSecret){
        $('#indication').text(`Correct: Le chiffre secret est bien ${nombreSecret}. Nombre trouvé en ${i} essais.`);
    }
    else if (saisie < nombreSecret){
        $('#indication').text(`Plus grand`);
    }
    else if (saisie > nombreSecret) {
        $('#indication').text(`Plus petit`);
    }
    else{
        $('#indication').text(`On a demandé un chiffre entre 0 et 100 !`);
    }

});

function getNumber() {
    var minNumber = 1; // le minimum
    var maxNumber = 100; // le maximum
    var randomnumber = Math.floor(Math.random() * (maxNumber + 1) + minNumber); // la fonction magique
    return  randomnumber;
}   