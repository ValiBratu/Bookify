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
    public class ServicesByBussinessController : ControllerBase
    {
        private readonly BookingDbContext _context;

        public ServicesByBussinessController(BookingDbContext context)
        {
            _context = context;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<IEnumerable<dynamic>>> ServicesByBussinessId(int id)
        {
            var services = await _context.Services.ToListAsync();



            var query = from service in services
                        where service.BussinessId.Equals(id)
                        select service;


            return query.ToList();

        }



    }
}





//ServicesByBussinessController