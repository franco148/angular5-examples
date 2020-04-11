import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  socketStatus: boolean = false;

  constructor(private socket: Socket) { 
    this.checkStatus();
  }

  checkStatus() {
    this.socket.on('connect', () => {
      console.log('Connected to the server...');
      this.socketStatus = true;
    });

    this.socket.on('disconnect', () => {
      console.log('Disconnected to the server...');
      this.socketStatus = false;
    });
  }

  emit(event: string, payload?: any, callback?: Function) {
    // emit(EVENTO, payload, callback)
    this.socket.emit(event, payload, callback);
  }
}
