import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { DogHouse } from '../models/dog-house';
import { HttpClient, HttpEvent, HttpEventType } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DoggoService {

  private baseUrl = 'http://localhost:8084/';
  private url = this.baseUrl + 'api/dogs';
  // private url = this.baseUrl + 'api/dogs';

  constructor(
    private http: HttpClient,


  ) { }
  // getHttpOptions() {
  //   let options = {
  //     headers: {
  //       Authorization: 'Basic ' + this.auth.getCredentials(),
  //       'X-Requested-With': 'XMLHttpRequest',
  //     },
  //   };
  //   return options;
  // }

  index(): Observable<DogHouse[]> {
    return this.http.get<DogHouse[]>(this.url).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error(
              'DoggoService.index(): error retrieving dog: ' + err
            )
        );
      })
    );
  }
  show(dogId: number): Observable<DogHouse> {
    return this.http.get<DogHouse>(this.url + '/' + dogId).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error('DoggoService.show(): error retrieving dog: ' + err)
        );
      })
    );
  }

  create(dog: DogHouse): Observable<DogHouse> {

    dog.description = '';
    return this.http.post<DogHouse>(this.url, dog).pipe(
      catchError((err: any) => {
        console.error(err);
        return throwError(
          () => new Error('DoggoService.create(): error creating Dog: ' + err)
        );
      })
    );
  }

  update(dog: DogHouse): Observable<DogHouse> {
    return this.http.put<DogHouse>(this.url + '/' + dog.id, dog).pipe(
      catchError((err: any) => {
        console.error(err);
        return throwError(new Error('Failed to get dog from API'));
      })
    );
  }

  destroy(dogId: number): Observable<void> {
    return this.http.delete<void>(this.url + '/' + dogId).pipe(
      catchError((err: any) => {
        console.error(err);
        return throwError(
          () => new Error('TodosService.destroy(): error deleting Dog: ' + err)
        );
      })
    );
  }



}



