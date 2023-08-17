using MediatR;
using Microsoft.AspNetCore.Mvc;
using ProductManage.API.Application.Commands;
using ProductManage.API.Application.Queries;
using ProductManage.API.DTOs;

namespace ProductManage.API.Controllers;

[ApiController]
[Produces("application/json")]
[Route("[controller]")]
public class ProductController : CommonControllerBase
{
    private readonly IMediator _mediator;

    private readonly IProductQueries _productQueries;

    private readonly ILogger<ProductController> _logger;

    public ProductController(IMediator mediator, ILogger<ProductController> logger, IProductQueries productQueries)
    {
        _mediator = mediator;
        _logger = logger;
        _productQueries = productQueries;
    }

    [ProducesResponseType(typeof(int), StatusCodes.Status201Created)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status500InternalServerError)]
    [HttpPost("")]
    public async Task<IActionResult> CreateAsync([FromBody] CreateProductCommand createProductCommand)
    {
        var result = await _mediator.Send(createProductCommand);
        _logger.LogInformation($"create the product succeed: id{result}");
        return Succeed<int>(result, StatusCodes.Status201Created);
    }

    [ProducesResponseType(typeof(ProductPageListDto), StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status500InternalServerError)]
    [HttpGet("")]
    public async Task<IActionResult> GetListAsync([FromQuery] Page page)
    {
        var result = await _mediator.Send(new QueryProductListCommand(page));
        return Succeed(result, StatusCodes.Status200OK);
    }

    [ProducesResponseType(typeof(ProductDetailDto), StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status500InternalServerError)]
    [HttpGet("{id:int}")]
    public async Task<IActionResult> GetAsync([FromRoute] int id)
    {
        var result = await _mediator.Send(new QueryProductDetailCommand(id));
        return Succeed(result, StatusCodes.Status200OK);
    }

    [ProducesResponseType(typeof(int), StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status500InternalServerError)]
    [HttpPost("{id:int}/productItem/{itemId:int}")]
    public async Task<IActionResult> UpdateItemAsync([FromBody] ChangeProductItemCommand changeProductItemCommand)
    {
        var result = await _mediator.Send(changeProductItemCommand);
        _logger.LogInformation($"update the productItem succeed: id{result}");
        return Succeed<int>(result, StatusCodes.Status201Created);
    }

    [ProducesResponseType(typeof(int), StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status500InternalServerError)]
    [HttpDelete("productItem/{id:int}")]
    public async Task<IActionResult> DeleteItemAsync([FromRoute] int id)
    {
        var result = await _mediator.Send(new DeleteProductItemCommand(id));
        _logger.LogInformation($"delete the productItem succeed: id{result}");
        return Succeed(result, StatusCodes.Status200OK);
    }

    [ProducesResponseType(typeof(int), StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status500InternalServerError)]
    [HttpPost("{id:int}/productItem")]
    public async Task<IActionResult> CreateItemAsync([FromBody] CreateProductItemCommand createProductItemCommand)
    {
        var result = await _mediator.Send(createProductItemCommand);
        _logger.LogInformation($"create the productItem succeed: id{result}");
        return Succeed(result, StatusCodes.Status200OK);
    }
    
    [ProducesResponseType(typeof(IEnumerable<AwaitApproveProductItemsGroupDto>), StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status500InternalServerError)]
    [HttpGet("productItem")]
    public async Task<IActionResult> GetAwaitApproveAsync()
    {
        var result = await _productQueries.GetAwaitApproveAsync();
        return Succeed(result, StatusCodes.Status200OK);
    }
    
    [ProducesResponseType(typeof(bool), StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status500InternalServerError)]
    [HttpPatch("{id:int}/productItem/{itemId:int}/approve")]
    public async Task<IActionResult> ApproveItemAsync([FromRoute] int id,[FromRoute] int itemId)
    {
        var result = await _mediator.Send(new ApproveProductItemCommand(id,itemId));
        _logger.LogInformation($"approve the productItem succeed: id{result}");
        return Succeed(result, StatusCodes.Status200OK);
    }

}