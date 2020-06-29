---
id: shippingmanifest-create
title: Create Shipping Manifest
permalink: docs/shippingmanifest-create.html
---

>Tip
>
> - It is recommended to check out [“Notes for the reader”](/docs/notes-for-reader.html). You might find this helpful as it contains **Guidelines**, **URL Details** and **Terminologies** used here.

## Basic Information

| NAME             | DETAILS                                                                 | 
| :----------------| :---------------------------------------------------------------------  | 
| End Point        | /services/rest/v1/oms/shippingManifest/create                           | 
| Request Type     | POST                                                                     | 
| Header           | 'Accept: application/json'                                               |     




## Request Payload

```js
{
   "channel": "string",
   "shippingProviderCode": "string",
   "shippingProviderName": "string",
   "shippingMethodCode": "string",
   "comments": "string",
   "thirdPartyShipping": true,
   "customFieldValues": [
      {
         "name": "string",
         "value": "string"
      }
   ]
}
```

## Request Parameters

| LEVEL       | PARAMETER            | TYPE   | DESCRIPTION                                                                     | MANDATORY | NOTES                                                                 |
|:-------------|:----------------------|:--------:|:-----------------------------------------|:-----------:|:------------------------| 
| 1     | channel              | string  | Channel name                                                                                   | Yes        | -     | 
| 2     | shippingProviderCode | string  | Shipping provider code                                                                         | No         | -     | 
| 3     | shippingProviderName | string  | Shipping provider name                                                                         | No         | -     | 
| 4     | shippingMethodCode   | string  | The shipping method of the order                                                               | No         | -     | 
| 5     | comments             | string  | Comments                                                                                       | No         | -     | 
| 6     | thirdPartyShipping   | boolean | true if the shipping to end customer is taken care by the Marketplace. false for self shipping | Yes        | -     | 
| 7     | customFieldValues    | list    | Custom field details                                                                           | No         | -     | 
| 7.1   | name                 | string  | Custom field name                                                                              | Yes        | -     | 
| 7.2   | value                | string  | Custom field value                                                                             | No         | -     | 
 
 
 
 


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
   "shippingManifestId": 0,
   "shippingManifestCode": "string"
}
```

## Response Parameters

| LEVEL | PARAMETER            | TYPE   | DESCRIPTION               | NOTES      | 
|:------|:---------------------|:------:|:--------------------------|:-----------| 
| 1     | successful           | TRUE   | Request success status    | -          | 
| 2     | message              | string | Response message          | -          | 
| 3     | errors               | list   | List of errors (if any)   | -          | 
| 3.1   | code                 | number | Error code                | -          | 
| 3.2   | fieldName            | string | Field with error          | -          | 
| 3.3   | description          | string | Error description         | -          | 
| 3.4   | message              | string | Error message             | -          | 
| 3.5   | errorParams          | object | Parameters with error     | -          | 
| 3.5.1 | additionalProp1      | object | Parameter 1 with error    | -          | 
| 3.5.2 | additionalProp2      | object | Parameter 2 with error    | -          | 
| 3.5.3 | additionalProp3      | object | Parameter 3 with error    | -          | 
| 4     | warnings             | list   | List of warnings (if any) | -          | 
| 4.1   | code                 | number | Warning code              | -          | 
| 4.2   | message              | string | Warning message           | -          | 
| 4.3   | description          | string | Warning description       | -          | 
| 5     | shippingManifestId   | number | Shipping manifest ID      | -          | 
| 6     | shippingManifestCode | string | Shipping manifest code    | -          | 
 

 



