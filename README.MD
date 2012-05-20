# gbk-dict


a gbk to utf8 dictionary and tool for converting gbk buffer to utf-8 string


## Installing with [npm](http://npmjs.org/)

	npm install iconv

## Usage

```
var dict = require('gbk-dict').init();

dict.gbkToUTF8(buf);

## Example usage:

var dict = require('gbk-dict').init();
var fs = require('fs');

fs.readFile('./gbk-test.txt', function (err, data) {
	if(err) throw err;
    console.log(dict.gbkToUTF8(data));
});