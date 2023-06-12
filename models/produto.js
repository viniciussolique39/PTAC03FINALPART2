const db = require("../db");

class Pessoa {
  static async select() {
    try {
      const connect = await db.connect();
      const sql = "SELECT *FROM pessoas"
      return await connect.query(sql);
    } catch (error) {
      console.error('Erro em select:', error);
      throw error;
    }
  }
  static async selectOne(id) {
    try {
      const connect = await db.connect();
      const sql = "SELECT *FROM pessoas WHERE id=$1";
      return await connect.query(sql,[id]);
    } catch (error) {
      console.error('Erro em select:', error);
      throw error;
    }
  }

  static async insert(data) {
    try {
      const connect = await db.connect();
      const sql = "INSERT INTO pessoas(nome, idade, uf) VALUES ($1, $2, $3) RETURNING id, nome, idade, uf;";
      const values = [data.nome, data.idade, data.uf];
      return await connect.query(sql, values);
    } catch (error) {
      console.error('Erro em insert:', error);
      throw error;
    }
  }

  static async update(id, data) {
    try {
      const connect = await db.connect();
      const sql = "";
      const values = [data.nome, data.idade, data.uf, id];
      return await connect.query(sql, values);
    } catch (error) {
      console.error('Erro em update:', error);
      throw error;
    }
  }

  static async delete(id) {
    try {
      const connect = await db.connect();
      const sql = "DELETE FROM pessoas WHERE id=$1";
      return await connect.query(sql, [id]);
    } catch (error) {
      console.error('Erro em delete:', error);
      throw error;
    }
  }
}

module.exports = Pessoa;
