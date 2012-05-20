gbk-dict
==================

a gbk to utf8 dictionary and tool for converting gbk buffer to utf-8 string

http://saighost.github.com/node-gbk-dict

Installing with npm
---------------
	npm install gbk-dict

Usage
---------------
```
var dict = require('gbk-dict').init();

dict.gbkToUTF8(buf);
```

Example usage:
---------------
```
var dict = require('gbk-dict').init();
var fs = require('fs');

fs.readFile('./gbk-test.txt', function (err, data) {
	if(err) throw err;
    console.log(dict.gbkToUTF8(data));
});
```