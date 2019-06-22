using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace DatingApp.API.Utils
{
    public class JWTGenerator
    {
        private readonly IConfiguration _config;

        public JWTGenerator(IConfiguration config)
        {
            _config = config;
        }

        public string GenerateToken(string username, int id)
        {
            // Dados que serão inseridos no token.
            var claims = new[]
            {
                new Claim(ClaimTypes.NameIdentifier, id.ToString()),
                new Claim(ClaimTypes.Name, username)
            };

            // Secret key do token. A chave gerada está em 'appsettings.json'.
            var key = new SymmetricSecurityKey
                (Encoding.UTF8.GetBytes(_config.GetSection("AppSettings:Token").Value));

            // A Secret Key é criptografada antes de ser inserida no token.
            var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

            // Gera o corpo do token com os dados configurados acima.
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.Now.AddDays(1),
                SigningCredentials = credentials
            };

            // Geração do token.
            var tokenHandler = new JwtSecurityTokenHandler();
            var token = tokenHandler.CreateToken(tokenDescriptor);

            return tokenHandler.WriteToken(token);
        }
    }
}
