using System.ComponentModel.DataAnnotations;

namespace API.Entity;

public class Product
{
    [Key] //Primary Key olarak belirledik
    public int Id {get;set;}
    [Required] //name alanı için zorunluluğu belirttik
    public string? Name { get; set; }
    public string? Description { get; set; }
    public decimal Price { get; set; }
    public bool IsActive { get; set; }
    public string? ImageUrl { get; set; }
    public int Stock { get; set; }
}