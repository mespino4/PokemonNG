import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-edit-pokemon',
  templateUrl: './edit-pokemon.component.html',
  styleUrls: ['./edit-pokemon.component.css']
})
export class EditPokemonComponent {
  @Input() pokemon?: Pokemon;
  @Output() pokemonsUpdated = new EventEmitter<Pokemon[]>();

  constructor(private pokemonService: PokemonService){}

  updatePokemon(pokemon: Pokemon){
    this.pokemonService
      .updatePokemon(pokemon)
      .subscribe((pokemons: Pokemon[]) => this.pokemonsUpdated.emit(pokemons));
  }
  deletePokemon(pokemon: Pokemon){
    this.pokemonService
      .deletePokemon(pokemon)
      .subscribe((pokemons: Pokemon[]) => this.pokemonsUpdated.emit(pokemons));
    
  }
  createPokemon(pokemon: Pokemon){
    this.pokemonService
      .createPokemon(pokemon)
      .subscribe((pokemons: Pokemon[]) => this.pokemonsUpdated.emit(pokemons));
  }
  

}
