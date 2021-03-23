using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace EfCoreRelations.Data.Migrations
{
    public partial class Remove_BussinessPhoto_From_BussinessPhotoTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "BussinessImage",
                table: "BussinessPhotos");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<byte[]>(
                name: "BussinessImage",
                table: "BussinessPhotos",
                type: "image",
                nullable: true);
        }
    }
}
