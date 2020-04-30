using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using DrawGuessDraw.Api.Storage;
using DrawGuessDraw.Api.Models;

namespace DrawGuessDraw.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ImageController : ControllerBase
    {
        [HttpPost]
        public IActionResult PostImage([FromBody] Image image)
        {
            ImageStorage.AddImage(image);
            return Ok();
        }

        [HttpGet]
        [Route("{index}")]
        public IActionResult GetImage(int index)
        {
            var image = ImageStorage.GetImage(index);
            return Ok(image);
        }
    }
}