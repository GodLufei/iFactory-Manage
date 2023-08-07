using MediatR;
using Microsoft.AspNetCore.Mvc;
using ProductManage.API.Application.Commands;

namespace ProductManage.API.Controllers;

[ApiController]
[Produces("application/json")]
[Route("[controller]")]
public class ProductTechnologyController:CommonControllerBase
{
    private readonly IMediator _mediator;

    private readonly ILogger<ProductController> _logger;

    public ProductTechnologyController(IMediator mediator, ILogger<ProductController> logger)
    {
        _mediator = mediator;
        _logger = logger;
    }
    
    
    [ProducesResponseType(typeof(int), StatusCodes.Status201Created)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status500InternalServerError)]
    [HttpPost("")]
    public async Task<IActionResult> Create([FromBody] CreateProductTechnologyCommand createProductTechnologyCommand)
    {
        var result = await _mediator.Send(createProductTechnologyCommand);
        _logger.LogInformation($"create the product succeed: id{result}");
        return Succeed<int>(result, StatusCodes.Status201Created);
    }

}