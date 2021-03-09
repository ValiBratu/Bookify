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
    public class EmployeesForBussinessController : ControllerBase
    {
        private readonly BookingDbContext _context;

        public EmployeesForBussinessController(BookingDbContext context)
        {
            _context = context;
        }

        //[HttpGet("{id}")]
        //public async Task<ActionResult<IEnumerable<dynamic>>> ServicesByBussinessId(int id)
        //{
        //    var services = await _context.Services.ToListAsync();

        //    var bussinessServices = await _context.BussinessServices.ToListAsync();

        //    var query = from service in services
        //                join bussinesService in bussinessServices on new { BussinessId = id, ServiceId = service.Id } equals new { bussinesService.BussinessId, bussinesService.ServiceId }
        //                select new { ServiceId = service.Id, ServiceName = service.Name, ServiceDuration = service.Duration, Price = bussinesService.ServicePrice };


        //    return query.ToList();

        //}



    }
}
