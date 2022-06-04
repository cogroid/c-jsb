function __exec__(data) {
  var wordMod = 'function word(name) { return ConceptNode(name); }';
  eval(wordMod);
  var vwd = word('dream');
  log().info(vwd.toShortString());
}
