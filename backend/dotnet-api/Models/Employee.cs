using System.ComponentModel.DataAnnotations;

namespace EmployeeManagement.Api.Models
{
    public class Employee
    {
        public int EmployeeId { get; set; }

        [Required]
        [StringLength(100)]
        public required string Name { get; set; }

        [Required]
        [EmailAddress]
        [StringLength(100)]
        public required string Email { get; set; }

        [StringLength(20)]
        public string? Phone { get; set; }

        [Required]
        public decimal Salary { get; set; }

        public int DepartmentId { get; set; }
    }
}
