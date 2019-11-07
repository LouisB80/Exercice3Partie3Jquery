$(document).ready(function(){
  var randomnumber = 0;
  function generateRandomNumber()
  {
    var minNumber = 1; // le minimum
    var maxNumber = 100; // le maximum
    randomnumber = Math.floor(Math.random() * (maxNumber + 1) + minNumber);
    console.log(randomnumber);
  }
  generateRandomNumber();
  var cpt = 0;
  $('#test').on('click', function(){
    var testNumber = parseInt($('#numberSend').val());
    console.log(testNumber)
    if (testNumber < 0 || testNumber > 100 || isNaN(testNumber)) {
      alert('Merci de renseigner un nombre entre 1 et 100');
    }
    else if (testNumber < randomnumber) {
      alert('C\'est plus');
      cpt++;
    }
    else if (testNumber > randomnumber) {
      alert('C\'est moins')
      cpt++;
    }
    else {
      cpt++;
      alert('C\'est gagné en: ' + cpt + ' coups')
    }
  })
})
