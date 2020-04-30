using DrawGuessDraw.Api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DrawGuessDraw.Api.Storage
{
    public static class DrawingStorage
    {
        private static readonly List<Drawing> _drawings = new List<Drawing>();

        public static void AddDrawing(Drawing drawing)
        {
            _drawings.Add(drawing);
        }

        public static Drawing GetDrawing(int index)
        {
            return _drawings[index];
        }
    }
}
