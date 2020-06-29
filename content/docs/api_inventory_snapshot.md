---
id: inventory-snapshot
title: Get Inventory Snapshot
permalink: docs/inventory-snapshot.html
---

>Tip
>
> - It is recommended to check out [“Notes for the reader”](/docs/notes-for-reader.html). You might find this helpful as it contains **Guidelines**, **URL Details** and **Terminologies** used here.

## Basic Information

| NAME             | DETAILS                                                                 | 
| :----------------| :---------------------------------------------------------------------  | 
| End Point        | /services/rest/v1/inventory/inventorySnapshot/get                       | 
| Request Type     | POST                                                                     | 
| Header           | 'Accept: application/json'                                               |     




## Request Payload

```js
{
   "itemTypeSKUs": [
      "string"
   ],
   "updatedSinceInMinutes": 0
}
```

## Request Parameters

| PARAMETER             | TYPE    | DESCRIPTION                                 | MANDATORY  | NOTES | 
|:----------------------|:-------:|:--------------------------------------------|:----------:|:------| 
| itemTypeSKUs          | list    | List of items in inventory                  | Yes        | -     | 
| updatedSinceInMinutes | integer | Minutes since last update of inventory item | Yes        | -     | 
 
 

 
 


## Response Payload

```js
{
   "successful": true,
   "message": "string",
   "errors": [
      {
         "code": 0,
         "fieldName": "string",
         "description": "string",
         "message": "string",
         "errorParams": {
            "additionalProp1": {},
            "additionalProp2": {},
            "additionalProp3": {}
         }
      }
   ],
   "warnings": [
      {
         "code": 0,
         "message": "string",
         "description": "string"
      }
   ],
   "inventorySnapshots": [
      {
         "itemTypeSKU": "string",
         "inventory": 0,
         "openSale": 0,
         "openPurchase": 0,
         "putawayPending": 0,
         "inventoryBlocked": 0,
         "pendingStockTransfer": 0,
         "vendorInventory": 0,
         "virtualInventory": 0,
         "pendingInventoryAssessment": 0
      }
   ]
}
```

## Response Parameters

| LEVEL | PARAMETER                  | TYPE    | DESCRIPTION                         | NOTES | 
|:------|:---------------------------|:-------:|:------------------------------------|:------| 
| 1     | successful                 | TRUE    | Request success status              | -     | 
| 2     | message                    | string  | Response message                    | -     | 
| 3     | errors                     | list    | List of errors (if any)             | -     | 
| 3.1   | code                       | number  | Error code                          | -     | 
| 3.2   | fieldName                  | string  | Field with error                    | -     | 
| 3.3   | description                | string  | Error description                   | -     | 
| 3.4   | message                    | string  | Error message                       | -     | 
| 3.5   | errorParams                | object  | Parameters with error               | -     | 
| 3.5.1 | additionalProp1            | object  | Parameter 1 with error              | -     | 
| 3.5.2 | additionalProp2            | object  | Parameter 2 with error              | -     | 
| 3.5.3 | additionalProp3            | object  | Parameter 3 with error              | -     | 
| 4     | warnings                   | list    | List of warnings (if any)           | -     | 
| 4.1   | code                       | number  | Warning code                        | -     | 
| 4.2   | message                    | string  | Warning message                     | -     | 
| 4.3   | description                | string  | Warning description                 | -     | 
| 5     | inventorySnapshots         | list    | Inventory details                   | -     | 
| 5.1   | itemTypeSKU                | string  | Item type                           | -     | 
| 5.2   | inventory                  | integer | Available quantity                  | -     | 
| 5.3   | openSale                   | integer | Quantity on sale                    | -     | 
| 5.4   | openPurchase               | integer | -                                   | -     | 
| 5.5   | putawayPending             | integer | Quantity on put-away shelves        | -     | 
| 5.6   | inventoryBlocked           | integer | Blocked inventory                   | -     | 
| 5.7   | pendingStockTransfer       | integer | Quantity pending for stock transfer | -     | 
| 5.8   | vendorInventory            | integer | Inventory at vendor location        | -     | 
| 5.9   | virtualInventory           | integer | -                                   | -     | 
| 5.10  | pendingInventoryAssessment | integer | -                                   | -     | 
 
 

 



