using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DrawGuessDraw.Api.Models
{
    public class Image : PlayerAction
    {
        public byte[] ImageData { get; set; }
    }
}
