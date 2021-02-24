using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace EfCoreRelations.Data.Models
{
    public class SiteReview
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public string Email { get; set; }

        public string Description { get; set; }

        public class SiteReviewEntityConfiguration : IEntityTypeConfiguration<SiteReview>
        {
            public void Configure(EntityTypeBuilder<SiteReview> builder)
            {



            }
        }
    }
}
