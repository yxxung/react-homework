/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "9hv4ju1y9z64yx0",
    "created": "2023-08-17 08:19:37.031Z",
    "updated": "2023-08-17 08:19:37.031Z",
    "name": "todo",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "g6m5jde3",
        "name": "context",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "iy8epmtz",
        "name": "isDone",
        "type": "bool",
        "required": false,
        "unique": false,
        "options": {}
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("9hv4ju1y9z64yx0");

  return dao.deleteCollection(collection);
})
