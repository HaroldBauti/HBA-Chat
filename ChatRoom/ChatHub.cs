using ChatRoom.Controllers;
using Microsoft.AspNetCore.SignalR;

namespace ChatRoom
{
    public class ChatHub:Hub
    {
        public async Task SendMessage (string room,string user,string message)
        {
            await Clients.Group(room).SendAsync("ReceiveMessage", user, message);
        }
        public async Task AddToGroup(string room)
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, room);
            
            //avisar Quien llego
            await Clients.Group(room).SendAsync("ShowWho",$"Alguien se conecto:{Context.ConnectionId}");
        }
    }
}
