using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace EfCoreRelations.Data.Migrations
{
    public partial class Removed_PhotoColumn_From_BussinessTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Photo",
                table: "Bussinesses");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<byte[]>(
                name: "Photo",
                table: "Bussinesses",
                type: "varbinary(MAX)",
                nullable: true);
        }
    }
}
