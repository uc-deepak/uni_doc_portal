---
id: adjust-inventory
title: Adjust Inventory
permalink: docs/adjust-inventory.html
---

>Tip
>
> - It is recommended to check out [“Notes for the reader”](/docs/notes-for-reader.html). You might find this helpful as it contains **Guidelines**, **URL Details** and **Terminologies** used here.

## Basic Information

| NAME             | DETAILS                                                                 | 
| :----------------| :---------------------------------------------------------------------  | 
| End Point        | /services/rest/v1/inventory/adjust                         | 
| Request Type     | POST                                                                     | 
| Header           | 'Accept: application/json'                                               |     




## Request Payload

```js
{
   "inventoryAdjustment": {
      "itemSKU": "string",
      "quantity": 0,
      "shelfCode": "string",
      "inventoryType": "GOOD_INVENTORY",
      "transferToShelfCode": "string",
      "sla": 0,
      "adjustmentType": "ADD",
      "remarks": "string"
   },
   "userId": 0
}
```

## Request Parameters

| LEVEL | PARAMETER           | TYPE    | DESCRIPTION                                                          | MANDATORY                         | NOTES                                                                                                     | 
|:------|:--------------------|:-------:|:---------------------------------------------------------------------|:---------------------------------:|:----------------------------------------------------------------------------------------------------------| 
| 1     | inventoryAdjustment | list    | Inventory adjustment details                                         | Yes                               | -                                                                                                         | 
| 1.1   | itemSKU             | string  | Item SKU                                                             | Yes                               | Eg.: Bharat4                                                                                              | 
| 1.2   | quantity            | number  | Qty of the item                                                      | Yes                               | -                                                                                                         | 
| 1.3   | shelfCode           | string  | Shelf code of the item                                               | Yes                               | -                                                                                                         | 
| 1.4   | inventoryType       | enum    | Inventory type                                                       | No                                | Allowable: GOOD\_INVENTORY (default), BAD\_INVENTORY(which is non-sellable), QC\_REJECTED, VIRTUAL\_INVENTORY | 
| 1.5   | transferToShelfCode | string  | Shelf ID where the inventory will get added in case of TRANSFER only | Yes (for inventory transfer only) | -                                                                                                         | 
| 1.6   | sla                 | string  | -                                                                    | No                                | -                                                                                                         | 
| 1.7   | adjustmentType      | enum    | Inventory adjustment type                                            | Yes                               | Allowable: ADD, REMOVE, REPLACE (to update the correct qty.), TRANSFER (to tranfer qty. between shelves)  | 
| 1.8   | remarks             | string  | -                                                                    | No                                | Max. chars: 255                                                                                                         | 
| 2     | userId              | integer | -                                                                    | Yes                               | -                                                                                                         | 
 
 

 
 


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
   ]
}
```

## Response Parameters

| LEVEL | PARAMETER       | TYPE   | DESCRIPTION               | NOTES | 
|:------|:----------------|:------:|:--------------------------|:------| 
| 1     | successful      | TRUE   | Request success status    | -     | 
| 2     | message         | string | Response message          | -     | 
| 3     | errors          | list   | List of errors (if any)   | -     | 
| 3.1   | code            | number | Error code                | -     | 
| 3.2   | fieldName       | string | Field with error          | -     | 
| 3.3   | description     | string | Error description         | -     | 
| 3.4   | message         | string | Error message             | -     | 
| 3.5   | errorParams     | object | Parameters with error     | -     | 
| 3.5.1 | additionalProp1 | object | Parameter 1 with error    | -     | 
| 3.5.2 | additionalProp2 | object | Parameter 2 with error    | -     | 
| 3.5.3 | additionalProp3 | object | Parameter 3 with error    | -     | 
| 4     | warnings        | list   | List of warnings (if any) | -     | 
| 4.1   | code            | number | Warning code              | -     | 
| 4.2   | message         | string | Warning message           | -     | 
| 4.3   | description     | string | Warning description       | -     | 
 
 

 



