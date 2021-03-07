using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using EfCoreRelations.Data;
using EfCoreRelations.Data.Models;

namespace BookingAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BussinessServicesController : ControllerBase
    {
        private readonly BookingDbContext _context;

        public BussinessServicesController(BookingDbContext context)
        {
            _context = context;
        }

        // GET: api/BussinessServices
        [HttpGet]
        public async Task<ActionResult<IEnumerable<BussinessService>>> GetBussinessServices()
        {
            return await _context.BussinessServices.ToListAsync();
        }

        // GET: api/BussinessServices/5
        [HttpGet("{id}")]
        public async Task<ActionResult<BussinessService>> GetBussinessService(int id)
        {
            var bussinessService = await _context.BussinessServices.FindAsync(id);

            if (bussinessService == null)
            {
                return NotFound();
            }

            return bussinessService;
        }

        // PUT: api/BussinessServices/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBussinessService(int id, BussinessService bussinessService)
        {
            if (id != bussinessService.Id)
            {
                return BadRequest();
            }

            _context.Entry(bussinessService).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BussinessServiceExists(id))
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

        // POST: api/BussinessServices
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<BussinessService>> PostBussinessService(BussinessService bussinessService)
        {
            _context.BussinessServices.Add(bussinessService);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBussinessService", new { id = bussinessService.Id }, bussinessService);
        }

        // DELETE: api/BussinessServices/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<BussinessService>> DeleteBussinessService(int id)
        {
            var bussinessService = await _context.BussinessServices.FindAsync(id);
            if (bussinessService == null)
            {
                return NotFound();
            }

            _context.BussinessServices.Remove(bussinessService);
            await _context.SaveChangesAsync();

            return bussinessService;
        }

        private bool BussinessServiceExists(int id)
        {
            return _context.BussinessServices.Any(e => e.Id == id);
        }
    }
}
