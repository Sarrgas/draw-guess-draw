using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DrawGuessDraw.Api.Storage
{
    public static class ImageStorage
    {
        private static readonly List<object> _images = new List<object>();

        public static void AddImage(object image)
        {
            _images.Add(image);
        }

        public static object GetImage(int index)
        {
            return _images[index];
        }
    }
}
