import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  constructor(private http: HttpClient) { }

  private baseAPI = "http://www.mocky.io/v2/5daffe6d2f00001172c1374b";

  getImages(): Observable<any[]> {
    return this.http.get<any[]>(this.baseAPI).pipe(
      //TODO: handle possible error
      // catchError()
    )
  }
}
