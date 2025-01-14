from flask import Flask
from routes.geospatial_optimization import geo_route
from routes.marketplace import marketplace

app = Flask(__name__)

# Register Blueprints
app.register_blueprint(geo_route, url_prefix='/geospatial')
app.register_blueprint(marketplace, url_prefix='/marketplace')

if __name__ == '__main__':
    app.run(debug=True)
