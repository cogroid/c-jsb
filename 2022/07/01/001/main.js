function __exec__(data) {
	as().downloadFile('https://github.com/cogroid/c-jsb/raw/main/2022/07/01/001/hello.js', '/hello.js');
	var op = execJSB('/hello.js', data.input());  
    data.output(op);
}

function execJSB(jsFile, inputMap) {
	log().info('===== ' + jsFile + ' =====');
	var outputMap = mch().exec(jsFile, 60000, inputMap);
	log().info('Result: ' + tool().toJson(outputMap));
    return outputMap;
}

/* ----- Input -----
{
  "name": "John"
}
----- Input ----- */
