import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<markdown ngPreserveWhitespaces>
# Demo

![ロゴ](/assets/logo.png)

## Some centered text
    
##### The last paragraph.
  </markdown>
    
  `,
  styles: []
})
export class AppComponent {
}
