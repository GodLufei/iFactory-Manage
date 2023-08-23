using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace ProductManage.API.Application.Commands;

public class DownProductCommand:IRequest<int>
{
    [FromRoute]
    public int Id { get; set; }

    public DownProductCommand(int id)
    {
        Id = id;
    }
}

