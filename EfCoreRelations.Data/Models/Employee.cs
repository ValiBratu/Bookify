using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace EfCoreRelations.Data.Models
{
     public class Employee
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        
        public string Description { get; set; }

        [ForeignKey("BussinessId")]
        public int BussinessId { get; set; }
        public string Link { get; set; }

        [ForeignKey("ServiceId")]
        public int? ServiceId { get; set; }

        public string Photo { get; set; }

        
        public Bussiness Bussiness { get; set; }
        public ICollection<Appoinment> Appoinments { get; set; }
    }

    public class EmployeeEntityConfiguration : IEntityTypeConfiguration<Employee>
    {
        public void Configure(EntityTypeBuilder<Employee> builder)
        {
         
        }
    }
}
