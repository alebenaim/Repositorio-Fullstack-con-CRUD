from flask import Flask ,jsonify ,request
# del modulo flask importar la clase Flask y los métodos jsonify,request
from flask_cors import CORS       # del modulo flask_cors importar CORS
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
app=Flask(__name__)  # crear el objeto app de la clase Flask
CORS(app) #modulo cors es para que me permita acceder desde el frontend al backend
# configuro la base de datos, con el nombre el usuario y la clave
app.config['SQLALCHEMY_DATABASE_URI']='mysql+pymysql://root:root@localhost/cajitamusical'
# URI de la BBDD                      driver de la BD  user:clave@URL/nombreBBDD
app.config['SQLALCHEMY_TRACK_MODIFICATIONS']=False #none
db= SQLAlchemy(app)
ma=Marshmallow(app)
 
# defino la tabla
class Producto(db.Model):   # la clase Producto hereda de db.Model     
    id=db.Column(db.Integer, primary_key=True)   #define los campos de la tabla
    img_path=db.Column(db.String(400))
    category=db.Column(db.String(200))
    model=db.Column(db.String(200))
    year=db.Column(db.String(100))
    detail=db.Column(db.String(400))
    price=db.Column(db.Integer)
    stock=db.Column(db.Integer)

    def __init__(self,img_path,category,model,year,detail,price,stock):   #crea el  constructor de la clase
        self.img_path=img_path   # no hace falta el id porque lo crea sola mysql por ser auto_incremento
        self.category=category
        self.model=model
        self.year=year
        self.detail=detail
        self.price=price
        self.stock=stock
 
 
 
with app.app_context():
    db.create_all()  # crea las tablas
#  ************************************************************

class ProductoSchema(ma.Schema):
    class Meta:
        fields=('id','img_path','category','model', 'year','detail','price','stock')
producto_schema=ProductoSchema()            # para crear un producto
productos_schema=ProductoSchema(many=True)  # multiples registros
 
# crea los endpoint o rutas (json)
@app.route('/productos',methods=['GET'])
def get_Productos():
    all_productos=Producto.query.all()     # query.all() lo hereda de db.Model
    result=productos_schema.dump(all_productos)  # .dump() lo hereda de ma.schema
    return jsonify(result)
 
@app.route('/productos/<id>',methods=['GET'])
def get_producto(id):
    producto=Producto.query.get(id)
    return producto_schema.jsonify(producto)

 #endpoint para DELETE
@app.route('/productos/<id>',methods=['DELETE'])
def delete_producto(id):
    producto=Producto.query.get(id)
    db.session.delete(producto)
    db.session.commit()
    return producto_schema.jsonify(producto)

#endpoint para CREATE
@app.route('/productos', methods=['POST']) # crea ruta o endpoint
def create_producto():
    print(request.json)  # request.json contiene el json que envio el cliente
    img_path=request.json['img_path']
    category=request.json['category']
    model=request.json['model']
    year=request.json['year']
    detail=request.json['detail']
    price=request.json['price']
    stock=request.json['stock']

    new_producto=Producto(img_path,category,model,year,detail,price,stock)
    db.session.add(new_producto)
    db.session.commit()
    return producto_schema.jsonify(new_producto)    

#Endpoint para UPDATE
@app.route('/productos/<id>' ,methods=['PUT'])
def update_producto(id):
    producto=Producto.query.get(id)
   
    img_path=request.json['img_path']
    category=request.json['category']
    model=request.json['model']
    year=request.json['year']
    detail=request.json['detail']
    price=request.json['price']
    stock=request.json['stock']
 
    producto.img_path=img_path
    producto.category=category
    producto.model=model
    producto.year=year
    producto.detail=detail
    producto.price=price
    producto.stock=stock
    
    db.session.commit()
    return producto_schema.jsonify(producto)
    

   
 
# programa principal *******************************
if __name__=='__main__':  
    app.run(debug=True, port=5000)  