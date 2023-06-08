using API.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers {
    [Route("api/[controller]")]
    [ApiController]

    public class PokemonController : ControllerBase {
        private readonly DataContext _context;

        public PokemonController(DataContext context) {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Pokemon>>> GetPokemons() {
            return Ok(await _context.Pokemons.ToListAsync());
        }

        [HttpPost]
        public async Task<ActionResult<List<Pokemon>>> CreatePokemons(Pokemon pokemon) {
            _context.Pokemons.Add(pokemon);
            await _context.SaveChangesAsync();
            return Ok(await _context.Pokemons.ToListAsync());
        }

        [HttpPut]
        public async Task<ActionResult<List<Pokemon>>> UpdatePokemon(Pokemon pokemon) {
            var dbPokemon = await _context.Pokemons.FindAsync(pokemon.Id);
            if (dbPokemon == null)
                return BadRequest("Pokemon not found");

            dbPokemon.Name = pokemon.Name;
            dbPokemon.Type1 = pokemon.Type1;
            dbPokemon.Type2 = pokemon.Type2;
            dbPokemon.Region = pokemon.Region;

            await _context.SaveChangesAsync();
            return Ok(await _context.Pokemons.ToListAsync());
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<List<Pokemon>>> DeletePokemon(int id) {
            var dbPokemon = await _context.Pokemons.FindAsync(id);
            if (dbPokemon == null)
                return BadRequest("Pokemon not found");

            _context.Pokemons.Remove(dbPokemon);
            await _context.SaveChangesAsync();

            return Ok(await _context.Pokemons.ToListAsync());
        }
    }
}

//dotnet watch --no-hot-reload