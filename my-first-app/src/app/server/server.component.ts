
import {Component} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {

  serverName = 'WinOSX';
  isStarted = true;

  isServerStarted() {
    return this.isStarted;
  }
}
