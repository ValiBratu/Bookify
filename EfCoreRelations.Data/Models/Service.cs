using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace EfCoreRelations.Data.Models
{
    public class Service
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public int Duration { get; set; }

        public ICollection<Employee> Employees { get; set; }
        public IList<BussinessService> BussinessServices { get; set; }
    }

    public class ServiceEntityConfiguration : IEntityTypeConfiguration<Service>
    {
        public void Configure(EntityTypeBuilder<Service> builder)
        {
            builder.Property(x => x.Name).HasColumnType("nvarchar(250)");
            builder.Property(x => x.Duration).HasColumnType("int");

        }
    }
}
