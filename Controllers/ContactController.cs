using Microsoft.AspNetCore.Mvc;

namespace printer_project.Controllers
{
    public class ContactController : Controller
    {
        public IActionResult Contact()
        {
            return View();
        }
    }
}
