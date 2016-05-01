(function (doc, cssText) {
    var styleEl = doc.createElement("style");
    doc.getElementsByTagName("head")[0].appendChild(styleEl);
    if (styleEl.styleSheet) {
        if (!styleEl.styleSheet.disabled) {
            styleEl.styleSheet.cssText = cssText;
        }
    } else {
        try {
            styleEl.innerHTML = cssText;
        } catch (ignore) {
            styleEl.innerText = cssText;
        }
    }
}(document, "\n" +
"\n" +
".item-block {\n" +
"    padding: 3px !important;\n" +
"}\n" +
"\n" +
".row-wrap {\n" +
"    flex-wrap: wrap;\n" +
"    align-items: center;\n" +
"    justify-content: center;\n" +
"}\n" +
"\n" +
".col-center {\n" +
"    text-align: center;\n" +
"}\n" +
"\n" +
".col-relative {\n" +
"    position: relative;\n" +
"}\n" +
"\n" +
".toggle.pull-right {\n" +
"    margin-left: auto;\n" +
"    margin-right: 8px;\n" +
"}\n" +
".item-date-picker .button-circle {\n" +
"    border-radius: 30px !important;\n" +
"    border: 1px solid;\n" +
"    width: 60px;\n" +
"    height: 60px;\n" +
"    margin: 6px 0 !important;\n" +
"}\n" +
"\n" +
".item-date-picker .button-date-picked {\n" +
"    position: relative;\n" +
"}\n" +
"\n" +
".item-date-picker .button-date-picked .date-picked {\n" +
"    position: absolute;\n" +
"    left: 0;\n" +
"    right: 0;\n" +
"    top: 0;\n" +
"    bottom: 0;\n" +
"}\n" +
"\n" +
".item-date-picker .button-date-picked .date-picked::before {\n" +
"    content: attr(data-date);\n" +
"    position: absolute;\n" +
"    top: 0px;\n" +
"    left: 0;\n" +
"    right: 0;\n" +
"    font-size: 1.5em;\n" +
"    line-height: 1.5em;\n" +
"    vertical-align: bottom;\n" +
"}\n" +
"\n" +
".item-date-picker .button-date-picked .date-picked::after {\n" +
"    content: attr(data-time);\n" +
"    position: absolute;\n" +
"    bottom: -5px;\n" +
"    left: 0;\n" +
"    right: 0\n" +
"}\n" +
"\n" +
".item-date-picker .button-close {\n" +
"    position: absolute !important;\n" +
"    display: block;\n" +
"    right: -5px;\n" +
"    top: -5px;\n" +
"}"));
