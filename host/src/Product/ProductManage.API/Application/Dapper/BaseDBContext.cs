
using System.Data;
using Microsoft.Data.SqlClient;

namespace ProductManage.API.Application.Dapper
{
    public class BaseDbContext
    {
        private string connectionString;
        // sql server数据库
        public BaseDbContext(string settings)
        {
            connectionString = settings;
        }
        public IDbConnection CreateConnection() 
        {
            return new SqlConnection(connectionString);
        }

    }
}