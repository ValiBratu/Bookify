using BookingAPI.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;
using static System.Net.Mime.MediaTypeNames;

namespace EfCoreRelations.Data.Models
{
    public class Bussiness
    {
        public int Id { get; set; }

        [ForeignKey("UserId")]
        public int? UserId { get; set; }
        
        public string Name { get; set; }
        public string Email { get; set; }

        [ForeignKey("CityId")]
        public int? CityId { get; set; }
        public City City { get; set; }
        public string Location { get; set; }
        public string NrTelefon { get; set; }

        [ForeignKey("CategoryId")]
        public int? CategoryId { get; set; }
        public Category Category { get; set; }
        public string Description { get; set; }
        public float Ratring { get; set; }
        public ICollection<Review> Reviews { get; set; }

        public ICollection<Employee> Employee { get; set; }

        public ICollection<Appoinment> Appoinments { get; set; }

        public IList<BussinessService> BussinessServices { get; set; }

    }

    public class BussinessEntityConfiguration : IEntityTypeConfiguration<Bussiness>
    {
        public void Configure(EntityTypeBuilder<Bussiness> builder)
        {
            builder.Property(x => x.UserId).HasColumnType("int");
            builder.Property(x => x.Name).HasColumnType("nvarchar(250)");
            builder.Property(x => x.Email).HasColumnType("nvarchar(250)");
            builder.Property(x => x.CityId).HasColumnType("int");
            builder.Property(x => x.Location).HasColumnType("nvarchar(250)");
            builder.Property(x => x.NrTelefon).HasColumnType("nvarchar(100)");
            builder.Property(x => x.CategoryId).HasColumnType("int");
            builder.Property(x => x.Description).HasColumnType("nvarchar(max)");
            builder.Property(x => x.Ratring).HasColumnType("float");

            builder.HasMany(x => x.Employee)
                .WithOne(x => x.Bussiness)
                .HasForeignKey(x => x.BussinessId);

            builder.HasOne(x => x.City).WithMany(x => x.Bussinesses).HasForeignKey(x => x.CityId);

            builder.HasOne(x => x.Category).WithMany(x => x.Bussinesses).HasForeignKey(x => x.CategoryId);

            builder.HasMany(x => x.Reviews).WithOne(x => x.Bussiness).HasForeignKey(x => x.BussinessId);

            builder.HasMany(x => x.Appoinments).WithOne(x => x.Bussiness);
        }
    }
}
