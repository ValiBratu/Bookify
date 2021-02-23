using Microsoft.EntityFrameworkCore.Migrations;

namespace EfCoreRelations.Data.Migrations
{
    public partial class Changed_PhoneNumber_ColumnNames_In_Users_and_Bussiness : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "NrTelefon",
                table: "Users",
                newName: "PhoneNumber");

            migrationBuilder.RenameColumn(
                name: "NrTelefon",
                table: "Bussinesses",
                newName: "PhoneNumber");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "PhoneNumber",
                table: "Users",
                newName: "NrTelefon");

            migrationBuilder.RenameColumn(
                name: "PhoneNumber",
                table: "Bussinesses",
                newName: "NrTelefon");
        }
    }
}
