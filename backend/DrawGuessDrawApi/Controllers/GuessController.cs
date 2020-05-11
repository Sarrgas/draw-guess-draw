using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DrawGuessDraw.Api.Models;
using DrawGuessDraw.Api.Storage;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DrawGuessDraw.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GuessController : ControllerBase
    {
        [HttpPost]
        [Route("{id}")]
        public IActionResult PostGuess(int id, Guess guess)
        {
            var playerInfo = Utils.CookieUtils.GetPlayerInfoFromRequest(Request);

            var imageModel = new Image { ImageData = ImageStorage.GetImage(id), Player = guess.Player };
            var guessModel = new Guess { GuessData = guess.GuessData, Player = guess.Player };
            var drawingModel = new Drawing { Guess = guessModel, Image = imageModel };
            DrawingStorage.AddDrawing(drawingModel);
            return Ok();
        }
    }
}