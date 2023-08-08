using ProductManage.API.DTOs;

namespace ProductManage.API.Application.Queries;

public interface IProductTechnologyQueries
{
    Task<ProductTechnologyPageListDto> GetListAsync(int pageSize,int pageIndex);
}