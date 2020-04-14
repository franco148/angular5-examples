import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { WebsocketService } from '../../services/websocket.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  name = '';

  constructor(private wsService: WebsocketService,
              private router: Router) { }

  ngOnInit() {
  }

  loginSubmit() {
    console.log(this.name);
    this.wsService.loginWebSocket(this.name).then(() => {
      this.router.navigateByUrl('/messages');
    });
  }

}
