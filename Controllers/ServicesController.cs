using Microsoft.AspNetCore.Mvc;

namespace printer_project.Controllers
{
    public class ServicesController : Controller
    {
        public IActionResult Services()
        {
            return View();
        }
    }
}
