using DrawGuessDraw.Api.Models;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace DrawGuessDraw.Api.Utils
{
    /*
     *  Hela denna klass är en workaround för att jag inte fick Request.Cookies att fungera....
     *  Om framtida Jag lyckas få Request.Cookies att fungera istället - byt ut denna!
     */
    public static class CookieUtils
    {
        public static PlayerInfo GetPlayerInfoFromRequest(HttpRequest request)
        {
            var cookie = request.Headers.FirstOrDefault(k => k.Key == "Cookie").Value;
            var jsonString = cookie.ToString().Split('=')[1];
            var playerInfo = JsonConvert.DeserializeObject<PlayerInfo>(jsonString);

            return playerInfo;
        }
    }
}
