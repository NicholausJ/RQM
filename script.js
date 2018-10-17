//JS by Nick Jarmakovitz

var displayQuote;
var currentIndex;
//var index;
//var buzzQuote;

$(document).ready(function() {
  var index;
  var buzzQuote;
  updateQuote();
  $("#newQuote").on("click", function(){
    updateQuote();
  });
  
  /*$("#tweetOut").on("click", function(){
    window.open("https://twitter.com/intent/tweet?text="+buzzQuote);
  });*/
 
  $("#tweetOut").click(tweetQuote);
  
  //$("#newQuote").click(updateQuote);

});

function updateQuote(){
  do{
    index = Math.floor(Math.random() * quotes.length);
    //var buzzQuote = quotes[index].quote;
  }while(currentIndex === index);
  displayQuote = quotes[index];
  //confirm("Dude, I rock");
  currentIndex = index; 
  $('#quote').html(quotes[index].quote);
  $('#author').html(quotes[index].author);
}

function tweetQuote(){
  var buzzQuote = quotes[currentIndex].quote;
  var buzzAuthor = quotes[currentIndex].author;
  if(buzzQuote.length > 115){
    buzzQuote = buzzQuote.substr(0,115).match(/(^.+)\s/)[1] + "...";
  }
  
  buzzQuote = encodeURIComponent("\"" + buzzQuote + "\"\n" + "-");
  window.open("https://twitter.com/intent/tweet?text=" + buzzQuote + buzzAuthor);
  
}


var quotes = [{quote:"Strive not to be a success, but rather to be of value.", author:"Albert Einstein"},{quote:"Life is what happens to you while you’re busy making other plans.", author:"John Lennon"},{quote:"We become what we think about.", author:"Earl Nightingale"},{quote:"The mind is everything. What you think you become.", author:"Buddha"},{quote:"An unexamined life is not worth living.", author:"Socrates"},{quote:"Your time is limited, so don’t waste it living someone else’s life.", author:"Steve Jobs"},{quote:"You can never cross the ocean until you have the courage to lose sight of the shore.", author:"Christopher Columbus"},{quote:"The only person you are destined to become is the person you decide to be.", author:"Ralph Waldo Emerson"},{quote:"Go confidently in the direction of your dreams.  Live the life you have imagined.", author:"Henry David Thoreau"},{quote:"Start where you are. Use what you have.  Do what you can.", author:"Arthur Ashe"},{quote:"Believe you can and you’re halfway there.", author:"Theodore Roosevelt"},{quote:"Fall seven times and stand up eight.", author:"Japanese Proverb"},{quote:"Everything has beauty, but not everyone can see.", author:"Confucius"},{quote:"Life is not measured by the number of breaths we take, but by the moments that take our breath away.", author:"Maya Angelou"},{quote:"Happiness is not something readymade.  It comes from your own actions.", author:"Dalai Lama"},{quote:"If you want to lift yourself up, lift up someone else.", author:"Booker T. Washington"},{quote:"I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do.", author:"Leonardo da Vinci"},{quote:"I have not failed. I've just found 10,000 ways that won't work.", author:"Thomas Edison"},{quote:"A person who never made a mistake never tried anything new.", author:"Albert Einstein"},{quote:"I would rather die of passion than of boredom.", author:"Vincent van Gogh"},{quote:"It does not matter how slowly you go as long as you do not stop.", author:"Confucius"},{quote:"Remember that not getting what you want is sometimes a wonderful stroke of luck.", author:"Dalai Lama"},{quote:"Our lives begin to end the day we become silent about things that matter.", auhtor:"Martin Luther King Jr."},{quote:"The question isn’t who is going to let me; it’s who is going to stop me.", author:"Ayn Rand"},{quote:"When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.", author:"Henry Ford"},{quote:"It’s not the years in your life that count. It’s the life in your years.", author:"Abraham Lincoln"},{quote:"Either write something worth reading or do something worth writing.", author:"Benjamin Franklin"},{quote:" Nothing is impossible, the word itself says, “I’m possible!”", author:"Audrey Hepburn"},{quote:"If you can dream it, you can achieve it.", author:"Zig Ziglar"},{quote:"Two roads diverged in a wood, and I took the one less traveled by, And that has made all the difference.", author:"Robert Frost"},{quote:"I attribute my success to this: I never gave or took any excuse.", author:"Florence Nightingale"},{quote:"The most difficult thing is the decision to act, the rest is merely tenacity.", author:"Amelia Earhart"},{quote:"The most common way people give up their power is by thinking they don’t have any.", author:"Alice Walker"},{quote:"The mind is everything. What you think you become.", author:"Buddha"},{quote:"Always remember that you are absolutely unique. Just like everyone else.", author:"Margaret Mead"},{quoye:"Our virtues and our failings are inseparable, like force and matter. When they separate, man is no more.", author:"Nikola Tesla"}];
