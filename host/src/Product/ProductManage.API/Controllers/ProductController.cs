using MediatR;
using Microsoft.AspNetCore.Mvc;
using ProductManage.API.Application.Commands;
using ProductManage.API.DTOs;

namespace ProductManage.API.Controllers;

[ApiController]
[Produces("application/json")]
[Route("[controller]")]
public class ProductController : CommonControllerBase
{
    private readonly IMediator _mediator;

    private readonly ILogger<ProductController> _logger;

    public ProductController(IMediator mediator, ILogger<ProductController> logger)
    {
        _mediator = mediator;
        _logger = logger;
    }

    [ProducesResponseType(typeof(int), StatusCodes.Status201Created)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status500InternalServerError)]
    [HttpPost("")]
    public async Task<IActionResult> Create([FromBody] CreateProductCommand createProductCommand)
    {
        var result = await _mediator.Send(createProductCommand);
        _logger.LogInformation($"create the product succeed: id{result}");
        return Succeed<int>(result, StatusCodes.Status201Created);
    }

    [ProducesResponseType(typeof(IEnumerable<ProductListDto>), StatusCodes.Status201Created)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status500InternalServerError)]
    [HttpGet("")]
    public async Task<IActionResult> GetListAsync()
    {
        var result = await _mediator.Send(new QueryProductListCommand());
        return Succeed(result, StatusCodes.Status201Created);
    }

    [ProducesResponseType(typeof(IEnumerable<ProductListDto>), StatusCodes.Status201Created)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status500InternalServerError)]
    [HttpGet("{id:int}")]
    public async Task<IActionResult> GetAsync([FromQuery] int id)
    {
        var result = await _mediator.Send(new QueryProductDetailCommand(id));
        return Succeed(result, StatusCodes.Status201Created);
    }


    [ProducesResponseType(typeof(int), StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status500InternalServerError)]
    [HttpPost("productItem/{id}")]
    public async Task<IActionResult> UpdateItem([FromBody] ChangeProductItemCommand changeProductItemCommand)
    {
        var result = await _mediator.Send(changeProductItemCommand);
        _logger.LogInformation($"update the productItem succeed: id{result}");
        return Succeed<int>(result, StatusCodes.Status200OK);
    }

}