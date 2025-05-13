from flask import Blueprint, request, jsonify

test_bp = Blueprint('test', __name__)


@test_bp.route("/test-get", methods=["GET"])
def test_get():
    return jsonify({
        "method": "GET",
        "message": "GET request received",
        "args": request.args.to_dict()
    })

@test_bp.route("/test-post", methods=["POST"])
def test_post():
    return jsonify({
        "method": "POST",
        "message": "POST request received",
        "json": request.get_json(silent=True),
        "form": request.form.to_dict()
    })

@test_bp.route("/test-put", methods=["PUT"])
def test_put():
    return jsonify({
        "method": "PUT",
        "message": "PUT request received",
        "json": request.get_json(silent=True)
    })

@test_bp.route("/test-delete", methods=["DELETE"])
def test_delete():
    return jsonify({
        "method": "DELETE",
        "message": "DELETE request received",
        "args": request.args.to_dict()
    })

@test_bp.route("/test-patch", methods=["PATCH"])
def test_patch():
    return jsonify({
        "method": "PATCH",
        "message": "PATCH request received",
        "json": request.get_json(silent=True)
    })

@test_bp.route("/test-options", methods=["OPTIONS"])
def test_options():
    return jsonify({
        "method": "OPTIONS",
        "message": "OPTIONS request received",
        "headers": dict(request.headers)
    })

@test_bp.route("/test-head", methods=["HEAD"])
def test_head():
    # HEAD responses don't include a body
    return ("", 204)

