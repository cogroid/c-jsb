function __exec__(data) {
	eval(use('word'));
	eval(use('variable'));
  
	var vwd = word('dream');
	log().info(vwd.toShortString());
	var vvr = variable('money');
	log().info(vvr.toShortString());
}

function use(modName) {
	var js = '';
	if (modName == 'word') {
		js = use_module('https://github.com/cogroid/c-jsb/raw/main/2022/06/04/003/word.js');
	}
	if (modName == 'variable') {
		js = use_module('https://github.com/cogroid/c-jsb/raw/main/2022/06/04/003/variable.js');
	}
	var njs = js.replace('__exec__(data)', '__mod__' + modName + '()') + '';
	return njs;
}

function use_module(url) {
	as().downloadFile(url, '/module_cache.js');
	return lang().newString(mnt().newFile('/module_cache.js').readFile(), 'UTF-8');
}
