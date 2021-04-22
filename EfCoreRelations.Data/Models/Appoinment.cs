using BookingAPI.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace EfCoreRelations.Data.Models
{
    public class Appoinment
    {
        public int Id { get; set; }

        [ForeignKey("BussinessId")]
        public int BussinessId { get; set; }
        public Bussiness Bussiness { get; set; }

        [ForeignKey("UserId")]
        public int UserId { get; set; }
        public ApplicationUser User { get; set; }

        [ForeignKey("EmployeeId")]
        public int? EmployeeId { get; set; }
        public Employee Employee { get; set; }

        [Column(TypeName = "datetime")]
        public DateTime Date { get; set; }

        [ForeignKey("ServiceId")]
        public int ServiceId { get; set; }
    }

    public class AppoinmentEntityConfiguration : IEntityTypeConfiguration<Appoinment>
    {
        public void Configure(EntityTypeBuilder<Appoinment> builder)
        {

        }
    }

}
