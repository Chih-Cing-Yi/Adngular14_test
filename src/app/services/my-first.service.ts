import { Injectable } from '@angular/core';

@Injectable()
export class MyFirstService {
  //messages陣列
  messages: Array<any> = [];

  constructor() {
    this.init();
  }

  //初始化
  init(): void {
    this.insert({
      name: 'Simon',
      email: 'a123456789@gmail.com',
      message: 'Hello World',
    });
    this.insert({
      name: 'Simon2',
      email: 'B123456789@gmail.com',
      message: 'Hello World2',
    });
  }

  //寫入陣列
  insert(message: { name: string; email: string; message: string }): void {
    this.messages.push(message);
  }
  //取的messages
  getAllMessages(): any[] {
    return this.messages;
  }
  //刪除其中一筆message
  deleteMessage(index: number): void {
    this.messages.splice(index, 1);
  }
}
