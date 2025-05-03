using API.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// DbContext
builder.Services.AddDbContext<DataContext>(options =>
{
    var connectionString = builder.Configuration.GetConnectionString("defaultConnection");
    options.UseSqlite(connectionString);
});

// ✅ CORS policy tanımı
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp", policy =>
    {
        policy
            .AllowAnyHeader()
            .AllowAnyMethod()
            .WithOrigins("http://localhost:3000");
    });
});

builder.Services.AddControllers();
builder.Services.AddOpenApi();

var app = builder.Build();

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



app.UseAuthorization();

app.MapControllers();

app.Run();
