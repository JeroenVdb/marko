var template = require("marko/html").c(__filename);

module.exports = template;

var marko_helpers = require("marko/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    test_import_var_tag = marko_loadTag(require("./tags/test-import-var/renderer"));

function render(data, out) {
  test_import_var_tag({
      name: "World",
      foo: data.foo,
      bar: data.bar,
      renderBody: function renderBody(out) {
        out.w("This is the body content");
      }
    }, out);
}

template._ = render;
