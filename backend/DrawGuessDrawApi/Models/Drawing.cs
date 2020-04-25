using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DrawGuessDraw.Api.Models
{
    public class Drawing
    {
        public byte[] Image { get; set; }
        public string Guess { get; set; }
    }
}
