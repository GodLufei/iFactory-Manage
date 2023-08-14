﻿namespace ProductManage.API.DTOs;

public class ProductTechnologyPageListDto
{
    public ProductTechnologyPageListDto(IEnumerable<ProductTechnologyListDto> productTechnologyListDtos, Page page)
    {
        ProductTechnologyListDtos = productTechnologyListDtos;
        Page = page;
    }

    private IEnumerable<ProductTechnologyListDto> ProductTechnologyListDtos { get; }

    private Page Page { get; }
}

public class ProductTechnologyListDto
{
    public ProductTechnologyListDto(int id, int technologySteps, string? productType,
        IEnumerable<ProductTechnologyItemDto> productTechnologyItemDtos)
    {
        Id = id;
        TechnologySteps = technologySteps;
        ProductType = productType;
        ProductTechnologyItemDtos = productTechnologyItemDtos;
    }

    public int Id { get; set; }

    public int TechnologySteps { get; set; }

    public string? ProductType { get; set; }

    public IEnumerable<ProductTechnologyItemDto> ProductTechnologyItemDtos { get; set; }
}

public class ProductTechnologyItemDto
{
    public int StepIndex { get; set; }

    public string TechnologyType { get; set; }

    public string WorkStationNo { get; set; }
}