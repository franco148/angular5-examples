import { Component, OnInit } from '@angular/core';

/*selector: 'app-server', --> with this notation in the html, this has to be used like: <app-servers></app-servers> -
                              This is the most common syntax*/
/*selector: '[app-servers]', --> with this notation in the html, this has to be used like: <div app-servers></div>*/
/*selector: '.app-servers', --> with this notation in the html, this has to be used like: <div class="app-servers"></div>*/

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName= 'Default Name';
  serverCreated = false;
  servers = ['WinOSX Server', 'WinUX Server'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 5000);
  }

  ngOnInit() {
  }

  onServerCreation() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created successfully...';
  }

  /*onUpdateServerName(event: any) {
    console.log(event);
  }*/
  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
