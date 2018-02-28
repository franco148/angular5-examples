import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService, Heroe } from '../../../services/heroes.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  heroes:Heroe[] = [];

  constructor(private router:Router, private _heroesService:HeroesService) {
  }

  ngOnInit() {
  }

  searchHero(term:string) {
    console.log(term);
    this.router.navigate(['/heroes', term]);
    //this.searchText = "";
  }

}
