import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor() { }

  getDate() {
    return [
      { _id: 1, farm: 'Natural Prairie', produce: ['lettue', 'tomato'] },
      { _id: 2, farm: 'sawdust barn', produce: ['Eggs', 'greens','garlic'] }
    ]
  }
}
