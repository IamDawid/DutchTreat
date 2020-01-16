using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DutchTreat.Data;
using DutchTreat.Services;
using DutchTreat.ViewModels;
using Microsoft.AspNetCore.Mvc;




namespace DutchTreat.Controllers
{
    public class AppController : Controller 
    {
       private readonly IMailService _mailService;
       private readonly DutchContext _ctx;
       public AppController(IMailService mailService, DutchContext ctx) 
        {
            _mailService = mailService;  //saving it privately too so it can be used for methods
            _ctx = ctx;
        }
       public IActionResult Index()
        {
            var results = _ctx.Products.ToList();
            return View();
        }


        [HttpGet("contact")]
        public IActionResult Contact()
        {
            return View();
        }

        [HttpPost("contact")]
        public IActionResult Contact(ContactViewModel model)
        {
            if (ModelState.IsValid)
            {
                //send the email
                _mailService.SendMessage("david.d.bialy@gmail.com", model.Subject, $"From: {model.Name} - {model.Email}, Message: {model.Message}");
                ViewBag.UserMessage = "Mail Sent.";
                ModelState.Clear();
  
            }

            return View();
        }

        public IActionResult About()
        {
            return View();
        }

        public IActionResult Shop()
        {
            var results = from p in _ctx.Products
                          orderby p.Category
                          select p;
            return View(results.ToList());
        }
    }
}
