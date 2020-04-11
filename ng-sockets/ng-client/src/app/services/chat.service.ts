import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private wsService: WebsocketService) { }

  public sendMessage(message: string) {
    const payload = {
      from: 'Franco Arratia',
      body: message
    }

    this.wsService.emit('message', payload);
  }

  public getMessage() {
    return this.wsService.listen('new-message');
  }
}
