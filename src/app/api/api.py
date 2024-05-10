from flask import Flask, request, jsonify
import psycopg2
from psycopg2 import Error

db_host = "localhost"
db_name = "ponto"
db_user = "root"
db_password = "root"


try:
    connection = psycopg2.connect(
        user=db_user,
        password=db_password,
        host=db_host,
        database=db_name
    )
    cursor = connection.cursor()
    print("Conexão ao PostgreSQL bem-sucedida")

except (Exception, Error) as error:
    print("Erro ao conectar ao PostgreSQL:", error)


app = Flask(__name__)


@app.route('/save', methods=['POST'])
def save_object():
    data = request.json
    id = data.get('id')
    name = data.get('name')
    register = data.get('register')
    date = data.get('date')
    time1 = data.get('time1')
    time2 = data.get('time2')
    time3 = data.get('time3')
    time4 = data.get('time4')

    if not all([id, name, register, date, time1, time2, time3, time4]):
        return jsonify({'error': 'Por favor, forneça todos os campos'}), 400

    try:
 
        cursor.execute("""
            INSERT INTO tabela (id, name, register, date, time1, time2, time3, time4)
            VALUES (%s, %s, %s, %s, %s, %s, %s, %s)
        """, (id, name, register, date, time1, time2, time3, time4))
        connection.commit()
        return jsonify({'message': 'Objeto salvo com sucesso'}), 200

    except (Exception, Error) as error:
        return jsonify({'error': f'Erro ao salvar objeto: {error}'}), 500


if __name__ == '__main__':
    app.run(port=5000)
