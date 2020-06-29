---
id: getshippingpackagedetails
title: Get Shipping Package Details
permalink: docs/getshippingpackagedetails.html
---

>Tip
>
> - It is recommended to check out [“Notes for the reader”](/docs/notes-for-reader.html). You might find this helpful as it contains **Guidelines**, **URL Details** and **Terminologies** used here.

## Basic Information

| NAME             | DETAILS                                                                 | 
| :----------------| :---------------------------------------------------------------------  | 
| End Point        | /services/rest/v1/oms/shippingPackage/getShippingPackageDetails                         | 
| Request Type     | POST                                                                     | 
| Header           | 'Accept: application/json'                                               |     




## Request Payload

```js
{
   "shippingPackageCode": "string"
}
```

## Request Parameters

| PARAMETER           | TYPE   | DESCRIPTION           | MANDATORY  | NOTES | 
|:--------------------|:------:|:----------------------|:----------:|:------| 
| shippingPackageCode | string | Shipping package code | Yes        | -     | 
 

 
 


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
   "shippingPackageDetailDTO": {
      "code": "string",
      "saleOrderCode": "string",
      "statusCode": "string",
      "shippingManifestCode": "string",
      "saleOrderDetails": {
         "code": "string",
         "displayOrderCode": "string",
         "channel": "string",
         "displayOrderDateTime": "2020-06-16T10:31:02.411Z",
         "status": "string",
         "created": "2020-06-16T10:31:02.411Z",
         "updated": "2020-06-16T10:31:02.411Z",
         "notificationEmail": "string",
         "notificationMobile": "string",
         "cod": true,
         "priority": 0,
         "currencyCode": "string",
         "customerCode": "string",
         "billingAddress": {
            "id": "string",
            "name": "string",
            "addressLine1": "string",
            "addressLine2": "string",
            "city": "string",
            "state": "string",
            "country": "string",
            "pincode": "string",
            "phone": "string",
            "email": "string"
         },
         "addresses": [
            {
               "id": "string",
               "name": "string",
               "addressLine1": "string",
               "addressLine2": "string",
               "city": "string",
               "state": "string",
               "country": "string",
               "pincode": "string",
               "phone": "string",
               "email": "string"
            }
         ],
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
         ]
      },
      "saleOrderItems": [
         {
            "saleOrderItemId": 0,
            "code": "string",
            "itemSku": "string",
            "itemName": "string",
            "itemTypeImageUrl": "string",
            "itemTypePageUrl": "string",
            "shelfCode": "string",
            "onHold": true,
            "saleOrderItemCode": "string",
            "statusCode": "string",
            "itemCode": "string",
            "requiresCustomization": true,
            "giftWrap": true,
            "giftMessage": "string",
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
            ]
         }
      ]
   }
}
```

## Response Parameters

| LEVEL     | PARAMETER                | TYPE    | DESCRIPTION                    | NOTES              | 
|:----------|:-------------------------|:-------:|:-------------------------------|:-------------------| 
| 1         | successful               | TRUE    | Request success status         | -                  | 
| 2         | message                  | string  | Response message               |  -                 | 
| 3         | errors                   | list    | List of errors (if any)        | -                  | 
| 3.1       | code                     | number  | Error code                     | -                  | 
| 3.2       | fieldName                | string  | Field with error               | -                  | 
| 3.3       | description              | string  | Error description              | -                  | 
| 3.4       | message                  | string  | Error message                  | -                  | 
| 3.5       | errorParams              | object  | Parameters with error          | -                  | 
| 3.5.1     | additionalProp1          | object  | Parameter 1 with error         | -                  | 
| 3.5.2     | additionalProp2          | object  | Parameter 2 with error         | -                  | 
| 3.5.3     | additionalProp3          | object  | Parameter 3 with error         | -                  | 
| 4         | warnings                 | list    | List of warnings (if any)      | -                  | 
| 4.1       | code                     | number  | Warning code                   | -                  | 
| 4.2       | message                  | string  | Warning message                | -                  | 
| 4.3       | description              | string  | Warning description            | -                  | 
| 5         | shippingPackageDetailDTO | object  | Shipping package details       | -                  | 
| 5.1       | code                     | string  | Shipping package code          | -                  | 
| 5.2       | saleOrderCode            | string  | Sale order code                | -                  | 
| 5.3       | statusCode               | string  | Shipping package status code   | -                  | 
| 5.4       | shippingManifestCode     | string  | Shipping manifest code         | -                  | 
| 5.5       | saleOrderDetails         | object  | Sale order details             | -                  | 
| 5.5.1     | code                     | string  | Sale order code                | -                  | 
| 5.5.2     | displayOrderCode         | string  | Order code to be displayed     | -                  | 
| 5.5.3     | channel                  | string  | -                              | -                  | 
| 5.5.4     | displayOrderDateTime     | date    | Order Date                     | -                  | 
| 5.5.5     | status                   | string  | Sale order status              | -                  | 
| 5.5.6     | created                  | date    | Creation Date                  | -                  | 
| 5.5.7     | updated                  | date    | Updation Date                  | -                  | 
| 5.5.8     | notificationEmail        | string  | Email for notifications        | -                  | 
| 5.5.9     | notificationMobile       | string  | Mobile for notifications       | -                  | 
| 5.5.10    | cod                      | boolean | true if COD                    | -                  | 
| 5.5.11    | priority                 | integer | Order fullfillment priority    | -                  | 
| 5.5.12    | currencyCode             | string  | Currency codes (3 digit)       | -                  | 
| 5.5.13    | customerCode             | string  | Customer code                  | -                  | 
| 5.5.14    | billingAddress           | object  | Billing address information    | -                  | 
| 5.5.14.1  | id                       | string  | Billing address ID             | -                  | 
| 5.5.14.2  | name                     | string  | Name of buyer                  | -                  | 
| 5.5.14.3  | addressLine1             | string  | Precise address                | -                  | 
| 5.5.14.4  | addressLine2             | string  | Additional address information | -                  | 
| 5.5.14.5  | city                     | string  | City Name                      | Eg: Surat          | 
| 5.5.14.6  | state                    | string  | State Name                     | Eg: Gujrat         | 
| 5.5.14.7  | country                  | string  | Country code not name          | -                  | 
| 5.5.14.8  | pincode                  | string  | Area pincode (6 digit)         | Eg: 395006         | 
| 5.5.14.9  | phone                    | string  | Mobile No. (9 digit)           | Default: 999999999 | 
| 5.5.14.10 | email                    | string  | Email ID                       | case insensitive   | 
| 5.5.15    | addresses                | object  | Address information            | -                  | 
| 5.5.15.1  | id                       | string  | Address ID                     | -                  | 
| 5.5.15.2  | name                     | string  | Name                           | -                  | 
| 5.5.15.3  | addressLine1             | string  | Precise address                | -                  | 
| 5.5.15.4  | addressLine2             | string  | Additional address information | -                  | 
| 5.5.15.5  | city                     | string  | City Name                      | Eg: Surat          | 
| 5.5.15.6  | state                    | string  | State Name                     | Eg: Gujrat         | 
| 5.5.15.7  | country                  | string  | Country code not name          | -                  | 
| 5.5.15.8  | pincode                  | string  | Area pincode (6 digit)         | Eg: 395006         | 
| 5.5.15.9  | phone                    | string  | Mobile No. (9 digit)           | Default: 999999999 | 
| 5.5.15.10 | email                    | string  | Email ID                       | case insensitive   | 
| 5.5.16    | customFieldValues        | list    | Custom field details           | -                  | 
| 5.5.16.1  | fieldName                | string  | Field with error               | -                  | 
| 5.5.16.2  | fieldValue               | list    | Custom field value             | -                  | 
| 5.5.16.3  | valueType                | string  | Value type                     | -                  | 
| 5.5.16.4  | displayName              | string  | Name to be displayed           | -                  | 
| 5.5.16.5  | required                 | boolean | true if required               | -                  | 
| 5.5.16.6  | possibleValues           | list    | Allowable values               | -                  | 
| 5.6       | saleOrderItems           | list    | Details of items in sale order | -                  | 
| 5.6.1     | saleOrderItemId          | integer | Sale order item ID             | -                  | 
| 5.6.2     | code                     | string  | Sale order item code           | -                  | 
| 5.6.3     | itemSku                  | string  | Item SKU                       | -                  | 
| 5.6.4     | itemName                 | string  | Item name                      | -                  | 
| 5.6.5     | itemTypeImageUrl         | string  | -                              | -                  | 
| 5.6.6     | itemTypePageUrl          | string  | -                              | -                  | 
| 5.6.7     | shelfCode                | string  | Shelf code for item            | -                  | 
| 5.6.8     | onHold                   | boolean | true if onHold                 | -                  | 
| 5.6.9     | saleOrderItemCode        | string  | Sale order item code           | -                  | 
| 5.6.10    | statusCode               | string  | Sale order item status code    | -                  | 
| 5.6.11    | itemCode                 | string  | Item code                      | -                  | 
| 5.6.12    | requiresCustomization    | boolean | true if customization required | -                  | 
| 5.6.13    | giftWrap                 | boolean | true for gift wrap             | -                  | 
| 5.6.14    | giftMessage              | string  | Message on gift                | -                  | 
| 5.6.15    | customFieldValues        | list    | Custom field details           | -                  | 
| 5.6.15.1  | fieldName                | string  | Field with error               | -                  | 
| 5.6.15.2  | fieldValue               | list    | Custom field value             | -                  | 
| 5.6.15.3  | valueType                | string  | Value type                     | -                  | 
| 5.6.15.4  | displayName              | string  | Name to be displayed           | -                  | 
| 5.6.15.5  | required                 | boolean | true if required               | -                  | 
| 5.6.15.6  | possibleValues           | list    | Allowable values               | -                  | 
 

 



