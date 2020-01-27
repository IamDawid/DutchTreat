﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace DutchTreat.ViewModels
{
    public class LoginViewModel
    {
      [Required]
      public string Username { get; set; }
      [Required]
      public string Password { get; set; }
      public bool RememberMe { get; set; }
    }
}
