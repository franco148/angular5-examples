import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {

  text = '';
  messageSubscription: Subscription;
  element: HTMLElement;

  messages: any[] = [];

  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.element = document.getElementById('chat-messages');

    this.messageSubscription = this.chatService.getMessage().subscribe(msg => {
      console.log(msg, ' from server!!!');
      this.messages.push(msg);
      setTimeout(() => {
        this.element.scrollTop = this.element.scrollHeight;
      }, 50);
    });
  }

  send() {

    if (this.text.trim().length === 0) {
      return;
    }

    console.log(this.text);
    this.chatService.sendMessage(this.text);
    this.text = '';
  }

  ngOnDestroy() {
    if (this.messageSubscription) {
      this.messageSubscription.unsubscribe();
    }
  }
}
