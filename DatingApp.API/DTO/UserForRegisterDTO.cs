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
    }
}
