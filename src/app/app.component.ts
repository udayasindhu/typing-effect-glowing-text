import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  typingText: string = 'TYPE WRITING EFFECT USING PURE JAVASCRIPT';
  count = 0;

  ngOnInit() {
    this.startTyping();
  }

  startTyping() {
    let typerText = document.getElementById('typer');
    setTimeout(() => {
      typerText.innerHTML += this.typingText.charAt(this.count);
      this.count++;
      if (this.count < this.typingText.length) {
        this.startTyping();
      }
    }, 100);
  }
}
