---
id: search-itemtype
title: Search Item Type
permalink: docs/search-itemtype.html
---

>Tip
>
> - It is recommended to check out [“Notes for the reader”](/docs/notes-for-reader.html). You might find this helpful as it contains **Guidelines**, **URL Details** and **Terminologies** used here.

## Basic Information

| NAME             | DETAILS                                                                 | 
| :----------------| :---------------------------------------------------------------------  | 
| End Point        | /services/rest/v1/product/itemType/search                     | 
| Request Type     | POST                                                                     | 
| Header           | 'Accept: application/json'                                               |     




## Request Payload

```js
{
   "keyword": "string",
   "productCode": "string",
   "categoryCode": "string",
   "getInventorySnapshot": true,
   "searchOptions": {
      "searchKey": "string",
      "displayLength": 0,
      "displayStart": 0,
      "columns": 0,
      "sortingCols": 0,
      "sortColumnIndex": 0,
      "sortDirection": "string",
      "columnNames": "string",
      "getCount": true
   }
}
```

## Request Parameters

| LEVEL | PARAMETER            | TYPE    | DESCRIPTION                                | MANDATORY  | NOTES           | 
|:------|:---------------------|:-------:|:-------------------------------------------|:----------:|:----------------| 
| 1     | keyword              | string  | Keyword                                    | Opt.       | -               | 
| 2     | productCode          | string  | Product code                               | Opt.       | -               | 
| 3     | categoryCode         | string  | Category code in Uniware, else pass 'null' | Opt.       | -               | 
| 4     | getInventorySnapshot | boolean | -                                          | Opt.       | -               | 
| 5     | searchOptions        | object  | List of filter parameters                  | Opt.       | -               | 
| 5.1   | searchKey            | string  | Search keywords                            | Opt.       | -               | 
| 5.2   | displayLength        | integer | Length displayed                           | Opt.       | Max. chars: 500 | 
| 5.3   | displayStart         | integer | -                                          | Opt.       | -               | 
| 5.4   | columns              | integer | -                                          | Opt.       | -               | 
| 5.5   | sortingCols          | integer | -                                          | Opt.       | -               | 
| 5.6   | sortColumnIndex      | integer | -                                          | Opt.       | -               | 
| 5.7   | sortDirection        | string  | -                                          | Opt.       | -               | 
| 5.8   | columnNames          | string  | -                                          | Opt.       | -               | 
| 5.9   | getCount             | boolean | -                                          | Opt.       | -               | 
 


 
 


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
   "totalRecords": 0,
   "elements": [
      {
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
      }
   ]
}
```

## Response Parameters

| LEVEL  | PARAMETER         | TYPE    | DESCRIPTION                             | NOTES | 
|:-------|:------------------|:-------:|:----------------------------------------|:------| 
| 1      | successful        | TRUE    | Request success status                  | -     | 
| 2      | message           | string  | Response message                        | -     | 
| 3      | errors            | list    | List of errors (if any)                 | -     | 
| 3.1    | code              | number  | Error code                              | -     | 
| 3.2    | fieldName         | string  | Field with error                        | -     | 
| 3.3    | description       | string  | Error description                       | -     | 
| 3.4    | message           | string  | Error message                           | -     | 
| 3.5    | errorParams       | object  | Parameters with error                   | -     | 
| 3.5.1  | additionalProp1   | object  | Parameter 1 with error                  | -     | 
| 3.5.2  | additionalProp2   | object  | Parameter 2 with error                  | -     | 
| 3.5.3  | additionalProp3   | object  | Parameter 3 with error                  | -     | 
| 4      | warnings          | list    | List of warnings (if any)               | -     | 
| 4.1    | code              | number  | Warning code                            | -     | 
| 4.2    | message           | string  | Warning message                         | -     | 
| 4.3    | description       | string  | Warning description                     | -     | 
| 5      | totalRecords      | number  | Total no. of records found              | -     | 
| 6      | elements          | list    | Details of matches found                | -     | 
| 6.1    | skuCode           | string  | SKU code of the item on the marketplace | -     | 
| 6.2    | name              | string  | Item name                               | -     | 
| 6.3    | categoryName      | string  | Category name                           | -     | 
| 6.4    | itemTypeImageUrl  | string  | -                                       | -     | 
| 6.5    | itemTypeImageUrl  | string  | -                                       | -     | 
| 6.6    | openSale          | number  | -                                       | -     | 
| 6.7    | openPurchase      | number  | -                                       | -     | 
| 6.8    | inventory         | number  | Available quantity                      | -     | 
| 6.9    | putawayPending    | number  | -                                       | -     | 
| 6.10   | inPicking         | number  | -                                       | -     | 
| 6.11   | pendingGRN        | number  | -                                       | -     | 
| 6.12   | enabled           | boolean | -                                       | -     | 
| 6.13   | quantityNotFound  | number  | Qty not found                           | -     | 
| 6.14   | quantityDamaged   | number  | Qty found damaged                       | -     | 
| 6.15   | badInventoryCount | number  | Count of bad inventory                  | -     | 
| 6.16   | vendorItemTypes   | object  | -                                       | -     | 
| 6.16.1 | vendorEnabled     | boolean | true if vendor enabled                  | -     | 
| 6.16.2 | vendorCode        | string  | Vendor code                             | -     | 
| 6.16.3 | vendorName        | string  | Vendor name                             | -     | 
| 6.16.4 | vendorSkuCode     | string  | Vendor SKU code                         | -     | 
| 6.16.5 | vendorId          | number  | Vendor ID                               | -     | 
 
 

 



