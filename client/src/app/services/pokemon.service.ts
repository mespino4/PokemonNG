import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private url = "Pokemon/"
  baseUrl = environment.apiUrl //"https://localhost:7104/api/"

  constructor(private http: HttpClient) { }

  public getPokemons() : Observable<Pokemon[]>{
    return this.http.get<Pokemon[]>(this.baseUrl + this.url)
  }
  public updatePokemon(pokemon: Pokemon) : Observable<Pokemon[]>{
    return this.http.put<Pokemon[]>(this.baseUrl + this.url, pokemon)
  }
  public createPokemon(pokemon: Pokemon) : Observable<Pokemon[]>{
    return this.http.post<Pokemon[]>(this.baseUrl + this.url, pokemon)
  }
  public deletePokemon(pokemon: Pokemon) : Observable<Pokemon[]>{
    return this.http.delete<Pokemon[]>(
      this.baseUrl + this.url + pokemon.id)
  }
}
