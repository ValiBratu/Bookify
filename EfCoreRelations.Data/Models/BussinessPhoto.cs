using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BookingAPI.Models
{
    public class BussinessPhoto
    {
        public int Id { get; set; }

        public int BussinessId { get; set; }

       public string BussinessImage { get; set; }


    }

    public class BussinessPhotoEntityConfiguration : IEntityTypeConfiguration<BussinessPhoto>
    {

        public void Configure(EntityTypeBuilder<BussinessPhoto> builder)
        {


        }
    }
}
