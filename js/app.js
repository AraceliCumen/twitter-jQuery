$(document).ready(function() {
  // capturamos el texto que se ingrese en el text Area
  var textArea = $('#text-area');

  $(textArea).keyup(function(){
    var tweetLength = textArea.text().length;
    console.log(tweetLength);
    if(tweetLength > 0 && tweetLength <= 140){
      $('button').removeAttr('disabled')
    } else {
      $('button').attr('disabled', 'disabled');
    }
    
  });
  

  //Capturamos el boton
  $('button').click(function(){
    //console.log(textArea.text());
    var containerBig = $('<div>');
    var paragraph = $('<p>');
    var paragraphMessage = textArea.text(); 
    var tweets = $('#tweetContainer');
    paragraph.append(paragraphMessage);
    containerBig.append(paragraph);
    tweets.prepend(containerBig);
    textArea.text('');
  });

});