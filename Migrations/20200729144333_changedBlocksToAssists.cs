using Microsoft.EntityFrameworkCore.Migrations;

namespace FullStack.Migrations
{
    public partial class changedBlocksToAssists : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Blocks",
                table: "Players");

            migrationBuilder.AddColumn<int>(
                name: "Assists",
                table: "Players",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "creationUserID",
                table: "Players",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Assists",
                table: "Players");

            migrationBuilder.DropColumn(
                name: "creationUserID",
                table: "Players");

            migrationBuilder.AddColumn<int>(
                name: "Blocks",
                table: "Players",
                type: "integer",
                nullable: false,
                defaultValue: 0);
        }
    }
}
