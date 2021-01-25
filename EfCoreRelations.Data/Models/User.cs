using EfCoreRelations.Data.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace BookingAPI.Models
{
    public class User
    {

        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int TypeId { get; set; }
        public UserType UserType { get; set; }
        public string Password { get; set; }
        public string NrTelefon { get; set; }

        public string Email { get; set; }

        public ICollection<Appoinment> Appoinments { get; set; }

        public ICollection<Review> Reviews { get; set; }

    }

    public class UserEntityConfiguration : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            builder.Property(x => x.FirstName).HasColumnType("nvarchar(50)");
            builder.Property(x => x.LastName).HasColumnType("nvarchar(50)");
            builder.Property(x => x.Password).HasColumnType("nvarchar(255)");
            builder.Property(x => x.NrTelefon).HasColumnType("nvarchar(50)");
            builder.Property(x => x.Email).HasColumnType("nvarchar(250)");

            builder.HasOne(x => x.UserType)
                .WithMany(x => x.User);

            builder.HasMany(x => x.Appoinments).WithOne(x => x.User).HasForeignKey(x => x.UserId);

            builder.HasMany(x => x.Reviews).WithOne(x => x.User).HasForeignKey(x => x.UserId);
    }
    }

}
