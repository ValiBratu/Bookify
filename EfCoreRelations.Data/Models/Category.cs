using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace EfCoreRelations.Data.Models
{
   public class Category
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public string Photo { get; set; }

        public ICollection<Bussiness> Bussinesses { get; set; }

    }

    public class CategoryEntityConfiguration : IEntityTypeConfiguration<Category>
    {
        public void Configure(EntityTypeBuilder<Category> builder)
        {


        }
    }
}
