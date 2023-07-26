FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["src/Quotation/QuotationServiceManagement.Application.Web/QuotationServiceManagement.Application.Web.csproj", "src/Quotation/QuotationServiceManagement.Application.Web/"]
RUN dotnet restore "src/Quotation/QuotationServiceManagement.Application.Web/QuotationServiceManagement.Application.Web.csproj"
COPY . .
WORKDIR "/src/src/Quotation/QuotationServiceManagement.Application.Web"
RUN dotnet build "QuotationServiceManagement.Application.Web.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "QuotationServiceManagement.Application.Web.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "QuotationServiceManagement.Application.Web.dll"]
