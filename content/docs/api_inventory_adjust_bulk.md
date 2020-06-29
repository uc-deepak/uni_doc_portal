---
id: adjust-inventory-bulk
title: Adjust Inventory - Bulk
permalink: docs/adjust-inventory-bulk.html
---

>Tip
>
> - It is recommended to check out [“Notes for the reader”](/docs/notes-for-reader.html). You might find this helpful as it contains **Guidelines**, **URL Details** and **Terminologies** used here.

## Basic Information

| NAME             | DETAILS                                                                 | 
| :----------------| :---------------------------------------------------------------------  | 
| End Point        | /services/rest/v1/inventory/adjust/bulk                        | 
| Request Type     | POST                                                                     | 
| Header           | 'Accept: application/json'                                               |     




## Request Payload

```js
{
   "inventoryAdjustments": [
      {
         "itemSKU": "string",
         "quantity": 0,
         "shelfCode": "string",
         "inventoryType": "GOOD_INVENTORY",
         "transferToShelfCode": "string",
         "sla": 0,
         "adjustmentType": "ADD",
         "remarks": "string",
         "facilityCode": "string"
      }
   ],
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
| 1.8   | remarks             | string  | -                                                                    | No                                | Max. chars: 255                                                                                           | 
| 1.9   | facilityCode        | string  | Facility ID associated with inventory                                | Yes                               | Eg.: Delhi6                                                                                               | 
| 2     | userId              | integer | -                                                                    | No                                | -                                                                                                         | 
 
 

 
 


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
   "inventoryAdjustmentResponses": [
      {
         "facilityInventoryAdjustment": {
            "itemSKU": "string",
            "quantity": 0,
            "shelfCode": "string",
            "inventoryType": "GOOD_INVENTORY",
            "transferToShelfCode": "string",
            "sla": 0,
            "adjustmentType": "ADD",
            "remarks": "string",
            "facilityCode": "string"
         },
         "successful": true,
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
         ]
      }
   ]
}
```

## Response Parameters

| LEVEL   | PARAMETER                    | TYPE   | DESCRIPTION                                                          | NOTES                                                                                                     | 
|:--------|:-----------------------------|:------:|:---------------------------------------------------------------------|:----------------------------------------------------------------------------------------------------------| 
| 1       | successful                   | TRUE   | Request success status                                               | -                                                                                                         | 
| 2       | message                      | string | Response message                                                     | -                                                                                                         | 
| 3       | errors                       | list   | List of errors (if any)                                              | -                                                                                                         | 
| 3.1     | code                         | number | Error code                                                           | -                                                                                                         | 
| 3.2     | fieldName                    | string | Field with error                                                     | -                                                                                                         | 
| 3.3     | description                  | string | Error description                                                    | -                                                                                                         | 
| 3.4     | message                      | string | Error message                                                        | -                                                                                                         | 
| 3.5     | errorParams                  | object | Parameters with error                                                | -                                                                                                         | 
| 3.5.1   | additionalProp1              | object | Parameter 1 with error                                               | -                                                                                                         | 
| 3.5.2   | additionalProp2              | object | Parameter 2 with error                                               | -                                                                                                         | 
| 3.5.3   | additionalProp3              | object | Parameter 3 with error                                               | -                                                                                                         | 
| 4       | warnings                     | list   | List of warnings (if any)                                            | -                                                                                                         | 
| 4.1     | code                         | number | Warning code                                                         | -                                                                                                         | 
| 4.2     | message                      | string | Warning message                                                      | -                                                                                                         | 
| 4.3     | description                  | string | Warning description                                                  | -                                                                                                         | 
| 5       | inventoryAdjustmentResponses | list   | Array of updated inventory items                                     | -                                                                                                         | 
| 5.1     | facilityInventoryAdjustment  | object | List of updated inventory items                                      | -                                                                                                         | 
| 5.1.1   | itemSKU                      | string | Item SKU                                                             | Eg.: Bharat4                                                                                              | 
| 5.1.2   | quantity                     | number | Qty of the item                                                      | -                                                                                                         | 
| 5.1.3   | shelfCode                    | string | Shelf code for item                                                  | -                                                                                                         | 
| 5.1.4   | inventoryType                | enum   | Inventory type                                                       | Allowable: GOOD\_INVENTORY (default), BAD\_INVENTORY(which is non-sellable), QC\_REJECTED, VIRTUAL\_INVENTORY | 
| 5.1.5   | transferToShelfCode          | string | Shelf ID where the inventory will get added in case of TRANSFER only | -                                                                                                         | 
| 5.1.6   | sla                          | string | -                                                                    | -                                                                                                         | 
| 5.1.7   | adjustmentType               | enum   | Inventory adjustment type                                            | Allowable: ADD, REMOVE, REPLACE (to update the correct qty.), TRANSFER (to tranfer qty. between shelves)  | 
| 5.1.8   | remarks                      | string | -                                                                    | -                                                                                                         | 
| 5.1.9   | facilityCode                 | string | Facility ID associated with inventory                                | Eg.: Delhi6                                                                                               | 
| 5.2     | successful                   | TRUE   | Request success status                                               | -                                                                                                         | 
| 5.3     | errors                       | list   | List of errors (if any)                                              | -                                                                                                         | 
| 5.3.1   | code                         | number | -                                                                    | -                                                                                                         | 
| 5.3.2   | fieldName                    | string | Field name with error                                                | -                                                                                                         | 
| 5.3.3   | description                  | string | Error description                                                    | -                                                                                                         | 
| 5.3.4   | message                      | string | Error message                                                        | -                                                                                                         | 
| 5.3.5   | errorParams                  | object | Parameters with error                                                | -                                                                                                         | 
| 5.3.5.1 | additionalProp1              | object | Parameter 1 with error                                               | -                                                                                                         | 
| 5.3.5.2 | additionalProp2              | object | Parameter 2 with error                                               | -                                                                                                         | 
| 5.3.5.3 | additionalProp3              | object | Parameter 3 with error                                               | -                                                                                                         | 

 

 



