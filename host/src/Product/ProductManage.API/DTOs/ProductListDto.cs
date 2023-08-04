using System.Runtime.Serialization;

namespace ProductManage.API.DTOs;

[DataContract]
public class ProductListDto
{
    [DataMember] public int Id { get; set; }

    [DataMember] public string Description { get; set; }

    [DataMember] public DateTime CreateTime { get; set; }

    [DataMember] public decimal CompletionRate { get; set; }

    [DataMember] public string ProductStatus { get; set; }

    [DataMember] public TimeSpan TotalManHour { get; set; }

    [DataMember] public string AddressDetail { get; set; }
}