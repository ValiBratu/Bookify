using BookingAPI.Models;
using EfCoreRelations.Data.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace EfCoreRelations.Data
{
    public class BookingDbContext:DbContext
    {
        public BookingDbContext(DbContextOptions<BookingDbContext> options) : base(options) { }


        public DbSet<User> Users { get; set; }
        public DbSet<UserType> UserTypes { get; set; }

        public DbSet<City> Cities { get; set; }

        public DbSet<Category> Categories { get; set; }
        public DbSet<BussinessService> BussinessServices { get; set; }

        public DbSet<Service> Services { get; set; }
        public DbSet<Appoinment> Appoinments { get; set; }
        public DbSet<Bussiness> Bussinesses { get; set; }

        public DbSet<Employee> Employees { get; set; }
        public DbSet<Review> Reviews { get; set; }

        public DbSet<EmployeeService> EmployeeServices { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new UserEntityConfiguration());
            modelBuilder.ApplyConfiguration(new UserTypeEntityConfiguration());
            modelBuilder.ApplyConfiguration(new CityEntityConfiguration());
            modelBuilder.ApplyConfiguration(new CategoryEntityConfiguration());
            modelBuilder.ApplyConfiguration(new BussinessServiceEntityConfiguration());
            modelBuilder.ApplyConfiguration(new ServiceEntityConfiguration());
            modelBuilder.ApplyConfiguration(new AppoinmentEntityConfiguration());
            modelBuilder.ApplyConfiguration(new BussinessEntityConfiguration());
            modelBuilder.ApplyConfiguration(new EmployeeEntityConfiguration());
            modelBuilder.ApplyConfiguration(new ReviewEntityConfiguration());
            modelBuilder.ApplyConfiguration(new EmployeeServiceEntityConfiguration());
        }
    }
}
