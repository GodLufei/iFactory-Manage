using System.Text.Json.Serialization;

namespace ProductManage.API;

public class GenericResponse<T> : GenericResponse
{
    [JsonPropertyName("data")]
    public T Data { get; set; }
}

public class GenericResponse
{
    [JsonPropertyName("message")]
    public string Message { get; set; }
}