using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace FullStack.Models
{
    public class Player
    {
        public int Id { get; set; }
        public string PlayerName { get; set; }
        public string TeamName { get; set; }
        public string Position { get; set; }
        public int JerseyNumber { get; set; }
        public int Points { get; set; }
        public int Rebounds { get; set; }
        public int Steals { get; set; }
        public int Blocks { get; set; }
    }
}