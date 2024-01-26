import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  private cache = new Map<string, any[]>();
  public cache$ = new BehaviorSubject<any[]>([]);

  constructor () { }

  set(key: string, data: any[]): void {
    this.cache.set(key, data);
    this.cache$.next(this.cache.get(key) || []);
  }

  get(key: string): any[] {
    const data = this.cache.get(key);
    this.cache$.next(data || []);
    return data || [];
  }

  clear(key: string): void {
    this.cache.delete(key);
    this.cache$.next([]);
  }
}

// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class CacheService {

//   private cache = new Map<string, any[]>();
//   public cache$ = new BehaviorSubject<any[]>(null);

//   constructor () { }

//   set(key: string, data: any[]): void {
//     this.cache.set(key, data);
//     this.cache$.next(this.cache.get(key));
//   }

//   get(key: string): any[] {
//     const data = this.cache.get(key);
//     this.cache$.next(data);
//     return data;
//   }

//   clear(key: string): void {
//     this.cache.delete(key);
//     this.cache$.next(null);
//   }
// }