using BookingAPI.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace EfCoreRelations.Data.Models
{
    public class Review
    {

        public int Id { get; set; }

        public string Description { get; set; }
        public string Title { get; set; }
        public int Rating { get; set; }

        [ForeignKey("UserId")]
        public int? UserId { get; set; }
        public User User { get; set; }

        [ForeignKey("BussinessId")]
        public int? BussinessId { get; set; }
        public Bussiness Bussiness { get; set; }

    }

    public class ReviewEntityConfiguration : IEntityTypeConfiguration<Review>
    {
        public void Configure(EntityTypeBuilder<Review> builder)
        {
            builder.Property(x => x.Description).HasColumnType("nvarchar(max)");
            builder.Property(x => x.Title).HasColumnType("nvarchar(100)");
            builder.Property(x => x.Rating).HasColumnType("int");
            builder.Property(x => x.UserId).HasColumnType("int");
            builder.Property(x => x.BussinessId).HasColumnType("int");

            builder.HasOne(x => x.Bussiness).WithMany(x => x.Reviews).HasForeignKey(x => x.BussinessId);

            builder.HasOne(x => x.User).WithMany(x => x.Reviews).HasForeignKey(x => x.UserId);

        }
    }

}
