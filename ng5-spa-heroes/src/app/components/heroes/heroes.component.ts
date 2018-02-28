import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] = [];

  constructor( private _heroesService:HeroesService, private router:Router ) {
    //console.log("Constructor......");
  }

  ngOnInit() {
    //console.log("ng-on-init......");

    this.heroes = this._heroesService.getHeroes();
  }

  seeHero( idx:number ) {
    //console.log(idx);
    this.router.navigate(['/heroe', idx]);
  }
}
