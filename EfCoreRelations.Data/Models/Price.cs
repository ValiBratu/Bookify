using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace EfCoreRelations.Data.Models
{
    public class Price
    {

        public int Id { get; set; }

        public int BussinessId { get; set; }
        public int UserId { get; set; }
        public float Value { get; set; }


    }

    public class PriceEntityConfiguration : IEntityTypeConfiguration<Price>
    {
        public void Configure(EntityTypeBuilder<Price> builder)
        {
            builder.Property(x => x.BussinessId).HasColumnType("int");
            builder.Property(x => x.UserId).HasColumnType("int");
            builder.Property(x => x.Value).HasColumnType("float");

        }
    }
}
