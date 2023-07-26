FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["src/Product/ProductManage.API/ProductManage.API.csproj", "src/Product/ProductManage.API/"]
RUN dotnet restore "src/Product/ProductManage.API/ProductManage.API.csproj"
COPY . .
WORKDIR "/src/src/Product/ProductManage.API"
RUN dotnet build "ProductManage.API.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "ProductManage.API.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "ProductManage.API.dll"]
