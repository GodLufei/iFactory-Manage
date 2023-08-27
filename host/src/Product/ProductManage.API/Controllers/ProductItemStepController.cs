using MediatR;
using Microsoft.AspNetCore.Mvc;
using ProductManage.API.Application.Commands;
using ProductManage.API.Application.Queries;
using ProductManage.API.DTOs;


namespace ProductManage.API.Controllers;

[ApiController]
[Produces("application/json")]
[Route("api/[controller]")]
public class ProductItemStepController : CommonControllerBase
{
    private readonly IProductQueries _productQueries;
    
    private readonly IMediator _mediator;
    
    public ProductItemStepController(IProductQueries productQueries, IMediator mediator)
    {
        _productQueries = productQueries;
        _mediator = mediator;
    }
    
    [ProducesResponseType(typeof(IEnumerable<AwaitReverseProductItemsGroupDto>), StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status500InternalServerError)]
    [HttpGet("{stationNo}")]
    public async Task<IActionResult> GetListAsync([FromRoute] string stationNo)
    {
        var result = await _productQueries.GetListByStationNoAsync(stationNo);
        return Succeed(result, StatusCodes.Status200OK);
    }
    
    [ProducesResponseType(typeof(bool), StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status500InternalServerError)]
    [HttpPut]
    public async Task<IActionResult> UpdateProductItemStatus(UpdateProductItemStatusCommand updateProductItemStatusCommand )
    {
        var result = await _mediator.Send(updateProductItemStatusCommand);

        return Succeed(result, StatusCodes.Status200OK);
    }
}
