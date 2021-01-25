using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookingAPI.Models
{
    public class UserType
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public int UserId { get; set; }

       public ICollection<User> User { get; set; }

    }

    public class UserTypeEntityConfiguration : IEntityTypeConfiguration<UserType>
    {

        public void Configure(EntityTypeBuilder<UserType> builder)
        {
            builder.Property(x => x.Name).HasColumnType("nvarchar(200)");

            builder.HasMany(c => c.User).WithOne(e => e.UserType);

        }
    }
}
