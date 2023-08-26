using MediatR;
using Microsoft.AspNetCore.Mvc;
using ProductManage.API.Application.Commands;
using ProductManage.API.Application.Queries;
using ProductManage.API.DTOs;

namespace ProductManage.API.Controllers;

[ApiController]
[Produces("application/json")]
[Route("api/[controller]")]
public class ProductTechnologyController : CommonControllerBase
{
    private readonly IMediator _mediator;

    private readonly ILogger<ProductTechnologyController> _logger;

    private readonly IProductTechnologyQueries _productTechnologyQueries;
    public ProductTechnologyController(IMediator mediator, ILogger<ProductTechnologyController> logger, IProductTechnologyQueries productTechnologyQueries)
    {
        _mediator = mediator;
        _logger = logger;
        _productTechnologyQueries = productTechnologyQueries;
    }

    [ProducesResponseType(typeof(int), StatusCodes.Status201Created)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status500InternalServerError)]
    [HttpPost("")]
    public async Task<IActionResult> Create([FromBody] CreateProductTechnologyCommand createProductTechnologyCommand)
    {
        // TODO 校验不能创建重复的
        var result = await _mediator.Send(createProductTechnologyCommand);
        _logger.LogInformation($"create the productTechnology succeed: id{result}");
        return Succeed(result, StatusCodes.Status201Created);
    }

    [ProducesResponseType(typeof(bool), StatusCodes.Status202Accepted)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status500InternalServerError)]
    [HttpDelete("{id:int}")]
    public async Task<IActionResult> DeleteAsync(DeleteProductTechnologyCommand deleteProductTechnologyCommand)
    {
        var result = await _mediator.Send(deleteProductTechnologyCommand);
        _logger.LogInformation($"delete the productTechnology succeed: id{deleteProductTechnologyCommand.Id}");
        return Succeed(result, StatusCodes.Status202Accepted);
    }

    [ProducesResponseType(typeof(ProductTechnologyPageListDto), StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status500InternalServerError)]
    [HttpGet("")]
    public async Task<IActionResult> GetListAsync([FromQuery] Page page)
    {
        var result = await _productTechnologyQueries.GetListAsync(page.PageSize, page.PageIndex);
        return Succeed(result, StatusCodes.Status200OK);
    }
    
    [ProducesResponseType(typeof(ProductTechnologyPageListDto), StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status500InternalServerError)]
    [HttpGet("{productTypeId:int}")]
    public async Task<IActionResult> GetAsync([FromRoute] int productTypeId)
    {
        var result = await _productTechnologyQueries.GetAsync(productTypeId);
        return Succeed(result, StatusCodes.Status200OK);
    }
    
}