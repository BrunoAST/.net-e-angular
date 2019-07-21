using System;
using System.Collections.Generic;

namespace DatingApp.API.DTO
{
    public class UserForDetailedDto
    {
        public int Id { get; set; }

        public string Username { get; set; }

        public string Gender { get; set; }

        public int Age { get; set; }

        public string KnowAs { get; set; }

        public DateTime Created { get; set; }

        public DateTime LastActive { get; set; }

        public string Introdoction { get; set; }

        public string LookingFor { get; set; }

        public string Interests { get; set; }

        public string City { get; set; }

        public string Country { get; set; }

        public string PhotoUrl { get; set; }

        public ICollection<PhotoForDetailedDto> Photos { get; set; }
    }
}
