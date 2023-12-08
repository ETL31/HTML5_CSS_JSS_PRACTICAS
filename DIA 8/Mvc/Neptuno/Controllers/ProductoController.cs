using Microsoft.AspNetCore.Mvc;

namespace Neptuno.Controllers
{
    public class ProductoController : Controller
    {
        public IActionResult Nuevo()
        {
            return View();
        }
    }
}
