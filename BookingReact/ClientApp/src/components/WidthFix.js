var win = window, doc = document, bod = doc.getElementsByTagName('body')[0];
function E(e) {
    return doc.getElementById(e);
}
function matchScreenWidth(element) {
    var w = win.innerWidth || bod.clientWidth || doc.documentElement.clientWidth;
    element.style.width = w + 'px';
}