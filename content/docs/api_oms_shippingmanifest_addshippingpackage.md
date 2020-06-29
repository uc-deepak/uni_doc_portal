---
id: shippingmanifest-addshippingpackage
title: Add Shipping Package to Manifest
permalink: docs/shippingmanifest-addshippingpackage.html
---

>Tip
>
> - It is recommended to check out [“Notes for the reader”](/docs/notes-for-reader.html). You might find this helpful as it contains **Guidelines**, **URL Details** and **Terminologies** used here.

## Basic Information

| NAME             | DETAILS                                                                 | 
| :----------------| :---------------------------------------------------------------------  | 
| End Point        | /services/rest/v1/oms/shippingManifest/addShippingPackage                           | 
| Request Type     | POST                                                                     | 
| Header           | 'Accept: application/json'                                               |     




## Request Payload

```js
{
   "shippingManifestCode": "string",
   "shippingPackageCodes": [
      "string"
   ]
}
```

## Request Parameters

| PARAMETER            | TYPE   | DESCRIPTION            | MANDATORY  | NOTES | 
|:---------------------|:------:|:-----------------------|:----------:|:------| 
| shippingManifestCode | string | Shipping manifest code | Yes        | -     | 
| shippingPackageCodes | string | Shipping package code  | Yes        | -     | 
 
 
 


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
   "manifestItems": [
      {
         "shippingPackageCode": "string",
         "shippingPackageStatusCode": "string",
         "invoiceCode": "string",
         "invoiceDisplayCode": "string",
         "trackingNumber": "string",
         "quantity": 0,
         "noOfBoxes": 0,
         "weight": 0,
         "totalAmount": 0,
         "shippingCharges": 0,
         "collectableAmount": 0,
         "shippingMethod": "string",
         "shippingAddress": {
            "id": 0,
            "name": "string",
            "addressLine1": "string",
            "addressLine2": "string",
            "city": "string",
            "state": "string",
            "pincode": "string",
            "phone": "string"
         },
         "shippingPackageType": {
            "code": "string",
            "boxLength": 0,
            "boxWidth": 0,
            "boxHeight": 0,
            "boxWeight": 0,
            "packingCost": 0,
            "enabled": true,
            "editable": true
         },
         "displayOrderCode": "string",
         "cashOnDelivery": true,
         "shippingProviderCode": "string",
         "shippingProviderName": "string",
         "manifestLineItems": [
            {
               "lineItemIdentifier": "string",
               "itemName": "string",
               "sellerSkuCode": "string",
               "quantity": 0
            }
         ]
      }
   ]
}
```

## Response Parameters
 
| LEVEL  | PARAMETER                 | TYPE    | DESCRIPTION                    | NOTES              | 
|:-------|:--------------------------|:-------:|:-------------------------------|:-------------------| 
| 1      | successful                | TRUE    | Request success status         | -                  | 
| 2      | message                   | string  | Response message               |  -                 | 
| 3      | errors                    | list    | List of errors (if any)        | -                  | 
| 3.1    | code                      | number  | Error code                     | -                  | 
| 3.2    | fieldName                 | string  | Field with error               | -                  | 
| 3.3    | description               | string  | Error description              | -                  | 
| 3.4    | message                   | string  | Error message                  | -                  | 
| 3.5    | errorParams               | object  | Parameters with error          | -                  | 
| 3.5.1  | additionalProp1           | object  | Parameter 1 with error         | -                  | 
| 3.5.2  | additionalProp2           | object  | Parameter 2 with error         | -                  | 
| 3.5.3  | additionalProp3           | object  | Parameter 3 with error         | -                  | 
| 4      | warnings                  | list    | List of warnings (if any)      | -                  | 
| 4.1    | code                      | number  | Warning code                   | -                  | 
| 4.2    | message                   | string  | Warning message                | -                  | 
| 4.3    | description               | string  | Warning description            | -                  | 
| 5      | manifestItems             | list    | -                              | -                  | 
| 5.1    | shippingPackageCode       | string  | Shipping package code          | -                  | 
| 5.2    | shippingPackageStatusCode | string  | Shipping package status code   | -                  | 
| 5.3    | invoiceCode               | string  | Invoice code                   | -                  | 
| 5.4    | invoiceDisplayCode        | string  | Invoice display code           | -                  | 
| 5.5    | trackingNumber            | string  | Tracking number                | -                  | 
| 5.6    | quantity                  | number  | Qty of the item                | -                  | 
| 5.7    | noOfBoxes                 | number  | No. of boxes                   | -                  | 
| 5.8    | weight                    | number  | Weight of the shipment         | -                  | 
| 5.9    | totalAmount               | number  | Total amount                   | -                  | 
| 5.10   | shippingCharges           | number  | Shipping charges               | -                  | 
| 5.11   | collectableAmount         | number  | Amount to be collected         | -                  | 
| 5.12   | shippingMethod            | string  | Shipping method                | -                  | 
| 5.13   | shippingAddress           | -       | Shipping address of receiver   | -                  | 
| 5.13.1 | id                        | number  | -                              | -                  | 
| 5.13.2 | name                      | string  | Buyer name                     | -                  | 
| 5.13.3 | addressLine1              | string  | Precise address of receiver    | -                  | 
| 5.13.4 | addressLine2              | string  | Additional address information | -                  | 
| 5.13.5 | city                      | string  | City Name                      | Eg: Surat          | 
| 5.13.6 | state                     | string  | State Name                     | Eg: Gujrat         | 
| 5.13.7 | pincode                   | string  | Area pincode (6 digit)         | Eg: 395006         | 
| 5.13.8 | phone                     | string  | Mobile No. (9 digit)           | Default: 999999999 | 
| 5.14   | shippingPackageType       | string  | Shipping package type          | -                  | 
| 5.14.1 | code                      | string  | -                              | -                  | 
| 5.14.2 | boxLength                 | number  | Packing box length (in mm)     | -                  | 
| 5.14.3 | boxWidth                  | number  | Packing box width (in mm)      | -                  | 
| 5.14.4 | boxHeight                 | number  | Packing box height (in mm)     | -                  | 
| 5.14.5 | boxWeight                 | number  | Packing box length (in mm)     | -                  | 
| 5.14.6 | packingCost               | number  | Cost of packaging (in mm)      | -                  | 
| 5.14.7 | enabled                   | boolean | -                              | Default: true      | 
| 5.14.8 | editable                  | boolean | -                              | Default: true      | 
| 5.15   | displayOrderCode          | string  | Order code to be displayed     | -                  | 
| 5.16   | cashOnDelivery            | boolean | true if COD                    | -                  | 
| 5.17   | shippingProviderCode      | string  | Shipping provider code         | -                  | 
| 5.18   | shippingProviderName      | string  | Shipping provider name         | -                  | 
| 5.19   | manifestLineItems         | list    | -                              | -                  | 
| 5.19.1 | lineItemIdentifier        | string  | -                              | -                  | 
| 5.19.2 | itemName                  | string  | Item name                      | -                  | 
| 5.19.3 | sellerSkuCode             | string  | Seller SKU code                | -                  | 
| 5.19.4 | quantity                  | number  | Qty of the item                | Default: 0         | 
 
 

 



