using BookingAPI.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace EfCoreRelations.Data.Models
{
    public class Appoinment
    {
        public int Id { get; set; }
        public int BussinessId { get; set; }
        public Bussiness Bussiness { get; set; }
        public int UserId { get; set; }
        public User User { get; set; }

        public int EmployeeId { get; set; }
        public Employee Employee { get; set; }
        public DateTime Date { get; set; }

    }

    public class AppoinmentEntityConfiguration : IEntityTypeConfiguration<Appoinment>
    {
        public void Configure(EntityTypeBuilder<Appoinment> builder)
        {
            builder.Property(x => x.BussinessId).HasColumnType("int");
            builder.Property(x => x.UserId).HasColumnType("int");
            builder.Property(x => x.Date).HasColumnType("datetime");
            builder.Property(x => x.EmployeeId).HasColumnType("int");

            builder.HasOne(x => x.Bussiness)
                .WithMany(x => x.Appoinments)
                .HasForeignKey(x => x.BussinessId);

            builder.HasOne(x => x.User)
                .WithMany(x => x.Appoinments)
                .HasForeignKey(x => x.UserId);

            builder.HasOne(x => x.Employee)
                .WithMany(x => x.Appoinments)
                .HasForeignKey(x => x.EmployeeId);
        }
    }

}
