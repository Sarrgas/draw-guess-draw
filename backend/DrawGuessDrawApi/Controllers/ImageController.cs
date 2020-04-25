using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using DrawGuessDraw.Api.Storage;

namespace DrawGuessDraw.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ImageController : ControllerBase
    {
        [HttpPost]
        public IActionResult PostImage(byte[] image)
        {
            ImageStorage.AddImage(image);
            return null;
        }

        [HttpGet]
        public IActionResult GetImage(int index)
        {
            var image = ImageStorage.GetImage(index);
            return null;
        }
    }
}