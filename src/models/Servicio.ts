import { Model, DataTypes } from 'sequelize';
import { database } from '../database/db';
import { Cliente } from "./Cliente";


export class Servicio extends Model {
    public id!: number;
    public fecha!: string;
    public descripcion!: string;
    public valor!: string;
    public ClienteId!: number;
    public activo!: boolean;
}

export interface ServicioI {
    id: number;
    fecha: string;
    descripcion: string;
    valor: string;
    ClienteId: number;
    activo: boolean;
}

Servicio.init(
    {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true
        },
        fecha: {
            type: DataTypes.STRING,
            defaultValue: true,
            allowNull: false
        },
        descripcion: {
            type: DataTypes.STRING,
            defaultValue: true,
            allowNull: false
        },
        valor: {
            type: DataTypes.STRING,
            defaultValue: true,
            allowNull: false
        },
        activo: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            allowNull: false
        },
    },
    {
        tableName: "servicios",
        sequelize: database,
        timestamps: false
    }
)

Cliente.hasMany(Servicio);
Servicio.belongsTo(Cliente);