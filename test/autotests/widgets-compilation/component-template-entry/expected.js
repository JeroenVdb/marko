var template = require("marko/html").c(__filename);

var component = require("./component");

var marko_widgets = require("marko/widgets/index");

module.exports = marko_widgets.c(component, template);

var marko_registerWidget = marko_widgets.registerWidget,
    marko_widgetType = marko_registerWidget("/marko-test$1.0.0/autotests/widgets-compilation/component-template-entry/component", function() {
      return module.exports;
    }),
    marko_widgetAttrs = marko_widgets.attrs,
    marko_helpers = require("marko/runtime/html/helpers"),
    marko_attr = marko_helpers.a,
    marko_attrs = marko_helpers.as,
    marko_loadTag = marko_helpers.t,
    w_widget_tag = marko_loadTag(require("marko/widgets/taglib/widget-tag"));

function render(data, out) {
  w_widget_tag({
      type: marko_widgetType,
      _cfg: data.widgetConfig,
      _state: data.widgetState,
      _props: data.widgetProps,
      _body: data.widgetBody,
      renderBody: function renderBody(out, widget, state) {
        out.w("<div" +
          marko_attr("id", widget.id) +
          marko_attrs(marko_widgetAttrs(widget)) +
          "></div>");
      }
    }, out);
}

template._ = render;
