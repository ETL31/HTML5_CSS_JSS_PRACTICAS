using Microsoft.AspNetCore.Mvc;

namespace Neptuno.Controllers
{
    public class CategoriaController : Controller
    {
        public IActionResult Buscar()
        {
            return PartialView();
        }
    }
}
