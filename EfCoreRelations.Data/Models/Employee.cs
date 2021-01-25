using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace EfCoreRelations.Data.Models
{
     public class Employee
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }

        [ForeignKey("BussinessId")]
        public int? BussinessId { get; set; }
        public string Link { get; set; }

        [ForeignKey("ServiceId")]
        public int? ServiceId { get; set; }
        public ICollection<Service> Services { get; set; }

        public Bussiness Bussiness { get; set; }
        public ICollection<Appoinment> Appoinments { get; set; }
    }

    public class EmployeeEntityConfiguration : IEntityTypeConfiguration<Employee>
    {
        public void Configure(EntityTypeBuilder<Employee> builder)
        {
            builder.Property(x => x.Name).HasColumnType("nvarchar(250)");
            builder.Property(x => x.Description).HasColumnType("nvarchar(max)");
            builder.Property(x => x.BussinessId).HasColumnType("int");

            builder.HasOne(x => x.Bussiness).WithMany(x => x.Employee).HasForeignKey(x => x.BussinessId);

            builder.HasMany(x => x.Services).WithMany(x => x.Employees);

            builder.HasMany(x => x.Appoinments)
                .WithOne(x => x.Employee).HasForeignKey(x => x.EmployeeId);


        }
    }
}
