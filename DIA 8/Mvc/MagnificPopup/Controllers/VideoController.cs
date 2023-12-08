using Microsoft.AspNetCore.Mvc;

namespace Cinfo8.Controllers
{
    public class VideoController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
