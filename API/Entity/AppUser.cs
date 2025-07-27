using Microsoft.AspNetCore.Identity;

namespace Apı.Entity;

public class AppUser : IdentityUser
{
    public string? Name { get; set; }
}