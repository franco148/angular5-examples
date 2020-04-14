import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private wsService: WebsocketService) { }

  public sendMessage(message: string) {
    const payload = {
      from: this.wsService.getUser().name,
      body: message
    }

    this.wsService.emit('message', payload);
  }

  public getMessage() {
    return this.wsService.listen('new-message');
  }

  public getPrivateMessages() {
    return this.wsService.listen('private-message');
  }
}
