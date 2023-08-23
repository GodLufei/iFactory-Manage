using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ProductManage.API.Migrations
{
    public partial class bankAccount_Product : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "BankAccount",
                schema: "Product",
                table: "DemandSide",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "BankAccount",
                schema: "Product",
                table: "DemandSide");
        }
    }
}
