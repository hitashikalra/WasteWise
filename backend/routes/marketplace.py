from flask import Blueprint, request, jsonify

marketplace = Blueprint('marketplace', __name__)

# Mock database
items = []

@marketplace.route('/add-item', methods=['POST'])
def add_item():
    item = request.json
    items.append(item)
    return jsonify({"message": "Item added successfully", "items": items})

@marketplace.route('/get-items', methods=['GET'])
def get_items():
    return jsonify(items)
