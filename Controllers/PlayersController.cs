using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using FullStack.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authentication.JwtBearer;

namespace FullStack.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PlayersController : ControllerBase
    {
        // This is the variable you use to have access to your database
        private readonly DatabaseContext _context;

        // Constructor that recives a reference to your database context
        // and stores it in _context for you to use in your API methods
        public PlayersController(DatabaseContext context)
        {
            _context = context;
        }


        [HttpGet]
        public async Task<ActionResult<IEnumerable<Player>>> GetPlayers(string search)
        {
            if (search == null)
            {
                return await _context.Players.ToListAsync();
            }
            else

            {
                return await _context.Players.Where(player => player.PlayerName.Contains(search)).ToListAsync();
            }
        }


        [HttpGet("mine/{idOfCurrentUser}")]
        public async Task<ActionResult<IEnumerable<Player>>> GetMyPlayers(int idOfCurrentUser)
        {
            return await _context.Players.Where(player => player.creationUserID == idOfCurrentUser).ToListAsync();
        }


        [HttpGet("{id}")]
        public async Task<ActionResult<Player>> GetPlayer(int id)
        {
            var player = await _context.Players.FindAsync(id);

            if (player == null)
            {

                return NotFound();
            }

            return player;
        }


        [HttpPut("{id}")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<IActionResult> PutPlayer(int id, Player player)
        {
            if (id != player.Id)
            {
                return BadRequest();
            }


            _context.Entry(player).State = EntityState.Modified;

            try
            {

                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {

                if (!PlayerExists(id))
                {

                    return NotFound();
                }
                else
                {

                    throw;
                }
            }


            return NoContent();
        }


        [HttpPost]
        public async Task<ActionResult<Player>> PostPlayer(Player player)
        {

            _context.Players.Add(player);
            await _context.SaveChangesAsync();


            return CreatedAtAction("GetPlayer", new { id = player.Id }, player);
        }


        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePlayer(int id)
        {
            var player = await _context.Players.FindAsync(id);
            if (player == null)
            {

                return NotFound();
            }


            _context.Players.Remove(player);

            await _context.SaveChangesAsync();


            return NoContent();
        }

        private bool PlayerExists(int id)
        {
            return _context.Players.Any(player => player.Id == id);
        }
    }
}
