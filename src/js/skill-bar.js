(function () {
    var eclass = 'progress-bar';
    var doc = document;

    function SkillBar() {
        this.eles = doc.getElementsByClassName(eclass);
    }
    SkillBar.prototype.fill = function (e) {
        var eStyle = window.getComputedStyle(e, null);
        var fgColor = eStyle.getPropertyValue("color");
        var radius = eStyle.getPropertyValue("border-radius");
        var maxW = eStyle.getPropertyValue("width"); //技能条框长度
        var value = e.getAttribute('data-skillVal');
        var barW = parseInt(value) / 100 * parseInt(maxW); //技能条长度
        var bar = doc.createElement('div');
        var barStyle = bar.style;
        barStyle.backgroundColor = fgColor;
        barStyle.borderRadius = '0 ' + radius + ' ' + radius + ' 0';
        barStyle.width = barW + 'px';
        barStyle.height = '100%';
        e.appendChild(bar);
    }
    SkillBar.prototype.generate = function () {
        var len = this.eles.length;
        var fill = this.fill;
        for (var i = 0; i < len; i++) {
            fill(this.eles[i]);
        }
    }
    new SkillBar().generate();
}())
