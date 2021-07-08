import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from '../messages/message.service';
import { Hero } from '../models/hero';
import { HEROES } from '../models/mok-heroes';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessageService) {}
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
}
