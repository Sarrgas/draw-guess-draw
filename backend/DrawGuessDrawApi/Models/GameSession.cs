using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DrawGuessDraw.Api.Models
{
    public class GameSession
    {
        public string RoomCode { get; set; }
        public List<Player> Players { get; set; }
        public List<Rumour> Timelines { get; set; }
    }
}
