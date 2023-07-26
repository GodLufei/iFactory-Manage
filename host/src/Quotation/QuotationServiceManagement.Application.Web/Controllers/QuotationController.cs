using MediatR;
using Microsoft.AspNetCore.Mvc;
using QuotationManagement.Application.Service.Quotation.Commands;

namespace QuotationServiceManagement.Application.Web.Controllers
{
    [ApiController]
    [Produces("application/json")]
    [Route("[controller]")]
    public class QuotationController : CommonControllerBase
    {
        private readonly IMediator _mediator;

        private readonly ILogger<QuotationController> _logger;

        public QuotationController(IMediator mediator, ILogger<QuotationController> logger)
        {
            _mediator = mediator;
            _logger = logger;
        }

        [ProducesResponseType(typeof(IEnumerable<>), StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        [HttpPost("")]
        public async Task<IActionResult> Create([FromBody] CreateQuotationCommand createQuotationCommand)
        {
            var result = await _mediator.Send(createQuotationCommand);
            _logger.LogInformation($"create the quotation succeed: id{result}");
            return Succeed<int>(result, StatusCodes.Status201Created);
        }
    }
}