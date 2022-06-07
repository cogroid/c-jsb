function __exec__(data) {
	as().downloadFile('https://github.com/cogroid/c-jsb/raw/main/2022/06/07/001/OrderedLink.js', '/OrderedLink.js');
	execJSB('/OrderedLink.js', data.input());  

	as().downloadFile('https://github.com/cogroid/c-jsb/raw/main/2022/06/07/001/OrderedLink-2.js', '/OrderedLink-2.js');
	execJSB('/OrderedLink-2.js', data.input());  
	
	as().downloadFile('https://github.com/cogroid/c-jsb/raw/main/2022/06/07/001/OrderedLink.scm', '/OrderedLink.scm');
	execSCM('/OrderedLink.scm', data.input());  
}

function execSCM(scmFile, inputMap) {
	as().scheme2js(scmFile, scmFile + '.js');
	execJSB(scmFile + '.js', inputMap);	
}

function execJSB(jsFile, inputMap) {
	log().info('===== ' + jsFile + ' =====');
	var outputMap = mch().exec(jsFile, 60000, inputMap);
	log().info('Result: ' + tool().toJson(outputMap));
}
