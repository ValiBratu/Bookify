using Microsoft.EntityFrameworkCore.Migrations;

namespace EfCoreRelations.Data.Migrations
{
    public partial class Remove_BussinessServices_Table : Migration
    {

        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "BussinessServices");

            migrationBuilder.AddColumn<int>(
                name: "BussinessId",
                table: "Services",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<decimal>(
                name: "ServicePrice",
                table: "Services",
                type: "decimal",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.CreateIndex(
                name: "IX_Services_BussinessId",
                table: "Services",
                column: "BussinessId");

            migrationBuilder.AddForeignKey(
                name: "FK_Services_Bussinesses_BussinessId",
                table: "Services",
                column: "BussinessId",
                principalTable: "Bussinesses",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            //migrationBuilder.DropForeignKey(
            //    name: "FK_Services_Bussinesses_BussinessId",
            //    table: "Services");

            migrationBuilder.DropIndex(
                name: "IX_Services_BussinessId",
                table: "Services");

            migrationBuilder.DropColumn(
                name: "BussinessId",
                table: "Services");

            migrationBuilder.DropColumn(
                name: "ServicePrice",
                table: "Services");

            migrationBuilder.CreateTable(
                name: "BussinessServices",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    BussinessId = table.Column<int>(type: "int", nullable: false),
                    ServiceId = table.Column<int>(type: "int", nullable: false),
                    ServicePrice = table.Column<decimal>(type: "decimal", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BussinessServices", x => x.Id);
                    table.ForeignKey(
                        name: "FK_BussinessServices_Bussinesses_BussinessId",
                        column: x => x.BussinessId,
                        principalTable: "Bussinesses",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_BussinessServices_Services_ServiceId",
                        column: x => x.ServiceId,
                        principalTable: "Services",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_BussinessServices_BussinessId",
                table: "BussinessServices",
                column: "BussinessId");

            migrationBuilder.CreateIndex(
                name: "IX_BussinessServices_ServiceId",
                table: "BussinessServices",
                column: "ServiceId");
        }
    }
}
