using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace ProductManage.API.Application.Commands;

public class UpdateProductItemStatusCommand : IRequest<bool>
{
    public UpdateProductItemStatusCommand(string stationNo, int productItemId, int productStatusId)
    {
        StationNo = stationNo;
        ProductItemId = productItemId;
        ProductStatusId = productStatusId;
    }

    [FromRoute] public string StationNo { get; set; }

    [FromRoute] public int ProductItemId { get; set; }

    public int ProductStatusId { get; set; }
}