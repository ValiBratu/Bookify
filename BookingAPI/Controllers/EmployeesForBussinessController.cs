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

        [HttpGet("{id}")]
        public async Task<ActionResult<IEnumerable<dynamic>>> EmployeeByBussinessId(int id)
        {
            var employees = await _context.Employees.ToListAsync();



            var query = from employee in employees
                        where employee.BussinessId.Equals(id)
                        select employee;


            return query.ToList();

        }



    }
}
