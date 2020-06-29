---
id: createinvoice-by-saleordercode
title: Create Invoice by Sale Order Code
permalink: docs/createinvoice-by-saleordercode.html
---

>Tip
>
> - It is recommended to check out [“Notes for the reader”](/docs/notes-for-reader.html). You might find this helpful as it contains **Guidelines**, **URL Details** and **Terminologies** used here.

## Basic Information

| NAME             | DETAILS                                                                 | 
| :----------------| :---------------------------------------------------------------------  | 
| End Point        | /services/rest/v1/createInvoiceBySaleOrderCode                         | 
| Request Type     | POST                                                                     | 
| Header           | 'Accept: application/json'                                               |     




## Request Payload

```js
{
   "saleOrderCode": "string",
   "saleOrderItemCodes": [
      "string"
   ],
   "commitBlockedInventory": true,
   "userId": 0,
   "taxInformation": {
      "productTaxes": [
         {
            "channelProductId": "string",
            "additionalInfo": "string",
            "taxPercentage": 0,
            "centralGst": 0,
            "stateGst": 0,
            "unionTerritoryGst": 0,
            "integratedGst": 0,
            "compensationCess": 0,
            "customFieldValues": [
               {
                  "name": "string",
                  "value": "string"
               }
            ]
         }
      ]
   }
}
```

## Request Parameters

| LEVEL   | PARAMETER              | TYPE    | DESCRIPTION                | MANDATORY  | NOTES      | 
|:--------|:-----------------------|:-------:|:---------------------------|:----------:|:-----------| 
| 1       | saleOrderCode          | string  | Sale order code            | Yes        | -          | 
| 2       | saleOrderItemCodes     | string  | Sale order item code       | Yes        | -          | 
| 3       | commitBlockedInventory | boolean | true to block inventory    | No         | -          | 
| 4       | userId                 | integer | User ID                    | Yes        | -          | 
| 5       | taxInformation         | object  | Tax details                | No         | -          | 
| 5.1     | productTaxes           | list    | Product tax details        | Yes        | -          | 
| 5.1.1   | channelProductId       | string  | Channel product ID         | Yes        | -          | 
| 5.1.2   | additionalInfo         | string  | Any additional information | No         | -          | 
| 5.1.3   | taxPercentage          | integer | Tax percentage             | No         | Default: 0 | 
| 5.1.4   | centralGst             | integer | Central GST                | No         | Default: 0 | 
| 5.1.5   | stateGst               | integer | State GST                  | No         | Default: 0 | 
| 5.1.6   | unionTerritoryGst      | integer | UT GST                     | No         | Default: 0 | 
| 5.1.7   | integratedGst          | integer | Integrated GST             | No         | Default: 0 | 
| 5.1.8   | compensationCess       | integer | Compensation cess          | No         | -          | 
| 5.1.9   | customFieldValues      | list    | Custom field details       | No         | -          | 
| 5.1.9.1 | name                   | string  | Custom field name          | Yes        | -          | 
| 5.1.9.2 | value                  | string  | Custom field value         | No         | -          | 
 
 

 
 


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
   "invoiceCode": "string",
   "shippingPackageCode": "string"
}
```

## Response Parameters

| LEVEL | PARAMETER           | TYPE   | DESCRIPTION               | NOTES | 
|:------|:--------------------|:------:|:--------------------------|:------| 
| 1     | successful          | TRUE   | Request success status    | -     | 
| 2     | message             | string | Response message          | -     | 
| 3     | errors              | list   | List of errors (if any)   | -     | 
| 3.1   | code                | number | Error code                | -     | 
| 3.2   | fieldName           | string | Field with error          | -     | 
| 3.3   | description         | string | Error description         | -     | 
| 3.4   | message             | string | Error message             | -     | 
| 3.5   | errorParams         | object | Parameters with error     | -     | 
| 3.5.1 | additionalProp1     | object | Parameter 1 with error    | -     | 
| 3.5.2 | additionalProp2     | object | Parameter 2 with error    | -     | 
| 3.5.3 | additionalProp3     | object | Parameter 3 with error    | -     | 
| 4     | warnings            | list   | List of warnings (if any) | -     | 
| 4.1   | code                | number | Warning code              | -     | 
| 4.2   | message             | string | Warning message           | -     | 
| 4.3   | description         | string | Warning description       | -     | 
| 5     | invoiceCode         | string | Invoice code              | -     | 
| 6     | shippingPackageCode | string | Shipping package code     | -     | 
 


 



