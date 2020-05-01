using DrawGuessDraw.Api.Models;
using DrawGuessDraw.Api.Services;
using NUnit.Framework;
using System.Collections.Generic;

namespace DrawGuessDraw.Tests
{
    public class PlayerOrderServiceTests
    {
        private PlayerOrderService _playerOrderService;
        [SetUp]
        public void Setup()
        {
            List<Player> players = new List<Player>
            {
                new Player{Id = 0, Name = "Andreas", RoomCode = "abc123"},
                new Player{Id = 1, Name = "Daniel", RoomCode = "abc123"},
                new Player{Id = 2, Name = "Edward", RoomCode = "abc123"},
                new Player{Id = 3, Name = "Love", RoomCode = "abc123"},
                new Player{Id = 4, Name = "Matilda", RoomCode = "abc123"},
                new Player{Id = 5, Name = "Jonas", RoomCode = "abc123"},
                new Player{Id = 6, Name = "Elias", RoomCode = "abc123"},
            };
            _playerOrderService = new PlayerOrderService(players);
        }

        [Test]
        public void PlayerOrder_GetPlayerBefore_Start()
        {
            Player subject = new Player { Id = 0, Name = "Andreas", RoomCode = "abc123" };
            Player expected = new Player { Id = 6, Name = "Elias", RoomCode = "abc123" };

            Player actual = _playerOrderService.GetPlayerBefore(subject);

            Assert.AreEqual(expected.Id, actual.Id);
        }

        [Test]
        public void PlayerOrder_GetPlayerBefore_Middle()
        {
            Player subject = new Player { Id = 3, Name = "Love", RoomCode = "abc123" };
            Player expected = new Player { Id = 2, Name = "Edward", RoomCode = "abc123" };

            Player actual = _playerOrderService.GetPlayerBefore(subject);

            Assert.AreEqual(expected.Id, actual.Id);
        }

        [Test]
        public void PlayerOrder_GetPlayerBefore_End()
        {
            Player subject = new Player { Id = 6, Name = "Elias", RoomCode = "abc123" };
            Player expected = new Player { Id = 5, Name = "Jonas", RoomCode = "abc123" };

            Player actual = _playerOrderService.GetPlayerBefore(subject);

            Assert.AreEqual(expected.Id, actual.Id);
        }
    }
}