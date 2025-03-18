using Microsoft.AspNetCore.Mvc;

namespace ChatRoom.Controllers
{
    public class ChatController : Controller
    {
        

        public static Dictionary<int,string> Rooms=
            new Dictionary<int, string>()
            {
                {1,"Sala 1" },
                {2,"Sala 2" },
                {3,"Sala 3" }
            };
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Room(int room)
        {
            return View("Room",room);
        }
    }
}
