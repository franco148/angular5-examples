import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  socketStatus: boolean = false;
  user: UserModel;

  constructor(private socket: Socket) { 
    this.recoverUser();
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

  listen(event: string) {
    return this.socket.fromEvent(event);
  }

  loginWebSocket(name: string) {

    return new Promise((resolve, reject) => {
      
      this.emit('configure-user', { name }, response => {
        console.log(response);
        this.user = new UserModel(name);
        this.storeUser();
        resolve();
      });
    });
  }

  storeUser() {
    localStorage.setItem('user', JSON.stringify(this.user));
  }

  recoverUser() {
    if (localStorage.getItem('user')) {
      this.user = JSON.parse(localStorage.getItem('user'));
    }
  }
}
