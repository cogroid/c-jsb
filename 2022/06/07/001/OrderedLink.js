function __exec__(data) {
	var vas = as().newAtomSpace();
    var vna = as().newConceptNode(vas, "dream");
    var vnb = as().newConceptNode(vas, "american");
    var pv = as().newOrderedLink(vas, vna, vnb);
    var l = "isAtom: " + pv.isAtom();
    writeLog(l);
    l = "isNode: " + pv.isNode();
    writeLog(l);
    l = "isLink: " + pv.isLink();
    writeLog(l);
    l = "getName: " + pv.getName();
    writeLog(l);
    l = "getArity: " + pv.getArity();
    writeLog(l);
    l = "toString: " + pv.toString();
    writeLog(l);
    l = "toShortString: " + pv.toShortString();
    writeLog(l);
    pv.dispose();
    l = "disposed: " + pv.disposed();
    writeLog(l);
}

function writeLog(l) {
	log().info(l); 
}
