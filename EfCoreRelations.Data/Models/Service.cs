using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace EfCoreRelations.Data.Models
{
    public class Service
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public int BussinessId { get; set; }
        public int Duration { get; set; }


        [Column(TypeName = "decimal")]
        public Decimal ServicePrice { get; set; }

        public ICollection<Employee> Employees { get; set; }

    }

    public class ServiceEntityConfiguration : IEntityTypeConfiguration<Service>
    {
        public void Configure(EntityTypeBuilder<Service> builder)
        {



        }
    }
}