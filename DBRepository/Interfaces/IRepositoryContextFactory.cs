﻿using System;
using System.Collections.Generic;
using System.Text;

namespace DBRepository.Interfaces
{
    interface IRepositoryContextFactory
    {
        RepositoryContext CreateDbContext(string connectionString);
    }
}
