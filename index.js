var fs = require('fs');

(function () {

  var dict = {};
  
  var map = {};

  module.exports = dict;
  
  dict.gbkToUTF8 = function (buf) {
    var arr = [];
    var length = buf.length;
    var next = 0;

    while(next<length){
      var high = buf[next];

      if( high < compatibleASCII){
        arr.push(String.fromCharCode(high));
        next++;
      }else{
        var code = buf.toString('hex',next, next+2);
        arr.push(map[code.toLowerCase()]);
        next=next+2;
      }
    }
    return arr.join('');
  }

  //00–7F in GBK are same to ASCII 
  var compatibleASCII = parseInt('7F',16);
  
  //initialize
  dict.init = function () {

    var data = fs.readFileSync(__dirname+'/GBK.txt', 'utf8');

    var index = {};
    var nextline = 0;
    var lines = data.split('\n');

    var indexChars = lines[2].split(' ');
    indexChars.shift();  

    var prefix = '';
    while(nextline<lines.length){
      var line = lines[nextline];
      nextline++;  

      if(line.length<2||line.charAt(0)==' '){
        continue;
      }else if(line.charAt(1)!=' '){
        prefix = line.substring(0,2);
      }else{
        var arr = line.split(' ');
        var high = indexChars.indexOf(arr.shift()).toString(16);
        for (var i = 0; i < arr.length; i++) {
          var low = i.toString(16);
          var code = prefix + high + low;
          //console.log('code: %s value: %s', code.toLowerCase(),arr[i]);
          map[code.toLowerCase()] = arr[i];
        };
      }
    }
    return this;
  }

})();