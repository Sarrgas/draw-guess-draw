using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DrawGuessDraw.Api.Storage
{
    public static class ImageStorage
    {
        private static readonly List<byte[]> _images = new List<byte[]>();

        public static void AddImage(byte[] image)
        {
            _images.Add(image);
        }

        public static byte[] GetImage(int index)
        {
            return _images[index];
        }
    }
}
