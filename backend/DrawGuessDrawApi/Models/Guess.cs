using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DrawGuessDraw.Api.Models
{
    public class Guess : PlayerAction
    {
        public string GuessData { get; set; }
    }
}
