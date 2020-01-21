﻿using DutchTreat.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace DutchTreat.Data
{
    public class DutchRepository : IDutchRepository
    {
        private readonly DutchContext _ctx;
        private readonly ILogger<DutchRepository> _logger;

        public DutchRepository(DutchContext ctx, ILogger<DutchRepository> logger)
        {
            _ctx = ctx;
            _logger = logger;
        }

        public IEnumerable<Order> GetAllOrders()
        {
            return _ctx.Orders
                .Include(o => o.Items).ThenInclude(i => i.Product)
                .ToList();
        }

        public IEnumerable<Product> GetAllProducts()
        {
            try
            { 

            _logger.LogInformation("GetAllProducts was called");

            return _ctx.Products
                       .OrderBy(p => p.Title)
                       .ToList();
            }
       
            catch (Exception ex)
            {

            _logger.LogError($"Failed to get all products: {ex}");
            return null;

            }
        }

        public Order GetOrderById(int id)
        {
            return _ctx.Orders
                 .Include(o => o.Items)
                 .Where(o => o.Id == id)
                 .FirstOrDefault();
        }

        public IEnumerable<Product> GetProductsByCategory(string category)
        {
            return _ctx.Products
                .Where(p => p.Category == category)
                .ToList();
        }

        public bool SaveAll()
        {
            return _ctx.SaveChanges() > 0;
        }

        public bool SaveChanges()
        {
            _logger.LogInformation("Save Changes was used");
            return true;
        }
    }
}
