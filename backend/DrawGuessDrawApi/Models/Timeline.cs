using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DrawGuessDraw.Api.Models
{
    public class Timeline
    {
        public string OriginalWord { get; set; }
        public List<Drawing> Drawings { get; set; }
    }
}
