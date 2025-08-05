using API.Entity;
using Apı.Entity;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class DataContext(DbContextOptions options) : IdentityDbContext<AppUser, AppRole, string>(options)
{
  
    public DbSet<Product> Products => Set<Product>();  //uyarıyı engellemek için yaptık ayrıca:{ get; set; } = null!;

    public DbSet<Cart> Carts => Set<Cart>();
    public DbSet<Order> Orders => Set<Order>(); 

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        modelBuilder.Entity<Product>().HasData(
            new List<Product> {
                new Product{Id=1, Name="IPhone 15", Description="Telefon açıklaması",ImageUrl="1.jpg",
                Price=70000, IsActive= true, Stock= 100},
                new Product{Id=2, Name="IPhone 16", Description="Telefon açıklaması",ImageUrl="2.jpg",
                Price=73000, IsActive= true, Stock= 100},
                new Product{Id=3, Name="IPhone 16 Pro", Description="Telefon açıklaması",ImageUrl="3.jpg",
                Price=75000, IsActive= true, Stock= 100},
                new Product{Id=4, Name="IPhone 16 Pro Max", Description="Telefon açıklaması",ImageUrl="4.jpg",
                Price=80000, IsActive= true, Stock= 100},
            }
        );
    }
}