var cantcharacters = 140 ;
$(document).ready(function() {
  // capturamos el texto que se ingrese en el text Area
  var textArea = $('#text-area');

  $(textArea).keyup(function(){
    var tweetLength = textArea.text().length;
    // console.log(tweetLength);

    if(tweetLength > 0 && tweetLength <= cantcharacters){
      $('button').removeAttr('disabled')
    } else {
      $('button').attr('disabled', 'disabled');
    } 
    
    var result = cantcharacters - tweetLength;
    $('#counter-characters').text(result);
    if (result < 20 && result > 10) {
      $('#counter-characters').attr('class', 'yellow');
    } else if (result < 10 && result > 0) {
      $('#counter-characters').attr('class', 'green');
    } else if (result < 0) {
      $('#counter-characters').attr('class', 'red');
    } else {
      $('#counter-characters').attr('class', 'blue');
    }
  });


  

  //Capturamos el boton
  $('button').click(function(){
    //console.log(textArea.text());
    var containerBig = $('<div>');
    var paragraph = $('<p>');
    var paragraphMessage = textArea.text(); 
    var tweets = $('#tweetContainer');
    var pagrafDate = $('<p>');
    var date = new Date();
    // Obtenemos la hora actual
    var hourTweet = date.getHours();
    var minutes = date.getMinutes();
    var amPm = 'am';
    // para crear el tweet
    paragraph.append(paragraphMessage);
    containerBig.append(paragraph);
    tweets.prepend(containerBig);
    textArea.text('');
    $('button').attr('disabled', 'disabled');
    // para validar la hora
    if (hourTweet > 12) {
      hourTweet = hourTweet - 12;
      amPm = 'pm';
    }

    var dateText = $(hourTweet + ':' + minutes + ' '+ amPm)
    pagrafDate.append(dateText);
    pagrafDate.attr('class', 'date');
    containerBig.append(paragraphMessage,pagrafDate);
    containerBig.attr('class', 'paragraph');
    $('#counter-characters').text(cantcharacters);
  });

});