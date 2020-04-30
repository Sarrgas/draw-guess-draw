using DrawGuessDraw.Api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DrawGuessDraw.Api.Storage
{
    public static class ImageStorage
    {
        private static readonly List<Image> _images = new List<Image>();

        public static void AddImage(Image image)
        {
            _images.Add(image);
        }

        public static object GetImage(int index)
        {
            return _images[index].ImageData;
        }
    }
}
