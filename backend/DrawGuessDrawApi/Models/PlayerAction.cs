using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DrawGuessDraw.Api.Models
{
    public abstract class PlayerAction
    {
        public Player Player { get; set; }
    }
}
