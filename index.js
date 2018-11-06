function theBeatlesPlay(musicians, instruments){
  var response = []
  for (var i = 0; i < musicians.length; i++) {
    response[i] = musicians[i] + " plays " + instruments[i]
  }
  return response
}

function johnLennonFacts(facts){
  var i = 0;
  var response = [];
  while (i < facts.length){
    response.push(facts[i] + "!!!");
    i++;
  }
  return response
}

function iLoveTheBeatles(int){
  var response = [];
  if (int < 15){
    int++
  }
  do {
    response.push("I love the beatles!")
    int--
  } while (int > 0)
  return response
}