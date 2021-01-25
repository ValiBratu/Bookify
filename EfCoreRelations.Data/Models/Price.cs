using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace EfCoreRelations.Data.Models
{
    public class Price
    {

        public int Id { get; set; }

        [ForeignKey("BussinessId")]
        public int? BussinessId { get; set; }

        [ForeignKey("ServiceId")]
        public int? ServiceId { get; set; }
        public float Value { get; set; }


    }

    public class PriceEntityConfiguration : IEntityTypeConfiguration<Price>
    {
        public void Configure(EntityTypeBuilder<Price> builder)
        {
            builder.Property(x => x.BussinessId).HasColumnType("int");
            builder.Property(x => x.ServiceId).HasColumnType("int");
            builder.Property(x => x.Value).HasColumnType("float");



        }
    }
}
