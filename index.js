function theBeatlesPlay(musicians, instruments){
  var response = []
  for (var i = 0; i < musicians.length; i++) {
    response[i] = musicians[i] + " plays " + instruments[i]
  }
  return response
}

function johnLennonFacts(facts){
  var i = 0;
  while (i < facts.length){
    facts[i] = facts[i] + "!!!";
    i++;
  }
  return facts
}

function iLoveTheBeatles(int){
  var response = [];
  do {
    response.push("I love the beatles!")
    int--
  } while (int > 0)
  return response
}