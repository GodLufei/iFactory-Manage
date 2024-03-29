﻿using ProductManage.Domain.SeedWork;
using ProductManage.Domain.Shared.Exceptions;

namespace ProductManage.Domain.Shared.Enums;

public class ProductStatus : Enumeration
{
    public static readonly ProductStatus UnProduct = new(1, "未排期");

    public static readonly ProductStatus AwaitingProduct = new(2, "下发生产");

    public static readonly ProductStatus DoingProduct = new(3, "生产中");

    public static readonly ProductStatus DoneProduct = new(4, "生产完成");

    public static readonly ProductStatus CancelledProduct = new(5, "生产取消");

    public static readonly ProductStatus ScarpProduct = new(6, "生产报废");

    public static readonly ProductStatus ApproveProduct = new(7, "审核完成");

    private ProductStatus(int id, string name)
        : base(id, name)
    {
    }

    private static IEnumerable<ProductStatus> List() => new[] { UnProduct, AwaitingProduct, DoingProduct, DoneProduct, CancelledProduct, ScarpProduct, ApproveProduct };

    public static ProductStatus FromName(string name)
    {
        var state = List()
            .SingleOrDefault(s => string.Equals(s.Name, name, StringComparison.CurrentCultureIgnoreCase));

        if (state == null)
        {
            throw new ProductDomainException($"Possible values for ProductStatus: {string.Join(",", List().Select(s => s.Name))}");
        }

        return state;
    }

    public static ProductStatus From(int id)
    {
        var state = List().SingleOrDefault(s => s.Id == id);

        if (state == null)
        {
            throw new ProductDomainException($"Possible values for ProductStatus: {String.Join(",", List().Select(s => s.Name))}");
        }

        return state;
    }

}