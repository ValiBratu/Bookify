using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace EfCoreRelations.Data.Models
{
    public class BussinessService
    {
        public int Id { get; set; }
        public int BussinessId { get; set; }

        public int ServiceId { get; set; }

        [Column( TypeName = "decimal")]
        public Decimal ServicePrice { get; set; }


    }

    public class BussinessServiceEntityConfiguration : IEntityTypeConfiguration<BussinessService>
    {

        public void Configure(EntityTypeBuilder<BussinessService> builder)
        {

        }
    }

}
