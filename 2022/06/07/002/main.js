function __exec__(data) {
	if (mch().hasFunc('hasFunc')) {
		log().info('There is hasFunc() function!'); 
    }
	if (!mch().hasFunc('hasNotFunc')) {
		log().info('There is not hasNotFunc() function!'); 
    }  
}

function hasFunc() {
	log().info('In hasFunc() function ...');
}
