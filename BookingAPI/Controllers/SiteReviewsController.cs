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
    public class SiteReviewsController : ControllerBase
    {
        private readonly BookingDbContext _context;

        public SiteReviewsController(BookingDbContext context)
        {
            _context = context;
        }

        // GET: api/SiteReviews
        [HttpGet]
        public async Task<ActionResult<IEnumerable<SiteReview>>> GetSiteReviews()
        {
            return await _context.SiteReviews.ToListAsync();
        }

        // GET: api/SiteReviews/5
        [HttpGet("{id}")]
        public async Task<ActionResult<SiteReview>> GetSiteReview(int id)
        {
            var siteReview = await _context.SiteReviews.FindAsync(id);

            if (siteReview == null)
            {
                return NotFound();
            }

            return siteReview;
        }

        // PUT: api/SiteReviews/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSiteReview(int id, SiteReview siteReview)
        {
            if (id != siteReview.Id)
            {
                return BadRequest();
            }

            _context.Entry(siteReview).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SiteReviewExists(id))
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

        // POST: api/SiteReviews
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<SiteReview>> PostSiteReview([FromBody] SiteReview siteReview)
        {
            _context.SiteReviews.Add(siteReview);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSiteReview", new { id = siteReview.Id }, siteReview);
        }

        // DELETE: api/SiteReviews/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<SiteReview>> DeleteSiteReview(int id)
        {
            var siteReview = await _context.SiteReviews.FindAsync(id);
            if (siteReview == null)
            {
                return NotFound();
            }

            _context.SiteReviews.Remove(siteReview);
            await _context.SaveChangesAsync();

            return siteReview;
        }

        private bool SiteReviewExists(int id)
        {
            return _context.SiteReviews.Any(e => e.Id == id);
        }
    }
}
