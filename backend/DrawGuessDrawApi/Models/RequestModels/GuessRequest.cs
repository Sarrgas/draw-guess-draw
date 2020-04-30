using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DrawGuessDraw.Api.Models.RequestModels
{
    public class GuessRequest
    {
        public string Guess { get; set; }
        public Player Player { get; set; }
    }
}
