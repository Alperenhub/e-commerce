using System.Text;
using API.Data;
using API.Entity;
using API.Middlewares;
using API.Services;
using Apı.Entity;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Scalar.AspNetCore;

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

builder.Services.AddAuthentication(x =>
{
    x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;

})
                .AddJwtBearer(x =>
                {
                    x.RequireHttpsMetadata = false;
                    x.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateIssuer = false,
                        ValidIssuer = "alpy.com",
                        //ValidIssuers = ["",""]
                        ValidateAudience = false,
                        ValidAudience = "abc",
                        ValidateIssuerSigningKey = true,
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(
                            builder.Configuration["JWTSecurity:SecretKey"]!)),
                            ValidateLifetime = true
                    
                    };

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

builder.Services.AddScoped<TokenService>();

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
    app.MapScalarApiReference();
}


// ✅ CORS middleware'ini doğru sırayla uygula
app.UseCors("AllowReactApp");

app.UseHttpsRedirection();

app.UseStaticFiles();


app.UseAuthentication();

app.UseAuthorization();

app.MapControllers();

SeedDatabase.Initialize(app);

app.Run();
