var Print = (function () {
    'use strict'
    var doc = window.document;

    function print(id) {
        this.id = id;
        this.html = doc.body.innerHTML;
        this.printHtml = doc.getElementById(id).innerHTML;
    };
    print.prototype.start = function () {
        doc.body.innerHTML = this.printHtml;
        window.print();
        doc.body.innerHTML = this.html;
    }
    return print;
}());
