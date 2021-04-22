using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using EfCoreRelations.Data;
using EfCoreRelations.Data.Models;

namespace BookingAPI
{
    [Route("api/[controller]")]
    [ApiController]
    public class AppoinmentsController : ControllerBase
    {
        private readonly BookingDbContext _context;

        public AppoinmentsController(BookingDbContext context)
        {
            _context = context;
        }

        // GET: api/Appoinments
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Appoinment>>> GetAppoinments()
        {
            return await _context.Appoinments.ToListAsync();
        }

        // GET: api/Appoinments/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Appoinment>> GetAppoinment(int id)
        {
            var appoinment = await _context.Appoinments.FindAsync(id);

            if (appoinment == null)
            {
                return NotFound();
            }

            return appoinment;
        }

        // PUT: api/Appoinments/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAppoinment(int id, Appoinment appoinment)
        {
            if (id != appoinment.Id)
            {
                return BadRequest();
            }

            _context.Entry(appoinment).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AppoinmentExists(id))
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

        // POST: api/Appoinments
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Appoinment>> PostAppoinment(Appoinment appoinment)
        {

            var allApoinments = await _context.Appoinments.ToListAsync();

            var checkAppoinmentsWithSameDate = from checkAppoinment in allApoinments
                                               where checkAppoinment.EmployeeId.Equals(appoinment.EmployeeId) && checkAppoinment.BussinessId.Equals(appoinment.BussinessId) && checkIfAppoinmentExists(checkAppoinment, appoinment)
                                               select checkAppoinment;



            if (checkAppoinmentsWithSameDate.Any())
            {
                return BadRequest();
            }

            _context.Appoinments.Add(appoinment);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAppoinment", new { id = appoinment.Id }, appoinment);
        }

        // DELETE: api/Appoinments/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Appoinment>> DeleteAppoinment(int id)
        {
            var appoinment = await _context.Appoinments.FindAsync(id);
            if (appoinment == null)
            {
                return NotFound();
            }

            _context.Appoinments.Remove(appoinment);
            await _context.SaveChangesAsync();

            return appoinment;
        }

        private bool AppoinmentExists(int id)
        {
            return _context.Appoinments.Any(e => e.Id == id);
        }

        [HttpGet("{id}/employee/{employeeId}")]
        public async Task<ActionResult<IEnumerable<dynamic>>> AppoinmentsByBussinessAndEmployee(int id, int employeeId)
        {

            var bussiness = await _context.Bussinesses.FindAsync(id);
            var employee = await _context.Employees.FindAsync(employeeId);

            var services = await _context.Services.ToListAsync();



            var appoinments = await _context.Appoinments.ToListAsync();

            var appoinmentsByBussinessAndEmployee = from appoinment in appoinments
                        where appoinment.EmployeeId.Equals(employeeId) && appoinment.BussinessId.Equals(id)
                        select appoinment;

            var query = from appoinment in appoinmentsByBussinessAndEmployee
                        join service in services on appoinment.ServiceId equals service.Id
                        
                        select new
                        {
                            EmployeeName = employee.Name,
                            EmployeeId = employee.Id,
                            ServiceName = service.Name,
                            Price = service.ServicePrice,
                            ServiceDuration = service.Duration,
                            AppoinmentDate = appoinment.Date
                        };

            return query.ToList();
        }


        [HttpGet("{id}/employee/{employeeId}/date/{date}")]
        public async Task<ActionResult<bool>> CheckAppoinmentWithSameDateExists(int id, int employeeId,string date)
        {
            var appoinments = await _context.Appoinments.ToListAsync();

            bool AppoinmentExists = false;
            var dateTime = DateTime.Parse(date);
            var appoinmentsByBussinessAndEmployee = from appoinment in appoinments
                                                    where appoinment.EmployeeId.Equals(employeeId) && appoinment.BussinessId.Equals(id)
                                                    select appoinment;

            var query = from appoinment in appoinmentsByBussinessAndEmployee
                        where checkAppoinmentsWithSameDate(appoinment.Date, dateTime)
                        select appoinment;

            if (query.Any())
            {
                AppoinmentExists = true;
            }
            return AppoinmentExists;

        }


        [HttpGet("{id}/employee/{employeeId}/user/{userId}/service/{serviceId}")]
        public async Task<ActionResult<IEnumerable<dynamic>>> AppoinmentDetails(int id, int employeeId,string userId,int serviceId)
        {

            var bussiness = await _context.Bussinesses.FindAsync(id);
            var employee = await _context.Employees.FindAsync(employeeId);

            var services = await _context.Services.FindAsync(serviceId);

            var users = await _context.WebsiteUsers.FindAsync(userId);




            List<dynamic> query = new List<dynamic>();
           


            var objectQuery = new
            {
                BussinessName = bussiness.Name,
                BussinessPhone = bussiness.PhoneNumber,
                ServiceName = services.Name,
                Price = services.ServicePrice,
                EmployeeName = employee.Name,
                UserName = users.UserName
            };

            query.Add(objectQuery);

            return query;
        }



        private bool checkAppoinmentsWithSameDate(DateTime firstDate,DateTime secondDate)
        {
            if ((firstDate.Year == secondDate.Year) &&
               (firstDate.Month == secondDate.Month) &&
               (firstDate.Day == secondDate.Day) &&
               (firstDate.Hour == secondDate.Hour-2) &&
               (firstDate.Minute == secondDate.Minute))
            {
                return true;
            }
            return false;
        }



        private bool checkIfAppoinmentExists(Appoinment firstAppoinment, Appoinment secondAppoinment)
        {

            if((firstAppoinment.Date.Year==secondAppoinment.Date.Year)&&
                (firstAppoinment.Date.Month==secondAppoinment.Date.Month)&&
                (firstAppoinment.Date.Day==secondAppoinment.Date.Day)&&
                (firstAppoinment.Date.Hour==secondAppoinment.Date.Hour)&&
                (firstAppoinment.Date.Minute == secondAppoinment.Date.Minute)&&
                (firstAppoinment.BussinessId==secondAppoinment.BussinessId)&&
                (firstAppoinment.EmployeeId==secondAppoinment.EmployeeId))
            {
                return true;
            }
                
         
            return false;
        }
    }
}
///var query = from service in services
//    join bussinesService in bussinessServices on new { BussinessId = id, ServiceId = service.Id } equals new { bussinesService.BussinessId, bussinesService.ServiceId }
//    select new { ServiceId = service.Id, ServiceName = service.Name, ServiceDuration = service.Duration, Price = bussinesService.ServicePrice };