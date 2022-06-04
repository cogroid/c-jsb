function __exec__(data) {
	eval(use('word'));
	var vwd = word('dream');
	log().info(vwd.toShortString());
}

function use(modName) {
	var js = '';
	if (modName == 'word') {
		js = use_module('https://github.com/cogroid/c-jsb/raw/main/2022/06/04/003/word.js');
	}
	var njs = js.replace('__exec__(data)', '__mod__' + modName + '()') + '';
	return njs;
}

function use_module(url) {
	as().downloadFile(url, '/module_cache.js');
	return lang().newString(mnt().newFile('/module_cache.js').readFile(), 'UTF-8');
}
