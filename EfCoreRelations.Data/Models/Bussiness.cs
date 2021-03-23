using BookingAPI.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;
using static System.Net.Mime.MediaTypeNames;

namespace EfCoreRelations.Data.Models
{
    public class Bussiness
    {
        public int Id { get; set; }

        [ForeignKey("UserId")]
        public int UserId { get; set; }
        
        public string Name { get; set; }
        public string Email { get; set; }

        [ForeignKey("CityId")]
        public int CityId { get; set; }
        public City City { get; set; }


        [Column(TypeName = "decimal(18,6)")]
        public decimal Latitude { get; set; }


        [Column(TypeName = "decimal(18,6)")]
        public decimal Longitude { get; set; }

        public string Location { get; set; }
        public string PhoneNumber { get; set; }

        [ForeignKey("CategoryId")]
        public int CategoryId { get; set; }
        public Category Category { get; set; }

        [Required]
        public string Description { get; set; }
        public float Rating { get; set; }


        public string Photo { get; set; }

        public ICollection<Review> Reviews { get; set; }

        public ICollection<Employee> Employee { get; set; }

        public ICollection<Appoinment> Appoinments { get; set; }

        public IList<Service> Services { get; set; }

    }

    public class BussinessEntityConfiguration : IEntityTypeConfiguration<Bussiness>
    {
        public void Configure(EntityTypeBuilder<Bussiness> builder)
        {

        }
    }
}
