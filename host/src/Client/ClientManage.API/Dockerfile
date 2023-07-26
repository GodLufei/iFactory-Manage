FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["src/Client/ClientManage.API/ClientManage.API.csproj", "src/Client/ClientManage.API/"]
RUN dotnet restore "src/Client/ClientManage.API/ClientManage.API.csproj"
COPY . .
WORKDIR "/src/src/Client/ClientManage.API"
RUN dotnet build "ClientManage.API.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "ClientManage.API.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "ClientManage.API.dll"]
