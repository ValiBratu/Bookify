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


            var bussinesses = await _context.Bussinesses.ToListAsync();

            var bussinessesWithCategoryIdValid = from bussiness in bussinesses
                                                 where bussiness.CategoryId.Equals(id)
                                                 select bussiness;

            return bussinessesWithCategoryIdValid.ToList();

        }

        [HttpGet("{id}/city/{cityId}")]
        public async Task<ActionResult<IEnumerable<Bussiness>>> BussinessesByCategoryAndCityId(int id,int cityId)
        {


            var bussinesses = await _context.Bussinesses.ToListAsync();

            if (cityId.Equals(0))
            {

                var allBussinessesByCategory = from bussiness in bussinesses
                            where bussiness.CategoryId.Equals(id) 
                            select bussiness;
                return allBussinessesByCategory.ToList();
            }

            var allBussinessesByCategoryAndCity = from bussiness in bussinesses
                        where bussiness.CategoryId.Equals(id) && bussiness.CityId.Equals(cityId)
                        select bussiness;
            
            return allBussinessesByCategoryAndCity.ToList();

        }

    }
}



//BussinessByCategoriesController