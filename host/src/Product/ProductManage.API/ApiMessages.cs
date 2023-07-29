namespace ProductManage.API;

public static class ApiMessages
{
    /// <summary>
    /// SUCCEED
    /// </summary>
    public const string SUCCEED = "SUCCEED";

    /// <summary>
    /// UNAUTHORIZED
    /// </summary>
    public const string UNAUTHORIZED = "UNAUTHORIZED";
}

public static class ApiCodes
{
    /// <summary>
    ///     Success
    /// </summary>
    public const int API_SUCCEED_CODE = 20000;

    /// <summary>
    ///     Authentication failed
    /// </summary>
    public const int API_AUTH_FAILED_CODE = 30000;

    /// <summary>
    ///     Business failed
    /// </summary>
    public const int API_BUSINESS_FAILED_CODE = 40000;

    /// <summary>
    ///     Not Found Data
    /// </summary>z
    public const int API_NOT_FOUND_CODE = 40004;

    /// <summary>
    ///     Unexpected error
    /// </summary>
    public const int API_UNEXPECTED_FAILED_CODE = 50000;

    /// <summary>
    ///     Client error
    /// </summary>
    public const int API_Client_FAILED_CODE = 60000;
}
public static class ApiCodeMap
{
    public static Dictionary<int, int> Maps { get; } =
        new Dictionary<int, int>
        {
            { ApiCodes.API_SUCCEED_CODE, StatusCodes.Status200OK},
            { ApiCodes.API_AUTH_FAILED_CODE, StatusCodes.Status401Unauthorized },
            { ApiCodes.API_NOT_FOUND_CODE, StatusCodes.Status404NotFound },
            { ApiCodes.API_BUSINESS_FAILED_CODE, StatusCodes.Status405MethodNotAllowed },
            { ApiCodes.API_UNEXPECTED_FAILED_CODE, StatusCodes.Status500InternalServerError },
            { ApiCodes.API_Client_FAILED_CODE, StatusCodes.Status400BadRequest }
        };

    public static int GetHttpStatusCode(int errorCode)
    {
        return Maps.ContainsKey(errorCode) ? Maps[errorCode] : StatusCodes.Status500InternalServerError;
    }
}

