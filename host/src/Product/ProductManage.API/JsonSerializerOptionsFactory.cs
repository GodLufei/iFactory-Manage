using System.Text.Encodings.Web;
using System.Text.Json;
using System.Text.Unicode;

namespace ProductManage.API;

public static class JsonSerializerOptionsFactory
{
    public static JsonSerializerOptions GetCommonOptions()
    {
        return new JsonSerializerOptions
        {
            Encoder = JavaScriptEncoder.Create(UnicodeRanges.All),
            PropertyNamingPolicy = JsonNamingPolicy.CamelCase
        };
    }
}