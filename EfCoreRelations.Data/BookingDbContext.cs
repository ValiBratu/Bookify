using BookingAPI.Models;
using EfCoreRelations.Data.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace EfCoreRelations.Data
{
    public class BookingDbContext: IdentityDbContext<ApplicationUser>
    {
        public BookingDbContext(DbContextOptions<BookingDbContext> options) : base(options) { }


        public DbSet<ApplicationUser> WebsiteUsers { get; set; }
        

        public DbSet<City> Cities { get; set; }

        public DbSet<Category> Categories { get; set; }
        

        public DbSet<Service> Services { get; set; }
        public DbSet<Appoinment> Appoinments { get; set; }
        public DbSet<Bussiness> Bussinesses { get; set; }

        public DbSet<Employee> Employees { get; set; }
        public DbSet<Review> Reviews { get; set; }

        public DbSet<BussinessPhoto> BussinessPhotos { get; set; }

        public DbSet<SiteReview> SiteReviews { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }
}
