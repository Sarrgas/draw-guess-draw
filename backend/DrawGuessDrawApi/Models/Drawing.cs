﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DrawGuessDraw.Api.Models
{
    public class Drawing
    {
        public Image Image { get; set; }
        public Guess Guess { get; set; }
    }
}
