using Microsoft.AspNetCore.Mvc;

namespace printer_project.Controllers
{
    public class CasesController : Controller
    {
        public IActionResult Cases()
        {
            return View();
        }
    }
}
