function __exec__(data) {
  var name = data.input().get('name');
  log().info('Hello ' + name);
  var op = util().newHashMap();
  op.put('hello', name);
  data.output(op);
}

/* ----- Input -----
{
  "name": "John"
}
----- Input ----- */
