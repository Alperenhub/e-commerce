using API.Data;
using API.Entity;
using API.Middlewares;
using Apı.Entity;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// DbContext
builder.Services.AddDbContext<DataContext>(options =>
{
    var connectionString = builder.Configuration.GetConnectionString("defaultConnection");
    options.UseSqlite(connectionString);
});


builder.Services.AddIdentity<AppUser, AppRole>().AddEntityFrameworkStores<DataContext>();

builder.Services.Configure<IdentityOptions>(options =>
{
    options.Password.RequiredLength = 6;
    options.Password.RequireNonAlphanumeric = false;
    options.Password.RequireLowercase = false;
    options.Password.RequireUppercase = false;
    options.Password.RequireDigit = false;

    options.User.RequireUniqueEmail = true;
    options.User.AllowedUserNameCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._@+";
});

// ✅ CORS policy tanımı
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp", policy =>
    {
        policy
            .AllowAnyHeader()
            .AllowAnyMethod()
            .AllowCredentials()
            .WithOrigins("http://localhost:3000");
    });
});

builder.Services.AddControllers();
builder.Services.AddOpenApi();

var app = builder.Build();

app.UseMiddleware<ExceptionHandling>();

// Swagger
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
    app.UseSwaggerUI(options =>
    {
        options.SwaggerEndpoint("/openapi/v1.json", "Demo API");
    });
}


// ✅ CORS middleware'ini doğru sırayla uygula
app.UseCors("AllowReactApp");

app.UseHttpsRedirection();

app.UseStaticFiles();


app.UseAuthorization();

app.MapControllers();

SeedDatabase.Initialize(app);

app.Run();
