import { Component } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: `.app-servers`,
  selector: 'app-servers',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer = false;
  serverName = 'TestServer';
  serverCreationStatus = 'No server was created';
  serverCreated = false;
  servers = ['Server 1', 'server 2'];

  username = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
    this.serverCreated = true;
  }

  onUpdateServerName($event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
