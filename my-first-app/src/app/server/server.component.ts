
import {Component} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {

  serverName = 'WinOSX';
  isStarted = true;
  serverStatus = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  isServerStarted() {
    return this.isStarted;
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
