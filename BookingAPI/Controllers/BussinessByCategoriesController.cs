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
    public class BussinessByCategoriesController : ControllerBase
    {
        private readonly BookingDbContext _context;

        public BussinessByCategoriesController(BookingDbContext context)
        {
            _context = context;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<IEnumerable<Bussiness>>> BussinessesByCategoryId(int id)
        {
            var bussinesses = _context.Bussinesses.ToList();

            var bussinessesWithCategoryIdValid = from bussiness in bussinesses
                                                 where bussiness.CategoryId.Equals(id)
                                                 select bussiness;

            return  bussinessesWithCategoryIdValid.ToList();

        }


    }
}



//BussinessByCategoriesController