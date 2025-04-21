using Microsoft.AspNetCore.Mvc;

namespace printer_project.Controllers
{
    public class AboutController : Controller
    {
        public IActionResult About()
        {
            return View();
        }
    }
}
