using System;
using System.ComponentModel.DataAnnotations;

namespace DatingApp.API.DTO
{
    public class UserForRegisterDTO
    {
        [Required(ErrorMessage = "É necessário informar o nome de usuário")]
        public string Username { get; set; }

        [Required(ErrorMessage = "É necessário informar a senha")]
        [StringLength(8, MinimumLength = 4, ErrorMessage = "A senha deve possuir entre 4 e 8 caracteres")]
        public string Password { get; set; }

        [Required(ErrorMessage = "É necessário informar o gênero")]
        public string Gender { get; set; }

        [Required(ErrorMessage = "É necessário informar o apelido")]
        public string KnownAs { get; set; }

        [Required(ErrorMessage = "É necessário informar a data de nascimento")]
        public DateTime DateOfBirth { get; set; }

        [Required(ErrorMessage = "É necessário informar a cidade")]
        public string City { get; set; }

        [Required(ErrorMessage = "É necessário informar o país")]
        public string Country { get; set; }

        public DateTime Created { get; set; }

        public DateTime LastActive { get; set; }

        public UserForRegisterDTO()
        {
            Created = DateTime.Now;
            LastActive = DateTime.Now;
        }
    }
}
