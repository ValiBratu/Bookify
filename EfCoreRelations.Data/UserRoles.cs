using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BookingAPI.Models
{
    public static  class UserRoles
    {
        public const string Admin = "Admin";
        public const string User = "User";
    }

    
}
