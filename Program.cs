using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Localization;
using Microsoft.EntityFrameworkCore;
using printer_project.Models;
using System.Globalization;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews()
    .AddViewLocalization();


#region Auth
builder.Services.AddDbContext<AppIdentityDbContext>(options =>
options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"))
);
builder.Services.AddIdentity<AppUser, IdentityRole>()
	.AddEntityFrameworkStores<AppIdentityDbContext>()
	.AddDefaultTokenProviders();

builder.Services.ConfigureApplicationCookie(option =>
{
	option.LoginPath = "/Account/Login";
	option.AccessDeniedPath = "/denied";
});
#endregion



#region Localization

builder.Services.AddLocalization(options => options.ResourcesPath = "Resources");

builder.Services.Configure<RequestLocalizationOptions>(options =>
{
	var supportedCulture = new[]
	{
		new CultureInfo("kk-KZ"),
		new CultureInfo("ru-RU"),
		new CultureInfo("en-US")
	};

	options.DefaultRequestCulture = new RequestCulture(culture: "kk-KZ", uiCulture: "kk-KZ");
	options.SupportedCultures = supportedCulture;
	options.SupportedUICultures = supportedCulture;
});



#endregion



var app = builder.Build();



#region Localizer
var supportedCulture = new[] { "kk-KZ", "ru-RU", "en-US" };
var localizerOptions = new RequestLocalizationOptions()
	.SetDefaultCulture("kk-KZ")
	.AddSupportedCultures(supportedCulture)
	.AddSupportedUICultures(supportedCulture);

app.UseRequestLocalization(localizerOptions);
#endregion



// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
}
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();
