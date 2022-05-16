import { Model, DataTypes } from 'sequelize';
import { database } from '../database/db';

export class Cliente extends Model {
    public id!: number;
    public nombre!: string;
    public correo!: string;
    public direccion!: string;
    public telefono!: string;
  
}

export interface ClienteI {
    id: bigint;
    nombre: string;
    correo: string;
    direccion: string;
    telefono: string;

}

Cliente.init(
    {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        
        correo: {
            type: DataTypes.STRING,
            allowNull: false
        },

        direccion: {
            type: DataTypes.STRING,
            allowNull: false
        },
        telefono: {
            type: DataTypes.STRING,
            allowNull: false
        }
        
    },
    {
        tableName: "clientes",
        sequelize: database,
        timestamps: false
    }
)
