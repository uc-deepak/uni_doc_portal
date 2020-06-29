---
id: createoredit-itemtype
title: Create or Edit Item Type
permalink: docs/createoredit-itemtype.html
---

>Tip
>
> - It is recommended to check out [“Notes for the reader”](/docs/notes-for-reader.html). You might find this helpful as it contains **Guidelines**, **URL Details** and **Terminologies** used here.

## Basic Information

| NAME             | DETAILS                                                                 | 
| :----------------| :---------------------------------------------------------------------  | 
| End Point        | /services/rest/v1/catalog/itemType/createOrEdit                     | 
| Request Type     | POST                                                                     | 
| Header           | 'Accept: application/json'                                               |     




## Request Payload

```js
{
   "itemType": {
      "categoryCode": "string",
      "skuCode": "string",
      "name": "string",
      "type": "SIMPLE",
      "description": "string",
      "scanIdentifier": "string",
      "length": 0,
      "width": 0,
      "height": 0,
      "weight": 0,
      "minOrderSize": 0,
      "color": "string",
      "size": "string",
      "brand": "string",
      "ean": "string",
      "upc": "string",
      "isbn": "string",
      "maxRetailPrice": 0,
      "basePrice": 0,
      "costPrice": 0,
      "taxTypeCode": "string",
      "gstTaxTypeCode": "string",
      "hsnCode": "string",
      "imageUrl": "string",
      "productPageUrl": "string",
      "features": "string",
      "tat": 0,
      "tags": [
         "string"
      ],
      "itemDetailFieldsText": "string",
      "requiresCustomization": true,
      "shelfLife": 0,
      "expirable": true,
      "enabled": true,
      "componentItemTypes": [
         {
            "itemSku": "string",
            "quantity": 0,
            "price": 0
         }
      ],
      "customFieldValues": [
         {
            "name": "string",
            "value": "string"
         }
      ]
   }
}
```

## Request Parameters

| LEVEL  | PARAMETER             | TYPE    | DESCRIPTION                                                     | MANDATORY                 | NOTES                                                       | 
|:-------|:----------------------|:-------:|:----------------------------------------------------------------|:-------------------------:|:------------------------------------------------------------| 
| 1      | itemType              | object  | Item type                                                       | -                         | -                                                           | 
| 1.1    | categoryCode          | string  | Category code in Uniware, else pass 'null'                      | Yes (for create)          | -                                                           | 
| 1.2    | skuCode               | string  | SKU code of the item on the marketplace                         | Yes (for create and edit) | Eg: BD\_Floral\_3, Min. chars: 3, Pattern: [a-zA-Z0-9-_\\.]+$ | 
| 1.3    | name                  | string  | Item name                                                       | Yes (for create)          | Max chars: 200                                              | 
| 1.4    | type                  | enum    | Item type                                                       | No                        | Allowable: SIMPLE (Default), BUNDLE                         | 
| 1.5    | description           | string  | Error description                                               | No                        | -                                                           | 
| 1.6    | scanIdentifier        | string  | Data to be matched during item scan                             | No                        | -                                                           | 
| 1.7    | length                | number  | Length of the item (in mm)                                      | No                        | -                                                           | 
| 1.8    | width                 | number  | Width of the item (in mm)                                       | No                        | -                                                           | 
| 1.9    | height                | number  | Height of the item (in mm)                                      | No                        | -                                                           | 
| 1.10   | weight                | number  | Weight of the item (in gm)                                      | No                        | -                                                           | 
| 1.11   | minOrderSize          | number  | Minimum order limit                                             | No                        | -                                                           | 
| 1.12   | color                 | string  | Color description                                               | No                        | -                                                           | 
| 1.13   | size                  | string  | Size                                                            | No                        | Format: LxBxH, Unit: mm, Eg: 60.00X40.00X2.00               | 
| 1.14   | brand                 | string  | Brand of the item                                               | No                        | Eg: Bombay Dyeing                                           | 
| 1.15   | ean                   | string  | EAN No.                                                         | No                        | -                                                           | 
| 1.16   | upc                   | string  | UPC code                                                        | No                        | -                                                           | 
| 1.17   | isbn                  | string  | ISBN No.                                                        | No                        | -                                                           | 
| 1.18   | maxRetailPrice        | number  | Max. retail price                                               | No                        | -                                                           | 
| 1.19   | basePrice             | number  | Base price                                                      | No                        | -                                                           | 
| 1.20   | costPrice             | number  | Cost price                                                      | No                        | -                                                           | 
| 1.22   | gstTaxTypeCode        | string  | GST tax code (as defined in Uniware)                            | No                        | -                                                           | 
| 1.23   | hsnCode               | string  | 6 digit uniform code that classifies products worldwide         | No                        | -                                                           | 
| 1.24   | imageUrl              | string  | Image URL of the variant                                        | No                        | Max. chars: 255                                             | 
| 1.25   | productPageUrl        | string  | Item page URL                                                   | No                        | Max. chars: 255                                             | 
| 1.26   | features              | string  | Features of item                                                | No                        | -                                                           | 
| 1.27   | tat                   | number  | Turn-around-time                                                | No                        | -                                                           | 
| 1.28   | tags                  | object  | Item tags for assisting search                                  | No                        | -                                                           | 
| 1.29   | itemDetailFieldsText  | string  | Details of item                                                 | No                        | -                                                           | 
| 1.30   | requiresCustomization | boolean | true if customization required                                  | No                        | -                                                           | 
| 1.31   | shelfLife             | number  | Duration for which item remains in good condition while storing | No                        | -                                                           | 
| 1.32   | expirable             | boolean | true if expirable                                               | No                        | -                                                           | 
| 1.33   | enabled               | boolean | true if enabled on marketplace                                  | No                        | -                                                           | 
| 1.34   | componentItemTypes    | object  | -                                                               | No                        | -                                                           | 
| 1.34.1 | itemSku               | string  | Item component SKU                                              | Yes                       | -                                                           | 
| 1.34.2 | quantity              | number  | Qty of the item component                                       | Yes                       | -                                                           | 
| 1.34.3 | price                 | number  | Price of the item component                                     | Yes                       | -                                                           | 
| 1.35   | customFieldValues     | list    | -                                                               | No                        | -                                                           | 
| 1.35.1 | name                  | string  | Custom field name                                               | Yes                       | -                                                           | 
| 1.35.2 | value                 | string  | Custom field value                                              | No                        | -                                                           | 
 
 


 
 


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
   "itemType": {
      "tat": 0,
      "id": 0,
      "skuCode": "string",
      "categoryCode": "string",
      "name": "string",
      "description": "string",
      "scanIdentifier": "string",
      "length": 0,
      "width": 0,
      "height": 0,
      "weight": 0,
      "color": "string",
      "size": "string",
      "brand": "string",
      "ean": "string",
      "upc": "string",
      "isbn": "string",
      "maxRetailPrice": 0,
      "basePrice": 0,
      "costPrice": 0,
      "taxTypeCode": "string",
      "gstTaxTypeCode": "string",
      "hsnCode": "string",
      "imageUrl": "string",
      "productPageUrl": "string",
      "type": "SIMPLE",
      "requiresCustomization": true,
      "itemDetailFieldsText": "string",
      "enabled": true,
      "tags": [
         "string"
      ],
      "shelfLife": 0,
      "expirable": true,
      "customFieldValues": [
         {
            "fieldName": "string",
            "fieldValue": {},
            "valueType": "string",
            "displayName": "string",
            "required": true,
            "possibleValues": [
               "string"
            ]
         }
      ],
      "componentItemTypes": [
         {
            "itemTypeDTO": {
               "skuCode": "string",
               "name": "string",
               "categoryName": "string",
               "itemTypeImageUrl": "string",
               "itemTypePageUrl": "string",
               "openSale": 0,
               "openPurchase": 0,
               "inventory": 0,
               "putawayPending": 0,
               "inPicking": 0,
               "pendingGRN": 0,
               "enabled": true,
               "quantityNotFound": 0,
               "quantityDamaged": 0,
               "badInventoryCount": 0,
               "vendorItemTypes": [
                  {
                     "vendorEnabled": true,
                     "vendorCode": "string",
                     "vendorName": "string",
                     "vendorSkuCode": "string",
                     "vendorId": 0
                  }
               ]
            },
            "quantity": 0,
            "price": 0,
            "priceRatio": 0
         }
      ]
   }
}
```

## Response Parameters

| LEVEL       | PARAMETER             | TYPE    | DESCRIPTION                                                     | NOTES                                         | 
|:------------|:----------------------|:-------:|:----------------------------------------------------------------|:----------------------------------------------| 
| 1           | successful            | TRUE    | Request success status                                          | -                                             | 
| 2           | message               | string  | Response message                                                | -                                             | 
| 3           | errors                | list    | List of errors (if any)                                         | -                                             | 
| 3.1         | code                  | number  | Error code                                                      | -                                             | 
| 3.2         | fieldName             | string  | Field with error                                                | -                                             | 
| 3.3         | description           | string  | Warning description                                             | -                                             | 
| 3.4         | message               | string  | Error message                                                   | -                                             | 
| 3.5         | errorParams           | object  | Parameters with error                                           | -                                             | 
| 3.5.1       | additionalProp1       | object  | Parameter 1 with error                                          | -                                             | 
| 3.5.2       | additionalProp2       | object  | Parameter 2 with error                                          | -                                             | 
| 3.5.3       | additionalProp3       | object  | Parameter 3 with error                                          | -                                             | 
| 4           | warnings              | list    | List of warnings (if any)                                       | -                                             | 
| 4.1         | code                  | number  | Warning code                                                    | -                                             | 
| 4.2         | message               | string  | Warning message                                                 | -                                             | 
| 4.3         | description           | string  | Warning description                                             | -                                             | 
| 5           | itemType              | object  | Item type                                                       | -                                             | 
| 5.1         | tat                   | number  | Turn-around-time                                                | -                                             | 
| 5.2         | id                    | number  | Item ID                                                         | -                                             | 
| 5.3         | skuCode               | string  | SKU code of the item on the marketplace                         | Eg: BD\_Floral\_3                               | 
| 5.4         | categoryCode          | string  | Category code                                                   | -                                             | 
| 5.5         | name                  | string  | Item name                                                       | -                                             | 
| 5.6         | description           | string  | Item description                                                | -                                             | 
| 5.7         | scanIdentifier        | string  | Data to be matched during item scan                             | -                                             | 
| 5.8         | length                | number  | Length of the item (in mm)                                      | -                                             | 
| 5.9         | width                 | number  | Width of the item                                               | -                                             | 
| 5.10        | height                | number  | Height of the item (in mm)                                      | -                                             | 
| 5.11        | weight                | number  | Weight of the item                                              | -                                             | 
| 5.12        | color                 | string  | Color description                                               | -                                             | 
| 5.13        | size                  | string  | Size                                                            | Format: LxBxH, Unit: mm, Eg: 60.00X40.00X2.00 | 
| 5.14        | brand                 | string  | Brand of the item                                               | Eg: Bombay Dyeing                             | 
| 5.15        | ean                   | string  | EAN No.                                                         | -                                             | 
| 5.16        | upc                   | string  | UPC code                                                        | -                                             | 
| 5.17        | isbn                  | string  | ISBN No.                                                        | -                                             | 
| 5.18        | maxRetailPrice        | number  | Max. retail price                                               | -                                             | 
| 5.19        | basePrice             | number  | Base price                                                      | -                                             | 
| 5.20        | costPrice             | number  | Cost price                                                      | -                                             | 
| 5.22        | gstTaxTypeCode        | string  | GST tax code (as defined in Uniware)                            | -                                             | 
| 5.23        | hsnCode               | string  | 6 digit uniform code that classifies products worldwide         | -                                             | 
| 5.24        | imageUrl              | string  | Image URL of the variant                                        | -                                             | 
| 5.25        | productPageUrl        | string  | Item page URL                                                   | -                                             | 
| 5.26        | type                  | enum  | Item type                                                       | Allowable: SIMPLE (Default), BUNDLE                                             | 
| 5.27        | requiresCustomization | boolean | true if customization required                                  | -                                             | 
| 5.28        | itemDetailFieldsText  | string  | Details of item                                                 | -                                             | 
| 5.29        | enabled               | boolean | true if enabled on marketplace                                  | -                                             | 
| 5.30        | tags                  | object  | Item tags for assisting search                                  | -                                             | 
| 5.31        | shelfLife             | number  | Duration for which item remains in good condition while storing | -                                             | 
| 5.32        | expirable             | boolean | true if expirable                                               | -                                             | 
| 5.33        | customFieldValues     | list    | -                                                               | -                                             | 
| 5.33.1      | fieldName             | string  | Custom field name                                               | -                                             | 
| 5.33.2      | fieldValue            | list    | Custom field value                                              | -                                             | 
| 5.33.3      | valueType             | string  | Value type                                                      | -                                             | 
| 5.33.4      | displayName           | string  | Name to be displayed                                            | -                                             | 
| 5.33.5      | required              | boolean | true if required                                                | -                                             | 
| 5.33.6      | possibleValues        | list    | Allowable values                                                | -                                             | 
| 5.34        | componentItemTypes    | object  | -                                                               | -                                             | 
| 5.34.1      | itemTypeDTO           | object  | -                                                               | -                                             | 
| 5.34.1.1    | skuCode               | string  | SKU code of the item on the marketplace                         | -                                             | 
| 5.34.1.2    | name                  | string  | Item component name                                             | -                                             | 
| 5.34.1.3    | categoryName          | string  | Category name                                                   | -                                             | 
| 5.34.1.4    | itemTypeImageUrl      | string  | Item type image URL                                             | -                                             | 
| 5.34.1.5    | itemTypePageUrl       | string  | Item type page URL                                              | -                                             | 
| 5.34.1.6    | openSale              | number  | -                                                               | -                                             | 
| 5.34.1.7    | openPurchase          | number  | -                                                               | -                                             | 
| 5.34.1.8    | inventory             | number  | Available quantity                                              | -                                             | 
| 5.34.1.9    | putawayPending        | number  | -                                                               | -                                             | 
| 5.34.1.10   | inPicking             | number  | -                                                               | -                                             | 
| 5.34.1.11   | pendingGRN            | number  | -                                                               | -                                             | 
| 5.34.1.12   | enabled               | boolean | true if enabled on marketplace                                  | -                                             | 
| 5.34.1.13   | quantityNotFound      | number  | Qty not found                                                   | -                                             | 
| 5.34.1.14   | quantityDamaged       | number  | Qty found damaged                                               | -                                             | 
| 5.34.1.15   | badInventoryCount     | number  | Count of bad inventory                                          | -                                             | 
| 5.34.1.16   | vendorItemTypes       | object  | -                                                               | -                                             | 
| 5.34.1.16.1 | vendorEnabled         | boolean | true if vendor enabled                                          | -                                             | 
| 5.34.1.16.2 | vendorCode            | string  | Vendor code                                                     | -                                             | 
| 5.34.1.16.3 | vendorName            | string  | Vendor name                                                     | -                                             | 
| 5.34.1.16.4 | vendorSkuCode         | string  | Vendor SKU code                                                 | -                                             | 
| 5.34.1.16.5 | vendorId              | number  | Vendor ID                                                       | -                                             | 
| 5.34.2      | quantity              | number  | Qty of the item                                                 | -                                             | 
| 5.34.3      | price                 | number  | Price                                                           | -                                             | 
| 5.34.4      | priceRatio            | number  | Price ratio                                                     | -                                             | 
 
 
 

 



