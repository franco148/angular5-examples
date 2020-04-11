import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private wsService: WebsocketService) { }

  sendMessage(message: string) {
    const payload = {
      from: 'Franco Arratia',
      body: message
    }

    this.wsService.emit('message', payload);
  }
}
