using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebApplication1.Controllers
{
    public class hotelController : Controller
    {
        // GET: hotel
        public ActionResult Index()
        {
            return View();
        }
    }
}