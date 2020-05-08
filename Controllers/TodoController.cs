using System.Threading.Tasks;
using AngularDemo.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AngularDemo.Controllers
{
    [Route("api/todos")]
    [ApiController]
    public class TodoController : Controller
    {
        private readonly AppDbContext _context;

        public TodoController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet("")]
        public async Task<IActionResult> GetAll()
        {
            return Ok(await _context.Todos.ToListAsync());
        }

        [HttpPost("")]
        public async Task<IActionResult> Create([FromBody] Todo model)
        {
            _context.Todos.Add(model);

            await _context.SaveChangesAsync();

            return Ok(model);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody] Todo model)
        {
            var todo = await _context.Todos.FirstOrDefaultAsync(i => i.Id == id);

            if (todo == null)
            {
                return NotFound();
            }

            todo.Title = model.Title;
            todo.Complete = model.Complete;

            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
