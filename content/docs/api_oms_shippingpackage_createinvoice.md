---
id: shippingpackage-createinvoice
title: Create Shipping Package Invoice
permalink: docs/shippingpackage-createinvoice.html
---

>Tip
>
> - It is recommended to check out [“Notes for the reader”](/docs/notes-for-reader.html). You might find this helpful as it contains **Guidelines**, **URL Details** and **Terminologies** used here.

## Basic Information

| NAME             | DETAILS                                                                 | 
| :----------------| :---------------------------------------------------------------------  | 
| End Point        | /services/rest/v1/oms/shippingPackage/createInvoice                         | 
| Request Type     | POST                                                                     | 
| Header           | 'Accept: application/json'                                               |     




## Request Payload

```js
{
   "shippingPackageCode": "string",
   "commitBlockedInventory": true,
   "userId": 0,
   "channelProductIdToTax": {
      "additionalProp1": {
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
      },
      "additionalProp2": {
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
      },
      "additionalProp3": {
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
   },
   "skipDetailing": true
}
```

## Request Parameters

| LEVEL   | PARAMETER              | TYPE    | DESCRIPTION                    | MANDATORY  | NOTES         | 
|:--------|:-----------------------|:-------:|:-------------------------------|:----------:|:--------------| 
| 1       | shippingPackageCode    | string  | Shipping package code          | Yes        | -             | 
| 2       | commitBlockedInventory | boolean | -                              | No         | Default: true | 
| 3       | userId                 | integer | -                              | Yes        | Default: 0    | 
| 4       | channelProductIdToTax  | object  | Channel product ID tax details | No         | -             | 
| 4.1     | additionalProp1        | object  | Parameter 1 with error         | No         | -             | 
| 4.1.1   | channelProductId       | string  | Channel product ID             | Yes        | -             | 
| 4.1.2   | additionalInfo         | string  | Any additional information     | No         | -             | 
| 4.1.3   | taxPercentage          | number  | Tax percentage                 | No         | Default: 0    | 
| 4.1.4   | centralGst             | number  | Central GST                    | No         | Default: 0    | 
| 4.1.5   | stateGst               | number  | State GST                      | No         | Default: 0    | 
| 4.1.6   | unionTerritoryGst      | number  | UT GST                         | No         | Default: 0    | 
| 4.1.7   | integratedGst          | number  | Integrated GST                 | No         | Default: 0    | 
| 4.1.8   | compensationCess       | number  | Compensation cess              | No         | -             | 
| 4.1.9   | customFieldValues      | list    | Custom field details           | No         | -             | 
| 4.1.9.1 | name                   | string  | Custom field name              | Yes        | -             | 
| 4.1.9.2 | value                  | string  | Custom field value             | No         | -             | 
| 4.2     | additionalProp2        | object  | Parameter 2 with error         | No         | -             | 
| 4.2.1   | channelProductId       | string  | Channel product ID             | Yes        | -             | 
| 4.2.2   | additionalInfo         | string  | Any additional information     | No         | -             | 
| 4.2.3   | taxPercentage          | number  | Tax percentage                 | No         | Default: 0    | 
| 4.2.4   | centralGst             | number  | Central GST                    | No         | Default: 0    | 
| 4.2.5   | stateGst               | number  | State GST                      | No         | Default: 0    | 
| 4.2.6   | unionTerritoryGst      | number  | UT GST                         | No         | Default: 0    | 
| 4.2.7   | integratedGst          | number  | Integrated GST                 | No         | Default: 0    | 
| 4.2.8   | compensationCess       | number  | Compensation cess              | No         | -             | 
| 4.2.9   | customFieldValues      | list    | Custom field details           | No         | -             | 
| 4.2.9.1 | name                   | string  | Custom field name              | Yes        | -             | 
| 4.2.9.2 | value                  | string  | Custom field value             | No         | -             | 
| 4.3     | additionalProp3        | object  | Parameter 3 with error         | No         | -             | 
| 4.3.1   | channelProductId       | string  | Channel product ID             | Yes        | -             | 
| 4.3.2   | additionalInfo         | string  | Any additional information     | No         | -             | 
| 4.3.3   | taxPercentage          | number  | Tax percentage                 | No         | Default: 0    | 
| 4.3.4   | centralGst             | number  | Central GST                    | No         | Default: 0    | 
| 4.3.5   | stateGst               | number  | State GST                      | No         | Default: 0    | 
| 4.3.6   | unionTerritoryGst      | number  | UT GST                         | No         | Default: 0    | 
| 4.3.7   | integratedGst          | number  | Integrated GST                 | No         | Default: 0    | 
| 4.3.8   | compensationCess       | number  | Compensation cess              | No         | -             | 
| 4.3.9   | customFieldValues      | list    | Custom field details           | No         | -             | 
| 4.3.9.1 | name                   | string  | Custom field name              | Yes        | -             | 
| 4.3.9.2 | value                  | string  | Custom field value             | No         | -             | 
| 5       | skipDetailing          | boolean | true to skip detailing         | No         | Default: true | 
 

 
 


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
   "shippingPackageCode": "string",
   "shippingLabelLink": "string",
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
| 7     | shippingLabelLink   | string | Shipping label link       | -     | 
 

 



