
using System.Data;
using Microsoft.Data.SqlClient;

namespace ProductManage.API.Application.Dapper
{
    public class BaseDbContext
    {
        private string connectionString;
        public IDbConnection Connection { get; set; }
        //
        // sql server数据库
        public BaseDbContext(string settings)
        {
            connectionString = settings;
            Connection = new SqlConnection(connectionString);
        }

    }
}