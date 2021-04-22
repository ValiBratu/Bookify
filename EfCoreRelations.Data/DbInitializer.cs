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
                new Category{Name="Frizerii",Photo="https://img.freepik.com/free-vector/barber-shop-pole_7433-50.jpg?size=626&ext=jpg"},
                new Category{Name="Fitness",Photo="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX31340883.jpg"},
                new Category{Name="Salon de Infrumusetare",Photo="https://st4.depositphotos.com/5613078/21206/v/450/depositphotos_212069708-stock-illustration-beauty-logo-hair-salon-logo.jpg"}
            };
            context.Categories.AddRange(categories);
            context.SaveChanges();




            if (context.WebsiteUsers.Any())
            {
                return;
            }
            var users = new ApplicationUser[]
            {
                new ApplicationUser
                {
                    UserName= "Karin Hopper",
                    Email= "karinhopper@farmex.com",
                    PhoneNumber= "+40 (889) 555-3238",
                    PasswordHash= "12345"
                },

                new ApplicationUser
                {
                    UserName="Cort Caplen",
                    Email="ccaplen0@va.gov",
                    PhoneNumber="+1 815 355 6522",
                    PasswordHash="fM100s8khu7d"
                },
                new ApplicationUser
                {
                    UserName="Jacqueline Scurrell",

                    Email="jscurrell1@techcrunch.com",

                    PhoneNumber="+52 259 425 1371",
                    PasswordHash="nfIElu0sUf"
                }

            };
            context.WebsiteUsers.AddRange(users);
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
                    PhoneNumber= "+40 (896) 517-2935",
                    CategoryId= 1,
                    Description= "Velit nulla proident aliqua laborum do est fugiat laborum et aute. Nulla occaecat do nostrud ullamco irure ea exercitation ullamco sit proident. Magna laborum irure aliqua aliquip aute amet. Dolor et adipisicing ea magna laborum voluptate deserunt. Culpa quis sunt minim occaecat deserunt aute do.",
                    Rating= 4,
                    
                    Latitude=44.435851M,
                    Longitude=26.105388M
                },
                new Bussiness
                {
                    UserId= 3,
                    Name= "QIMONK",
                    Email= "williamsonfrazier@quimonk.com",
                    CityId= 2,
                    Location= "911 Turner Place, 8167",
                    PhoneNumber= "+40 (902) 538-3946",
                    CategoryId= 1,
                    Description=  "Esse amet cupidatat Lorem ex cupidatat exercitation est non incididunt pariatur. Culpa aute nostrud anim nisi. Proident deserunt quis et ipsum nulla Lorem laboris minim duis. Est do fugiat id nisi qui aliquip excepteur nostrud ipsum aliquip. Magna reprehenderit esse velit reprehenderit irure culpa dolore aliqua ex do ut laborum tempor. Et non eiusmod fugiat cupidatat magna dolore cillum sunt id aliquip eu deserunt. Nulla commodo Lorem officia nostrud Lorem anim do dolore ipsum commodo mollit commodo",
                    Rating = 3,
                    
                    Latitude=45.652541M,
                    Longitude=25.621590M
                },
                new Bussiness
                {
                    UserId= 3,
                    Name= "BEZAL",
                    Email= "williamsonfrazier@bezal.com",
                    CityId= 2,
                    Location= "616 Meserole Street, 8583",
                    PhoneNumber= "+40 (990) 463-2686",
                    CategoryId= 1,
                    Description=  "Lorem sunt adipisicing pariatur quis magna ea in qui occaecat id laborum sit ex. Ea exercitation reprehenderit cillum dolore eu officia mollit. Nostrud ullamco non eu dolore ea proident qui aliquip Lorem occaecat. Minim nulla irure dolor fugiat cupidatat voluptate velit consectetur sint. Eu nulla ut non duis enim cillum non aliquip cupidatat. Anim eiusmod qui cupidatat minim.",
                    Rating = 5,
                   
                    Latitude=45.648854M,
                    Longitude=25.601645M
                },//
                new Bussiness
                {
                    Name= "Gigazoom",
                    Email= "vlangrick1@ft.com",
                    CityId= 1,
                    Location= "70015 Melody Plaza",
                    PhoneNumber= "846-847-0953",
                    Description= "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.",
                    Rating= 2,
                    CategoryId= 3,
                    UserId= 5,
                    Latitude=47.164217M,
                    Longitude=27.585301M

                },
                new Bussiness
                {
                    Name= "Riffpath",
                    Email= "malbinson2@msu.edu",
                    CityId= 3,
                    Location= "907 Golden Leaf Drive",
                    PhoneNumber= "631-480-4042",
                    Description= "Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
                    Rating= 3,
                    CategoryId= 3,
                    UserId= 6,
                    Latitude=44.419075M,
                    Longitude=26.127191M
                },
                new Bussiness
                {
                      Name=  "Feednation",
                      Email= "afothergill3@github.io",
                      CityId= 3,
                      Location= "50589 Pawling Parkway",
                      PhoneNumber= "228-919-8765",
                      Description= "Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
                      Rating= 4,
                      CategoryId= 3,
                      UserId= 6,
                      Latitude=44.403716M,
                      Longitude=26.095925M
                }

            };
            context.Bussinesses.AddRange(bussinesses);
            context.SaveChanges();



            if (context.SiteReviews.Any())
            {
                return;
            }
            var siteReviews = new SiteReview[]
            {
                new SiteReview
                {
                    Name = "Cecile Tournie",
                    Email= "ctournie0@msn.com",
                    Description=  "Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui."
                },
                new SiteReview
                {
                    Name = "Nelly Santorini",
                    Email= "nsantorini1@umn.edu",
                    Description= "Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo."
                },
                 new SiteReview
                {
                    Name =  "Charlene Iwanicki",
                    Email= "ciwanicki2@moonfruit.com",
                    Description=  "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio."
                }
            };
            context.SiteReviews.AddRange(siteReviews);
            context.SaveChanges();

            if (context.Services.Any())
            {
                return;
            }
            var services = new Service[]
            {
                new Service{Name="Tuns",Duration=30,ServicePrice=23,BussinessId=3},
                new Service{Name="Barbierit",Duration=30,ServicePrice=15,BussinessId=1},
                new Service{Name="Spalat pe cap",Duration=30,ServicePrice=20,BussinessId=3},
                new Service{Name="Aranjat",Duration=30,ServicePrice=10,BussinessId=3},
            };

            context.Services.AddRange(services);
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
