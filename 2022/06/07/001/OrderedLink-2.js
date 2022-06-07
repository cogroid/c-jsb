function __exec__(data) {
	var vas = as().newAtomSpace();
	var vca = as().newConceptNode(vas, "dream");
	var vcb = as().newConceptNode(vas, "american");
    var vos = util().newArrayList();
    vos.add(vca);
    vos.add(vcb);
    var pv = as().newOrderedLink(vas, vos);
    log().info(pv.toShortString());
}
