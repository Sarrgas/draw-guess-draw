using DrawGuessDraw.Api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DrawGuessDraw.Api.Services
{
    public class PlayerOrderService
    {
        private readonly List<Player> _players = new List<Player>();

        public PlayerOrderService(List<Player> players)
        {
            _players = players;
        }

        public Player GetPlayerBefore(Player player)
        {
            int idToFind = player.Id > 0 ? player.Id - 1 : _players.Count - 1;
            return _players.FirstOrDefault(p => p.Id == idToFind);
        }
    }
}
