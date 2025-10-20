import { Sequelize } from 'sequelize';
import databaseConfig from '../config/database';
import fs from 'fs';
import path from 'path';

const sequelizeService = {
  init: async () => {
    try {
      const connection = new Sequelize(databaseConfig);

      const modelsPath = path.resolve(__dirname, '../models');
      const modelFiles = fs
        .readdirSync(modelsPath)
        .filter((file) => file.endsWith('.js') && file !== 'index.js');

      const models = [];

      for (const file of modelFiles) {
        const modelModule = require(path.join(modelsPath, file));
        const model = modelModule.default || modelModule;

        if (typeof model.init === 'function') {
          model.init(connection);
          models.push(model);
        } else {
          console.warn(`[SEQUELIZE] ${file} tidak memiliki method init().`);
        }
      }

      models.forEach((model) => {
        if (typeof model.associate === 'function') {
          model.associate(connection.models);
        }
      });

      await connection.authenticate();
      console.log('[SEQUELIZE] Database service initialized');
    } catch (error) {
      console.log('[SEQUELIZE] Error during database service initialization');
      console.error(error);
    }
  },
};

export default sequelizeService;
