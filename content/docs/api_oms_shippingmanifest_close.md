---
id: shippingmanifest-close
title: Close Shipping Manifest
permalink: docs/shippingmanifest-close.html
---

>Tip
>
> - It is recommended to check out [“Notes for the reader”](/docs/notes-for-reader.html). You might find this helpful as it contains **Guidelines**, **URL Details** and **Terminologies** used here.

## Basic Information

| NAME             | DETAILS                                                                 | 
| :----------------| :---------------------------------------------------------------------  | 
| End Point        | /services/rest/v1/oms/shippingManifest/close                           | 
| Request Type     | POST                                                                     | 
| Header           | 'Accept: application/json'                                               |     




## Request Payload

```js
{
   "shippingManifestCode": "string"
}
```

## Request Parameters

| PARAMETER            | TYPE   | DESCRIPTION            | MANDATORY  | NOTES | 
|:---------------------|:------:|:-----------------------|:----------:|:------| 
| shippingManifestCode | string | Shipping manifest code | Yes        | -     | 
 
 
 


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
   "shippingManifestCode": "string",
   "shippingManifestStatus": {
      "mileStoneCount": 0,
      "currentMileStone": 0,
      "currentStatus": "string",
      "completed": true,
      "successful": true,
      "percentageComplete": 0,
      "id": "string",
      "shippingManifestCode": "string",
      "shippingManifestLink": "string",
      "failedShippingPackages": [
         {
            "code": "string",
            "saleOrderCode": "string",
            "failureReason": "string",
            "cancelled": true
         }
      ],
      "failedShipmentsBatchCode": "string",
      "created": "2020-06-15T13:39:05.629Z",
      "updated": "2020-06-15T13:39:05.629Z"
   }
}
```

## Response Parameters
 
| LEVEL  | PARAMETER                | TYPE    | DESCRIPTION                                | NOTES  | 
|:-------|:-------------------------|:-------:|:-------------------------------------------|:-----------| 
| 1      | successful               | TRUE    | Request success status                     | -          | 
| 2      | message                  | string  | Response message                           | -          | 
| 3      | errors                   | list    | List of errors (if any)                    | -          | 
| 3.1    | code                     | number  | Error code                                 | -          | 
| 3.2    | fieldName                | string  | Field with error                           | -          | 
| 3.3    | description              | string  | Error description                          | -          | 
| 3.4    | message                  | string  | Error message                              | -          | 
| 3.5    | errorParams              | object  | Parameters with error                      | -          | 
| 3.5.1  | additionalProp1          | object  | Parameter 1 with error                     | -          | 
| 3.5.2  | additionalProp2          | object  | Parameter 2 with error                     | -          | 
| 3.5.3  | additionalProp3          | object  | Parameter 3 with error                     | -          | 
| 4      | warnings                 | list    | List of warnings (if any)                  | -          | 
| 4.1    | code                     | number  | Warning code                               | -          | 
| 4.2    | message                  | string  | Warning message                            | -          | 
| 4.3    | description              | string  | Warning description                        | -          | 
| 5      | shippingManifestCode     | string  | Shipping manifest code                     | -          | 
| 6      | shippingManifestStatus   | object  | -                                          | -          | 
| 6.1    | mileStoneCount           | number  | -                                          | -          | 
| 6.2    | currentMileStone         | number  | -                                          | -          | 
| 6.3    | currentStatus            | string  | -                                          | -          | 
| 6.4    | completed                | boolean | true if completed                          | -          | 
| 6.5    | successful               | boolean | true if successful                         | -          | 
| 6.6    | percentageComplete       | number  | -                                          | -          | 
| 6.7    | id                       | string  | -                                          | -          | 
| 6.8    | shippingManifestCode     | string  | Shipping manifest code                     | -          | 
| 6.9    | shippingManifestLink     | string  | Shipping manifest link                     | -          | 
| 6.10   | failedShippingPackages   | object  | List of failed shipping packages           | -          | 
| 6.10.1 | code                     | string  | -                                          | -          | 
| 6.10.2 | saleOrderCode            | string  | Sale order code of shipping package failed | -          | 
| 6.10.3 | failureReason            | string  | Reason for failure of shipping package     | -          | 
| 6.10.4 | cancelled                | boolean | true if cancelled                          | -          | 
| 6.11   | failedShipmentsBatchCode | string  | Batch code of failed shipment              | -          | 
| 6.12   | created                  | date    | Shipment creation date                     | -          | 
| 6.13   | updated                  | date    | Shipment last updated date                 | -          | 
 
 
 



