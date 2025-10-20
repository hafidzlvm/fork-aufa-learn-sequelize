import { Model, DataTypes } from 'sequelize';

export default class Product extends Model {
  static init(sequelize) {
    return super.init(
      {
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        description: {
          type: DataTypes.STRING,
        },
        price: {
          type: DataTypes.FLOAT,
          allowNull: false,
        },
        stock: {
          type: DataTypes.INTEGER,
          defaultValue: 0,
        },
      },
      {
        sequelize,
        modelName: 'Product',
        tableName: 'Products',
        timestamps: true, // otomatis buat createdAt & updatedAt
      }
    );
  }

  static associate(models) {
    // contoh: Product.belongsTo(models.User, { foreignKey: 'userId' });
  }
}
