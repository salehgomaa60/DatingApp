using Microsoft.EntityFrameworkCore;
using DatingApp.Api.Models;
namespace DatingApp.Api.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }
        public DbSet<WeatherForecast> WeatherForecasts { get; set; }
           public DbSet<User> Users {get;set;}
    }
}