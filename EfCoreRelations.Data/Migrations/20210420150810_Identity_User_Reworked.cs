using Microsoft.EntityFrameworkCore.Migrations;

namespace EfCoreRelations.Data.Migrations
{
    public partial class Identity_User_Reworked : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Appoinments_WebsiteUsers_UserId",
                table: "Appoinments");

            migrationBuilder.DropForeignKey(
                name: "FK_Reviews_WebsiteUsers_UserId",
                table: "Reviews");

            migrationBuilder.DropTable(
                name: "WebsiteUsers");

            migrationBuilder.DropTable(
                name: "UserTypes");

            migrationBuilder.DropIndex(
                name: "IX_Reviews_UserId",
                table: "Reviews");

            migrationBuilder.DropIndex(
                name: "IX_Appoinments_UserId",
                table: "Appoinments");

            migrationBuilder.AddColumn<string>(
                name: "UserId1",
                table: "Reviews",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "UserId1",
                table: "Appoinments",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Reviews_UserId1",
                table: "Reviews",
                column: "UserId1");

            migrationBuilder.CreateIndex(
                name: "IX_Appoinments_UserId1",
                table: "Appoinments",
                column: "UserId1");

            migrationBuilder.AddForeignKey(
                name: "FK_Appoinments_AspNetUsers_UserId1",
                table: "Appoinments",
                column: "UserId1",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Reviews_AspNetUsers_UserId1",
                table: "Reviews",
                column: "UserId1",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Appoinments_AspNetUsers_UserId1",
                table: "Appoinments");

            migrationBuilder.DropForeignKey(
                name: "FK_Reviews_AspNetUsers_UserId1",
                table: "Reviews");

            migrationBuilder.DropIndex(
                name: "IX_Reviews_UserId1",
                table: "Reviews");

            migrationBuilder.DropIndex(
                name: "IX_Appoinments_UserId1",
                table: "Appoinments");

            migrationBuilder.DropColumn(
                name: "UserId1",
                table: "Reviews");

            migrationBuilder.DropColumn(
                name: "UserId1",
                table: "Appoinments");

            migrationBuilder.CreateTable(
                name: "UserTypes",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserTypes", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "WebsiteUsers",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FirstName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    LastName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Password = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PhoneNumber = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TypeId = table.Column<int>(type: "int", nullable: false),
                    UserTypeId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_WebsiteUsers", x => x.Id);
                    table.ForeignKey(
                        name: "FK_WebsiteUsers_UserTypes_UserTypeId",
                        column: x => x.UserTypeId,
                        principalTable: "UserTypes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Reviews_UserId",
                table: "Reviews",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_Appoinments_UserId",
                table: "Appoinments",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_WebsiteUsers_UserTypeId",
                table: "WebsiteUsers",
                column: "UserTypeId");

            migrationBuilder.AddForeignKey(
                name: "FK_Appoinments_WebsiteUsers_UserId",
                table: "Appoinments",
                column: "UserId",
                principalTable: "WebsiteUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Reviews_WebsiteUsers_UserId",
                table: "Reviews",
                column: "UserId",
                principalTable: "WebsiteUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
