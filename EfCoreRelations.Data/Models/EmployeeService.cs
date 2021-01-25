using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace EfCoreRelations.Data.Models
{
    public class EmployeeService
    {
        public int Id { get; set; }
        public int BussinessId { get; set; }

        public int ServiceId { get; set; }
    }

    public class EmployeeServiceEntityConfiguration : IEntityTypeConfiguration<EmployeeService>
    {

        public void Configure(EntityTypeBuilder<EmployeeService> builder)
        {
            
        }
    }
}
