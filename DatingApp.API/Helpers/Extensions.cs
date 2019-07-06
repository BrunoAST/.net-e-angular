using Microsoft.AspNetCore.Http;

namespace DatingApp.API.Helpers
{
    public static class Extensions
    {
        public static void AddApplicationError(this HttpResponse response, string message)
        {
            // 'Application-Error': nome do erro que será exibido no cabeçalho
            // juntamente com a mensagem de erro.
            response.Headers.Add("Application-Error", message);

            // Permissões necessárias para que o erro acima seja exibido no cabeçalho.
            response.Headers.Add("Access-Control-Expose-Headers", "Application-Error");
            response.Headers.Add("Access-Control-Allow-Origin", "*");
        }
    }
}