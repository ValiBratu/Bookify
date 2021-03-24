using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BookingAPI.Models;
using EfCoreRelations.Data;

namespace BookingAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BussinessPhotoesController : ControllerBase
    {
        private readonly BookingDbContext _context;

        public BussinessPhotoesController(BookingDbContext context)
        {
            _context = context;
        }

        // GET: api/BussinessPhotoes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<BussinessPhoto>>> GetBussinessPhotos()
        {
            return await _context.BussinessPhotos.ToListAsync();
        }

        // GET: api/BussinessPhotoes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<BussinessPhoto>> GetBussinessPhoto(int id)
        {
            var bussinessPhoto = await _context.BussinessPhotos.FindAsync(id);

            if (bussinessPhoto == null)
            {
                return NotFound();
            }

            return bussinessPhoto;
        }

        // PUT: api/BussinessPhotoes/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBussinessPhoto(int id, BussinessPhoto bussinessPhoto)
        {
            if (id != bussinessPhoto.Id)
            {
                return BadRequest();
            }

            _context.Entry(bussinessPhoto).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BussinessPhotoExists(id))
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

        // POST: api/BussinessPhotoes
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<BussinessPhoto>> PostBussinessPhoto(BussinessPhoto bussinessPhoto)
        {
            _context.BussinessPhotos.Add(bussinessPhoto);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBussinessPhoto", new { id = bussinessPhoto.Id }, bussinessPhoto);
        }

        // DELETE: api/BussinessPhotoes/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<BussinessPhoto>> DeleteBussinessPhoto(int id)
        {
            var bussinessPhoto = await _context.BussinessPhotos.FindAsync(id);
            if (bussinessPhoto == null)
            {
                return NotFound();
            }

            _context.BussinessPhotos.Remove(bussinessPhoto);
            await _context.SaveChangesAsync();

            return bussinessPhoto;
        }


        [HttpGet("bussinessId/{id}")]
        public async Task<ActionResult<dynamic>> GetBussinessPhotoByBussinessId(int id)
        {
            var bussinessPhotos = await _context.BussinessPhotos.ToListAsync();

            var query = from bussinessPhoto in bussinessPhotos
                        where bussinessPhoto.BussinessId.Equals(id)
                        select bussinessPhoto;

            return query.ToList();
        }



        private bool BussinessPhotoExists(int id)
        {
            return _context.BussinessPhotos.Any(e => e.Id == id);
        }
    }
}
