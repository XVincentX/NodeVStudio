using Microsoft.Owin;
using NodeVStudio;
using Owin;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Formatting;
using System.Web;
using System.Web.Http;

[assembly: OwinStartup(typeof(Startup), "Start")]

namespace NodeVStudio
{

    public class Startup
    {
        public void Start(IAppBuilder builder)
        {
            var configuration = new HttpConfiguration();

            configuration.Formatters.Clear();
            configuration.Formatters.Add(new JsonMediaTypeFormatter());
            configuration.Formatters.Add(new BsonMediaTypeFormatter());

            configuration.Routes.IgnoreRoute("axdIgnore", "{resource}.axd/{*pathInfo}");

            configuration.Routes.MapHttpRoute(
                     name: "API Default",
                    routeTemplate: "api/{controller}/{id}",
                    defaults: new { id = RouteParameter.Optional }

            );

            builder.UseWebApi(configuration);

        }
    }
}