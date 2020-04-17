import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../../services/websocket.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(private wsService: WebsocketService) { }

  ngOnInit() {
  }

  logout() {
    this.wsService.logoutWebSocket();
  }

}
