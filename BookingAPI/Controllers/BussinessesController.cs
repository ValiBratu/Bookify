using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using EfCoreRelations.Data;
using EfCoreRelations.Data.Models;
using Microsoft.AspNetCore.Authorization;

namespace BookingAPI.Controllers
{
   
    [Route("api/[controller]")]
    [ApiController]
    public class BussinessesController : ControllerBase
    {
        private readonly BookingDbContext _context;

        public BussinessesController(BookingDbContext context)
        {
            _context = context;
        }

        // GET: api/Bussinesses
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Bussiness>>> GetBussinesses()
        {
            return await _context.Bussinesses.ToListAsync();
        }

        // GET: api/Bussinesses/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Bussiness>> GetBussiness(int id)
        {
            var bussiness = await _context.Bussinesses.FindAsync(id);

            if (bussiness == null)
            {
                return NotFound();
            }

            return bussiness;
        }

        // PUT: api/Bussinesses/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBussiness(int id, [FromBody]Bussiness bussiness)
        {
            if (!_context.Bussinesses.Any(b => b.Id == id))
            {
                return BadRequest();
            }

            try
            {
                var currentBussiness = _context.Bussinesses.Single(b => b.Id == id);

                currentBussiness.Name = bussiness.Name;
                currentBussiness.Description = bussiness.Description;
                currentBussiness.PhoneNumber = bussiness.PhoneNumber;
                currentBussiness.Location = bussiness.Location;
                currentBussiness.Email = bussiness.Email;
                currentBussiness.Photo = bussiness.Photo;

                await _context.SaveChangesAsync();
                //return CreatedAtAction("GetBussiness", new { id = bussiness.Id }, bussiness);
            }
            catch (Exception ex)
            {

                throw ex;

            }

            return NoContent();
        }

        // POST: api/Bussinesses
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Bussiness>> PostBussiness(Bussiness bussiness)
        {
            _context.Bussinesses.Add(bussiness);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBussiness", new { id = bussiness.Id }, bussiness);
        }

        // DELETE: api/Bussinesses/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Bussiness>> DeleteBussiness(int id)
        {
            var bussiness = await _context.Bussinesses.FindAsync(id);
            if (bussiness == null)
            {
                return NotFound();
            }

            _context.Bussinesses.Remove(bussiness);
            await _context.SaveChangesAsync();

            return bussiness;
        }

        private bool BussinessExists(int id)
        {
            return _context.Bussinesses.Any(e => e.Id == id);
        }

   


    }

}
