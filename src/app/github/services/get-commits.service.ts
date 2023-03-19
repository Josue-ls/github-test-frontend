import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  constructor(private readonly http: HttpClient) {}

  private _headers = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'bearer',
  });

  getCommits(repoName: string) {
    const url = `${environment.BACKEND_URL}/api/commits/${repoName}`;
    return this.http.get(url, { headers: this._headers });
  }
}
