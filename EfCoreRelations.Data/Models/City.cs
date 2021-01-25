using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Text;

namespace EfCoreRelations.Data.Models
{
     public class City
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public ICollection<Bussiness> Bussinesses { get; set; }
    }

    public class CityEntityConfiguration : IEntityTypeConfiguration<City>
    {
        public void Configure(EntityTypeBuilder<City> builder)
        {
            builder.Property(x => x.Name).HasColumnType("nvarchar(250)");

            builder.HasMany(x => x.Bussinesses);

        }
    }
}
