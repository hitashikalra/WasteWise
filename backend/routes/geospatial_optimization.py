from flask import Blueprint, request, jsonify
import requests

geo_route = Blueprint('geospatial', __name__)

@geo_route.route('/optimize', methods=['POST'])
def optimize_route():
    data = request.json
    locations = data.get('locations', [])
    here_api_key = "YOUR_HERE_API_KEY"

    # Call HERE API for route optimization
    response = requests.get(
        f'https://router.hereapi.com/v8/routes?apikey={here_api_key}&transportMode=car&origin={locations[0]}&destination={locations[1]}'
    )
    return jsonify(response.json())
