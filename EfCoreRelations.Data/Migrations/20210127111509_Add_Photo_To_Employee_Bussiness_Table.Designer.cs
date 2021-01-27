﻿// <auto-generated />
using System;
using EfCoreRelations.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace EfCoreRelations.Data.Migrations
{
    [DbContext(typeof(BookingDbContext))]
    [Migration("20210127111509_Add_Photo_To_Employee_Bussiness_Table")]
    partial class Add_Photo_To_Employee_Bussiness_Table
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .UseIdentityColumns()
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.2");

            modelBuilder.Entity("BookingAPI.Models.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("Email")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("FirstName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("LastName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("NrTelefon")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Password")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("TypeId")
                        .HasColumnType("int");

                    b.Property<int?>("UserTypeId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("UserTypeId");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("BookingAPI.Models.UserType", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("UserTypes");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Name = "Normal"
                        },
                        new
                        {
                            Id = 2,
                            Name = "Owner"
                        },
                        new
                        {
                            Id = 3,
                            Name = "Admin"
                        });
                });

            modelBuilder.Entity("EfCoreRelations.Data.Models.Appoinment", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<int>("BussinessId")
                        .HasColumnType("int");

                    b.Property<DateTime>("Date")
                        .HasColumnType("datetime");

                    b.Property<int>("EmployeeId")
                        .HasColumnType("int");

                    b.Property<int>("UserId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("BussinessId");

                    b.HasIndex("EmployeeId");

                    b.HasIndex("UserId");

                    b.ToTable("Appoinments");
                });

            modelBuilder.Entity("EfCoreRelations.Data.Models.Bussiness", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<int>("CategoryId")
                        .HasColumnType("int");

                    b.Property<int>("CityId")
                        .HasColumnType("int");

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Email")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Location")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("NrTelefon")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Photo")
                        .HasColumnType("nvarchar(max)");

                    b.Property<float>("Ratring")
                        .HasColumnType("real");

                    b.Property<int>("UserId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("CategoryId");

                    b.HasIndex("CityId");

                    b.ToTable("Bussinesses");
                });

            modelBuilder.Entity("EfCoreRelations.Data.Models.BussinessService", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<int>("BussinessId")
                        .HasColumnType("int");

                    b.Property<int>("ServiceId")
                        .HasColumnType("int");

                    b.Property<decimal>("ServicePrice")
                        .HasColumnType("decimal");

                    b.HasKey("Id");

                    b.HasIndex("BussinessId");

                    b.HasIndex("ServiceId");

                    b.ToTable("BussinessServices");
                });

            modelBuilder.Entity("EfCoreRelations.Data.Models.Category", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Categories");
                });

            modelBuilder.Entity("EfCoreRelations.Data.Models.City", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Cities");
                });

            modelBuilder.Entity("EfCoreRelations.Data.Models.Employee", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<int?>("BussinessId")
                        .HasColumnType("int");

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Link")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Photo")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("ServiceId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("BussinessId");

                    b.ToTable("Employees");
                });

            modelBuilder.Entity("EfCoreRelations.Data.Models.EmployeeService", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<int>("BussinessId")
                        .HasColumnType("int");

                    b.Property<int?>("EmployeeId")
                        .HasColumnType("int");

                    b.Property<int>("ServiceId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("EmployeeId");

                    b.HasIndex("ServiceId");

                    b.ToTable("EmployeeServices");
                });

            modelBuilder.Entity("EfCoreRelations.Data.Models.Review", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<int>("BussinessId")
                        .HasColumnType("int");

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Rating")
                        .HasColumnType("int");

                    b.Property<string>("Title")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("UserId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("BussinessId");

                    b.HasIndex("UserId");

                    b.ToTable("Reviews");
                });

            modelBuilder.Entity("EfCoreRelations.Data.Models.Service", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<int>("Duration")
                        .HasColumnType("int");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Services");
                });

            modelBuilder.Entity("BookingAPI.Models.User", b =>
                {
                    b.HasOne("BookingAPI.Models.UserType", "UserType")
                        .WithMany()
                        .HasForeignKey("UserTypeId");

                    b.Navigation("UserType");
                });

            modelBuilder.Entity("EfCoreRelations.Data.Models.Appoinment", b =>
                {
                    b.HasOne("EfCoreRelations.Data.Models.Bussiness", "Bussiness")
                        .WithMany("Appoinments")
                        .HasForeignKey("BussinessId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("EfCoreRelations.Data.Models.Employee", "Employee")
                        .WithMany("Appoinments")
                        .HasForeignKey("EmployeeId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("BookingAPI.Models.User", "User")
                        .WithMany("Appoinments")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Bussiness");

                    b.Navigation("Employee");

                    b.Navigation("User");
                });

            modelBuilder.Entity("EfCoreRelations.Data.Models.Bussiness", b =>
                {
                    b.HasOne("EfCoreRelations.Data.Models.Category", "Category")
                        .WithMany("Bussinesses")
                        .HasForeignKey("CategoryId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("EfCoreRelations.Data.Models.City", "City")
                        .WithMany("Bussinesses")
                        .HasForeignKey("CityId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Category");

                    b.Navigation("City");
                });

            modelBuilder.Entity("EfCoreRelations.Data.Models.BussinessService", b =>
                {
                    b.HasOne("EfCoreRelations.Data.Models.Bussiness", null)
                        .WithMany("BussinessServices")
                        .HasForeignKey("BussinessId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("EfCoreRelations.Data.Models.Service", null)
                        .WithMany("BussinessServices")
                        .HasForeignKey("ServiceId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("EfCoreRelations.Data.Models.Employee", b =>
                {
                    b.HasOne("EfCoreRelations.Data.Models.Bussiness", "Bussiness")
                        .WithMany("Employee")
                        .HasForeignKey("BussinessId");

                    b.Navigation("Bussiness");
                });

            modelBuilder.Entity("EfCoreRelations.Data.Models.EmployeeService", b =>
                {
                    b.HasOne("EfCoreRelations.Data.Models.Employee", null)
                        .WithMany("Services")
                        .HasForeignKey("EmployeeId");

                    b.HasOne("EfCoreRelations.Data.Models.Service", null)
                        .WithMany("Employees")
                        .HasForeignKey("ServiceId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("EfCoreRelations.Data.Models.Review", b =>
                {
                    b.HasOne("EfCoreRelations.Data.Models.Bussiness", "Bussiness")
                        .WithMany("Reviews")
                        .HasForeignKey("BussinessId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("BookingAPI.Models.User", "User")
                        .WithMany("Reviews")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Bussiness");

                    b.Navigation("User");
                });

            modelBuilder.Entity("BookingAPI.Models.User", b =>
                {
                    b.Navigation("Appoinments");

                    b.Navigation("Reviews");
                });

            modelBuilder.Entity("EfCoreRelations.Data.Models.Bussiness", b =>
                {
                    b.Navigation("Appoinments");

                    b.Navigation("BussinessServices");

                    b.Navigation("Employee");

                    b.Navigation("Reviews");
                });

            modelBuilder.Entity("EfCoreRelations.Data.Models.Category", b =>
                {
                    b.Navigation("Bussinesses");
                });

            modelBuilder.Entity("EfCoreRelations.Data.Models.City", b =>
                {
                    b.Navigation("Bussinesses");
                });

            modelBuilder.Entity("EfCoreRelations.Data.Models.Employee", b =>
                {
                    b.Navigation("Appoinments");

                    b.Navigation("Services");
                });

            modelBuilder.Entity("EfCoreRelations.Data.Models.Service", b =>
                {
                    b.Navigation("BussinessServices");

                    b.Navigation("Employees");
                });
#pragma warning restore 612, 618
        }
    }
}
