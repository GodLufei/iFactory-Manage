using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace ProductManage.API.Application.Commands;

public class UpdateProductItemStatusCommand : IRequest<bool>
{
    public string StationNo { get;  set; }
    public int ProductItemId { get;  set; }
    public int ProductStatusId { get; set; }
}