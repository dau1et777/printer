using Microsoft.AspNetCore.Mvc;

namespace printer_project.Controllers
{
    public class PaymentController : Controller
    {
        public IActionResult Payment()
        {
            return View();
        }
    }
}
