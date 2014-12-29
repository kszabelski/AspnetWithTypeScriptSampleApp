class Clock {
    element: HTMLElement;
    span: HTMLElement;
    stopButton: HTMLElement;
    timerToken: number;

    constructor(element: HTMLElement) {
        this.element = element;
        this.element.innerHTML += "The time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.stopButton = document.createElement("button");
        this.stopButton.textContent = "Stop";
        this.stopButton.onclick = () => clearTimeout(this.timerToken);
        this.element.appendChild(this.stopButton);
        this.span.innerText = new Date().toUTCString();
    }

    start() {
        this.timerToken = setInterval(() => this.span.innerHTML = new Date().toUTCString(), 500);
    }
}

window.onload = () => {
    var el = document.getElementById('content');
    var greeter = new Clock(el);
    greeter.start();
};