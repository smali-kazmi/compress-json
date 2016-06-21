function compress(json)
{
  
  var final = {
    header: [],
    data: []
  };


  var len = json.length;

  if(len > 0) {

    for(var x = 0; x < len; x++) {

      if(final.header.length === 0) {
        final.header = getHeader(json[x]);
      }

      final.data.push(getValues(json[x]));
    }

  }

  return final;

}

function getHeader(obj) 
{
    return Object.keys(obj);
}


function getValues(obj) 
{
  var val = [];

  for(x in obj) {
    val.push(obj[x]);
  }

  return val;
}