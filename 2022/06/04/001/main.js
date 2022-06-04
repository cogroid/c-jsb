function __exec__(data) {
	as().downloadFile('https://github.com/cogroid/c-jsb/raw/main/2022/06/04/001/ConceptNode.scm', '/ConceptNode.scm');
	execSCM('/ConceptNode.scm', data.input());  
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
