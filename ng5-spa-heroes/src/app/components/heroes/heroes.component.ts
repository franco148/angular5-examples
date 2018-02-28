import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] = [];
  lookingFor:string;

  constructor( private _heroesService:HeroesService, private router:Router, private activatedRoute:ActivatedRoute ) {
    //console.log("Constructor......");
  }

  ngOnInit() {
    //console.log("ng-on-init......");

    this.activatedRoute.params.subscribe(params => {
      if(params['term']) {
        this.lookingFor = params['term'];
        this.heroes = this._heroesService.findHeroes(params['term']);
      } else {
        this.lookingFor = null;
        this.heroes = this._heroesService.getHeroes();
      }
      
    });
  }

  seeHero( idx:number ) {
    this.router.navigate(['/heroe', idx]);
  }
}
