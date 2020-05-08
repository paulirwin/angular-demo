using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace AngularDemo.Models
{
    public class Todo
    {
        [Key]
        public int Id { get; set; }

        public string Title { get; set; }

        public bool Complete { get; set; }
    }
}
