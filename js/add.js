function validate(pKey, prKey){
  var stgA = pKey + prKey
  var stgB = stgA * stgA
  var stgC = stgB++
  if(stgC == prKey){
    return true;
  } else {
    return false;
  }
}

function add(name, region, leader, key, key2, members, allies, enemy, neutral){
  var key = validate(key, getkey(key2));
}
