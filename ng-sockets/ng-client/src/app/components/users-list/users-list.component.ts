import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  activeUsersObs: Observable<any>;

  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.activeUsersObs = this.chatService.getActiveUsers();

    // Emit when new users registers to the chat
    this.chatService.emitUserRegistration();
  }

}
