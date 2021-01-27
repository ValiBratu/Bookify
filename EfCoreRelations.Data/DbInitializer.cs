using BookingAPI.Models;
using EfCoreRelations.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EfCoreRelations.Data
{
    public static class DbInitializer
    {
        public static void Initialize(BookingDbContext context)
        {
            if (context.UserTypes.Any())
            {
                return;
            }
            var userTypes = new UserType[]
            {
                new UserType{Name="Normal"},
                new UserType{Name="Owner"},
                new UserType{Name="Admin"},

            };

            context.UserTypes.AddRange(userTypes);
            context.SaveChanges();

            if (context.Cities.Any())
            {
                return;
            }
            var cities = new City[]
            {
                new City{Name="Bucuresti"},
                new City{Name="Brasov"},
                new City{Name="Iasi"},
                new City{Name="Timisoara"},
                new City{Name="Cluj"},
                
            };
            context.Cities.AddRange(cities);
            context.SaveChanges();


            if (context.Categories.Any())
            {
                return;
            }
            var categories = new Category[]
            {
                new Category{Name="Frizerii"},
                new Category{Name="Fitness"},
                new Category{Name="Salon de Infrumusetare"}
            };
            context.Categories.AddRange(categories);
            context.SaveChanges();


            if (context.Services.Any())
            {
                return;
            }
            var services = new Service[]
            {
                new Service{Name="Tuns",Duration=30},
                new Service{Name="Barbierit",Duration=30},
                new Service{Name="Spalat pe cap",Duration=30},
                new Service{Name="Aranjat",Duration=30},
            };

            context.Services.AddRange(services);
            context.SaveChanges();


            if (context.Users.Any())
            {
                return;
            }
            var users = new User[]
            {
                new User
                {
                    FirstName= "Karin",
                    LastName= "Hopper",
                    TypeId= 4,
                    Email= "karinhopper@farmex.com",
                    NrTelefon= "+40 (889) 555-3238",
                    Password= "12345"
                },

                new User
                {
                    FirstName="Cort",
                    LastName="Caplen",
                    Email="ccaplen0@va.gov",
                    TypeId=5,
                    NrTelefon="+1 815 355 6522",
                    Password="fM100s8khu7d"
                },
                new User
                {
                    FirstName="Jacqueline",
                    LastName="Scurrell",
                    Email="jscurrell1@techcrunch.com",
                    TypeId=5,
                    NrTelefon="+52 259 425 1371",
                    Password="nfIElu0sUf"
                }

            };
            context.Users.AddRange(users);
            context.SaveChanges();


            if (context.Bussinesses.Any())
            {
                return;
            }
            var bussinesses = new Bussiness[]
            {
                new Bussiness
                {
                    UserId= 2,
                    Name= "SURELOGIC",
                    Email= "SURELOGIC@surelogic.com",
                    CityId= 3,
                    Location= "437 Kings Hwy, 7500",
                    NrTelefon= "+40 (896) 517-2935",
                    CategoryId= 1,
                    Description= "Velit nulla proident aliqua laborum do est fugiat laborum et aute. Nulla occaecat do nostrud ullamco irure ea exercitation ullamco sit proident. Magna laborum irure aliqua aliquip aute amet. Dolor et adipisicing ea magna laborum voluptate deserunt. Culpa quis sunt minim occaecat deserunt aute do.",
                    Rating= 4,
                    Photo=""
                },
                new Bussiness
                {
                    UserId= 3,
                    Name= "QIMONK",
                    Email= "williamsonfrazier@quimonk.com",
                    CityId= 2,
                    Location= "911 Turner Place, 8167",
                    NrTelefon= "+40 (902) 538-3946",
                    CategoryId= 1,
                    Description=  "Esse amet cupidatat Lorem ex cupidatat exercitation est non incididunt pariatur. Culpa aute nostrud anim nisi. Proident deserunt quis et ipsum nulla Lorem laboris minim duis. Est do fugiat id nisi qui aliquip excepteur nostrud ipsum aliquip. Magna reprehenderit esse velit reprehenderit irure culpa dolore aliqua ex do ut laborum tempor. Et non eiusmod fugiat cupidatat magna dolore cillum sunt id aliquip eu deserunt. Nulla commodo Lorem officia nostrud Lorem anim do dolore ipsum commodo mollit commodo",
                    Rating = 3,
                    Photo=""
                },
                new Bussiness
                {
                    UserId= 3,
                    Name= "BEZAL",
                    Email= "williamsonfrazier@bezal.com",
                    CityId= 2,
                    Location= "616 Meserole Street, 8583",
                    NrTelefon= "+40 (990) 463-2686",
                    CategoryId= 1,
                    Description=  "Lorem sunt adipisicing pariatur quis magna ea in qui occaecat id laborum sit ex. Ea exercitation reprehenderit cillum dolore eu officia mollit. Nostrud ullamco non eu dolore ea proident qui aliquip Lorem occaecat. Minim nulla irure dolor fugiat cupidatat voluptate velit consectetur sint. Eu nulla ut non duis enim cillum non aliquip cupidatat. Anim eiusmod qui cupidatat minim.",
                    Rating = 5,
                    Photo=""
                },

            };
            context.Bussinesses.AddRange(bussinesses);
            context.SaveChanges();


            if (context.Employees.Any())
            {
                return;
            }
            var employees = new Employee[]
            {
                new Employee
                {
                    Name="Merle McGaugan",
                    Description="Occlusion of R Ulnar Art with Extralum Dev, Open Approach",
                    ServiceId=1,
                    Link="",
                    Photo="",
                    BussinessId=1
                },
                new Employee
                {
                    Name="Maridel Zellick",
                    Description="Bypass R Femor Vein to Low Vein w Nonaut Sub, Perc Endo",
                    ServiceId=2,
                    Link="",
                    Photo="",
                    BussinessId=1
                },
                new Employee
                {
                    Name="Kennett Eusden",
                    Description="Removal of Monitor Dev from Spinal Cord, Perc Endo Approach",
                    ServiceId=1,
                    Link="",
                    Photo="",
                    BussinessId=2
                },
                new Employee
                {
                    Name="Allyn Mapis",
                    Description="Occlusion of Superior Mesenteric Artery, Perc Approach",
                    ServiceId=1,
                    Link="",
                    Photo="",
                    BussinessId=2
                },
                new Employee
                {
                     Name="Millie Scottini",
                    Description="Bypass R Com Iliac Art to R Com Ilia w Synth Sub, Perc Endo",
                    ServiceId=3,
                    Link="",
                    Photo="",
                    BussinessId=3
                },
                new Employee
                {
                    Name="Gardiner Wisdom",
                    Description="Removal of Intralum Dev from Up Intest Tract, Perc Approach",
                    ServiceId=2,
                    Link="",
                    Photo="",
                    BussinessId=3
                }
            };
            context.Employees.AddRange(employees);
            context.SaveChanges();



        }
    }
    
}
