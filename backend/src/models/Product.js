import { Model, DataTypes } from 'sequelize';

export default class Product extends Model {
  static init(sequelize) {
    return super.init(
      {
        product_id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        product_name: {
          type: DataTypes.STRING,
          allowNull: false,
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
        tableName: 'product',
        timestamps: false, // otomatis buat createdAt & updatedAt
      }
    );
  }

  static associate(models) {
    // contoh: Product.belongsTo(models.User, { foreignKey: 'userId' });
  }
}
