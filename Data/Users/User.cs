namespace Data.Users
{
	public class User : IEntityModel
	{
		public int Id { get; set; }
		
		public string Login { get; set; }
		
		public string Password { get; set; }
		
		public string LastName { get; set; }
		
		public string FirstName { get; set; }
		
		public string Avatar { get; set; }
	}
}