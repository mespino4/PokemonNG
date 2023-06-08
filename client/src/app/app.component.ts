import { Component } from '@angular/core';
import { Pokemon } from './models/pokemon';
import { PokemonService } from './services/pokemon.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'PokemonStorage';
  pokemons: Pokemon[] = [];
  pokemonToEdit?: Pokemon;   

  constructor(private pokemonService: PokemonService){}

  ngOnInit(){
    this.pokemonService
      .getPokemons()
      .subscribe((result: Pokemon[]) => (this.pokemons = result));
  }

  updatePokemonList(pokemons: Pokemon[]){
    this.pokemons = pokemons;
  }

  initNewPokemon(){
    this.pokemonToEdit = new Pokemon();
  }

  editPokemon(pokemon: Pokemon){
    this.pokemonToEdit = pokemon;
  }
}
//continue on 55:56