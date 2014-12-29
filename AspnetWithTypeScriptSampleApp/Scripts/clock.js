var Clock = (function () {
    function Clock(element) {
        var _this = this;
        this.element = element;
        this.element.innerHTML += "The time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.stopButton = document.createElement("button");
        this.stopButton.textContent = "Stop";
        this.stopButton.onclick = function () {
            return clearTimeout(_this.timerToken);
        };
        this.element.appendChild(this.stopButton);
        this.span.innerText = new Date().toUTCString();
    }
    Clock.prototype.start = function () {
        var _this = this;
        this.timerToken = setInterval(function () {
            return _this.span.innerHTML = new Date().toUTCString();
        }, 500);
    };
    return Clock;
})();

window.onload = function () {
    var el = document.getElementById('content');
    var greeter = new Clock(el);
    greeter.start();
};
//# sourceMappingURL=clock.js.map
