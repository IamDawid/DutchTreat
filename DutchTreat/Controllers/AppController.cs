using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DutchTreat.Data;
using DutchTreat.Services;
using DutchTreat.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;




namespace DutchTreat.Controllers
{
    public class AppController : Controller 
    {
       private readonly IMailService _mailService;
        private readonly IDutchRepository _repository;
       public AppController(IMailService mailService, IDutchRepository repository) 
        {
            _mailService = mailService;  //saving it privately too so it can be used for methods
            _repository = repository;
        }
       public IActionResult Index()
        {
            var results = _repository.GetAllProducts();
            return View(results);
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
            return View();
        }
    }
}
