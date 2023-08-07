namespace ProductManage.API.DTOs;

public class Page
{
    public int PageSize { get; } = 10;

    public int PageIndex { get; } = 1;

    public int Total { get; set; }
}