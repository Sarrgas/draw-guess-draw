using DrawGuessDraw.Api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DrawGuessDraw.Api.Storage
{
    public static class PlayerStorage
    {
        private static readonly List<Player> _players = new List<Player>();

        public static void AddPlayer(Player player)
        {
            _players.Add(player);
        }

        public static Player GetPlayer(int index)
        {
            return _players[index];
        }
    }
}
