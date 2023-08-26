﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Product.Infrastructure;

#nullable disable

namespace ProductManage.API.Migrations
{
    [DbContext(typeof(ProductContext))]
    [Migration("20230826174914_new_new_new_new_new_new")]
    partial class new_new_new_new_new_new
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.0")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("ProductManage.Domain.AggregatesModel.DemandSide", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<string>("BankAccount")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("BankInfo")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PhoneNumber")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Tax")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("DemandSide", "Product");
                });

            modelBuilder.Entity("ProductManage.Domain.AggregatesModel.Product", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<DateTime>("CreateTime")
                        .HasColumnType("datetime2");

                    b.Property<int>("DemandSideId")
                        .HasColumnType("int");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("EndTime")
                        .HasColumnType("datetime2");

                    b.Property<int>("ProductStatusId")
                        .HasColumnType("int");

                    b.Property<int>("QuotationId")
                        .HasColumnType("int");

                    b.Property<DateTime>("StartTime")
                        .HasColumnType("datetime2");

                    b.HasKey("Id");

                    b.HasIndex("DemandSideId");

                    b.ToTable("Product", "Product");
                });

            modelBuilder.Entity("ProductManage.Domain.AggregatesModel.ProductItem", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<int>("Amount")
                        .HasColumnType("int");

                    b.Property<string>("Diameter")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime?>("EndTime")
                        .HasColumnType("datetime2");

                    b.Property<string>("FigureNo")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Length")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<TimeSpan?>("ManHour")
                        .HasColumnType("time");

                    b.Property<string>("Material")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("ProductId")
                        .HasColumnType("int");

                    b.Property<string>("ProductItemName")
                        .IsRequired()
                        .HasMaxLength(40)
                        .HasColumnType("nvarchar(40)");

                    b.Property<int>("ProductStatusId")
                        .HasColumnType("int");

                    b.Property<int>("ProductTypeId")
                        .HasColumnType("int");

                    b.Property<TimeSpan>("ScheduledTime")
                        .HasColumnType("time");

                    b.Property<DateTime?>("StartTime")
                        .HasColumnType("datetime2");

                    b.Property<string>("TechnicalRequirements")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Unit")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("ProductId");

                    b.ToTable("ProductItem", "Product");
                });

            modelBuilder.Entity("ProductManage.Domain.AggregatesModel.ProductItemStep", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<int>("ProductItemId")
                        .HasColumnType("int");

                    b.Property<int>("ProductStatusId")
                        .HasColumnType("int");

                    b.Property<int>("StepIndex")
                        .HasColumnType("int");

                    b.Property<string>("WorkStationNo")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("ProductItemId");

                    b.ToTable("ProductItemStep", "Product");
                });

            modelBuilder.Entity("ProductManage.Domain.AggregatesModel.ProductTechnology", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<int>("ProductTypeId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.ToTable("ProductTechnology", "Product");
                });

            modelBuilder.Entity("ProductManage.Domain.AggregatesModel.ProductTechnologyItem", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<int?>("ProductTechnologyId")
                        .HasColumnType("int");

                    b.Property<int>("StepIndex")
                        .HasColumnType("int");

                    b.Property<int>("TechnologyTypeId")
                        .HasColumnType("int");

                    b.Property<string>("WorkStationNo")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("ProductTechnologyId");

                    b.ToTable("ProductTechnologyItem", "Product");
                });

            modelBuilder.Entity("ProductManage.Domain.AggregatesModel.DemandSide", b =>
                {
                    b.OwnsOne("ProductManage.Domain.AggregatesModel.Address", "Address", b1 =>
                        {
                            b1.Property<int>("DemandSideId")
                                .HasColumnType("int");

                            b1.Property<string>("City")
                                .IsRequired()
                                .HasColumnType("nvarchar(max)")
                                .HasColumnName("City");

                            b1.Property<string>("Province")
                                .IsRequired()
                                .HasColumnType("nvarchar(max)")
                                .HasColumnName("Province");

                            b1.Property<string>("Street")
                                .IsRequired()
                                .HasColumnType("nvarchar(max)")
                                .HasColumnName("Street");

                            b1.Property<string>("ZipCode")
                                .IsRequired()
                                .HasColumnType("nvarchar(max)")
                                .HasColumnName("ZipCode");

                            b1.HasKey("DemandSideId");

                            b1.ToTable("DemandSide", "Product");

                            b1.WithOwner()
                                .HasForeignKey("DemandSideId");
                        });

                    b.Navigation("Address")
                        .IsRequired();
                });

            modelBuilder.Entity("ProductManage.Domain.AggregatesModel.Product", b =>
                {
                    b.HasOne("ProductManage.Domain.AggregatesModel.DemandSide", "DemandSide")
                        .WithMany()
                        .HasForeignKey("DemandSideId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("DemandSide");
                });

            modelBuilder.Entity("ProductManage.Domain.AggregatesModel.ProductItem", b =>
                {
                    b.HasOne("ProductManage.Domain.AggregatesModel.Product", null)
                        .WithMany("ProductItems")
                        .HasForeignKey("ProductId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("ProductManage.Domain.AggregatesModel.ProductItemStep", b =>
                {
                    b.HasOne("ProductManage.Domain.AggregatesModel.ProductItem", null)
                        .WithMany("ProductItemSteps")
                        .HasForeignKey("ProductItemId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("ProductManage.Domain.AggregatesModel.ProductTechnologyItem", b =>
                {
                    b.HasOne("ProductManage.Domain.AggregatesModel.ProductTechnology", null)
                        .WithMany("ProductTechnologyItems")
                        .HasForeignKey("ProductTechnologyId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("ProductManage.Domain.AggregatesModel.Product", b =>
                {
                    b.Navigation("ProductItems");
                });

            modelBuilder.Entity("ProductManage.Domain.AggregatesModel.ProductItem", b =>
                {
                    b.Navigation("ProductItemSteps");
                });

            modelBuilder.Entity("ProductManage.Domain.AggregatesModel.ProductTechnology", b =>
                {
                    b.Navigation("ProductTechnologyItems");
                });
#pragma warning restore 612, 618
        }
    }
}
