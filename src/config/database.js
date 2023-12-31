const mongoose = require('mongoose');

const connectDB = async () => {
  console.log('Tentando conectar com o banco de dados');  
  try {
    await mongoose.connect('mongodb://localhost/bdTask', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Conexão com o banco de dados estabelecida');
  } catch (error) {
    console.error('Erro ao conectar-se ao banco de dados:', error);
    process.exit(1); // Encerrar o aplicativo em caso de falha na conexão
  }
};

module.exports = connectDB;