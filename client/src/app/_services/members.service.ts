import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Member } from '../_models/members';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  baseUrl = environment.apiUrl;

  constructor(private http : HttpClient) { }

  getMembers() {
    return this.http.get<Member[]>(this.baseUrl + 'Users')
  }

  getMember(username: string) {
    return this.http.get<Member>(this.baseUrl + 'Users/' + username)
  }

}
