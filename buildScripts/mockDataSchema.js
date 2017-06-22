var schema = {
    "type": "object",
    "properties": {
        "users": {
            "type": "array",
            "minItems": 20,
            "maxItems": 30,
            "items": {
                "type": "object",
                "properties": {
                    "id": {
                        "type": "number",
                        "unique": true,
                        "minimum": 4
                    },
                    "firstName": {
                        "type": "string",
                        "faker": "name.firstName"
                    },
                    "lastName": {
                        "type": "string",
                        "faker": "name.lastName"
                    },
                    "email": {
                        "type": "string",
                        "faker": "internet.email"
                    },
                    "image": {
                        "type": "string",
                        "faker": "image.avatar"
                    }
                },
                "required": ["id", "type", "lastname" , "email", "image"]
            }
        },
        "products": {
            "type": "array",
            "minItems": 20,
            "maxItems": 30,
            "items": {
                "type": "object",
                "properties": {
                    "id": {
                        "type": "number",
                        "unique": true,
                        "minimum": 4
                    },
                    "productName": {
                        "type": "string",
                        "faker": "name.firstName"
                    },
                    "productImage": {
                        "type": "string",
                        "faker": "image.imageUrl"
                    }
                },
                "required": ["id", "type", "productName" , "productImage"]
            }
        }
    },
    "required": ["users", "products"]
};

module.exports = schema;
