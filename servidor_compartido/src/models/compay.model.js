const { model, Schema } = require('mongoose');

const companySchema = new Schema({
    nameCompany: {
        type: String,
        required: [true, 'Nombre de la empresa es requerido']
    },
    telephoneCompany: {
        type: String,
        required: [true, 'Número de empresa requerido']
    },
    tenantId: {
        type: String,
        required: [true, 'NIT de la empresa requerido'],
        unique: true
    },
    emailCompany: {
        type: String,
        required: [true, 'Correo requerido'],
        unique: true
    },
    directionCompany: {
        type: String,
        required: [true, 'Dirección requerida']
    },
    pdfRunt: {
        type: String,
        required: [false, 'PDF es requerido']
    },
    estado: {
        type: String,
        enum: ['pendiente', 'aprobado', 'denegado', 'inhabilitado', 'activo'],
        default: 'pendiente'
    },
    
});

module.exports = model('company', companySchema, 'companys');
