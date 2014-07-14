using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace NodeVStudio.Controllers
{
    public class DefaultController : ApiController
    {
        public IHttpActionResult Get()
        {
            return Ok(new { ID = 0, Text = "Hello" });
        }
    }
}
