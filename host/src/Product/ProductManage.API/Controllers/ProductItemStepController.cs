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
    
    public ProductItemStepController(IProductQueries productQueries)
    {
        _productQueries = productQueries;
    }

    [ProducesResponseType(typeof(IEnumerable<AwaitReverseProductItemsGroupDto>), StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status500InternalServerError)]
    [HttpPost("{stationNo}")]
    public async Task<IActionResult> Get([FromRoute] string stationNo)
    {
        var result = await _productQueries.GetListByStationNoAsync(stationNo);
        return Succeed(result, StatusCodes.Status201Created);
    }
    
    [ProducesResponseType(typeof(IEnumerable<AwaitReverseProductItemsGroupDto>), StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status500InternalServerError)]
    [HttpPut("{stationNo}/{productItemId:int}")]
    public async Task<IActionResult> UpdateStatus([FromRoute] string stationNo)
    {
        var result = await _productQueries.GetListByStationNoAsync(stationNo);
        return Succeed(result, StatusCodes.Status201Created);
    }
}