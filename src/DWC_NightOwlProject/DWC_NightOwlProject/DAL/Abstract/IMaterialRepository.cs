﻿using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using DWC_NightOwlProject.Data;

namespace DWC_NightOwlProject.DAL.Abstract
{
    public interface IMaterialRepository: IRepository<Material>
    {
        public Material GetBackstoryById(string userId);
        public Material GetQuestById(string userId);
        public List<Material> GetAllQuestsById(string userId);

        public Material GetCharacterByIdandMaterialId(string userId, int id);

        public List<Material> GetAllCharactersById(string userId);
    }
}
