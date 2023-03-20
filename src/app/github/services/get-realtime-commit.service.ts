import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io, Socket } from 'socket.io-client';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class GetRealtimeCommitService {
  private socket!: Socket;

  constructor() {}

  public connect(): void {
    this.socket = io(environment.BACKEND_URL);
  }

  public disconnect(): void {
    this.socket.disconnect();
  }

  public on(event: string): Observable<any> {
    return new Observable<any>((observer) => {
      this.socket.on(event, (data) => {
        observer.next(data);
      });
    });
  }
}
