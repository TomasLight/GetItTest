﻿using System.Collections.Generic;
using System.Threading.Tasks;

namespace Domain.Users
{
	public interface IUserService : IDomainService
	{
		Task<IList<User>> GetAsync();
		
		Task<User> GetByIdAsync(int userId);
		
		Task<User> GetByLoginAndPasswordAsync(string login, string password);
	}
}