using Microsoft.EntityFrameworkCore.Migrations;

namespace EfCoreRelations.Data.Migrations
{
    public partial class RatingfixedBussiness : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Ratring",
                table: "Bussinesses",
                newName: "Rating");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Rating",
                table: "Bussinesses",
                newName: "Ratring");
        }
    }
}
