---
id: create-reversepickup
title: Create Reverse Pick-up
permalink: docs/create-reversepickup.html
---

>Tip
>
> - It is recommended to check out [“Notes for the reader”](/docs/notes-for-reader.html). You might find this helpful as it contains **Guidelines**, **URL Details** and **Terminologies** used here.

## Basic Information

| NAME             | DETAILS                                                                 | 
| :----------------| :---------------------------------------------------------------------  | 
| End Point        | /services/rest/v1/oms/reversePickup/Create                        | 
| Request Type     | POST                                                                     | 
| Header           | 'Accept: application/json'                                               |     




## Request Payload

```js
{
   "saleOrderCode": "string",
   "reversePickItems": [
      {
         "saleOrderItemCode": "string",
         "reason": "string",
         "reversePickupAlternate": {
            "itemSku": "string",
            "totalPrice": 0,
            "sellingPrice": 0,
            "discount": 0,
            "shippingCharges": 0,
            "prepaidAmount": 0
         }
      }
   ],
   "shippingAddress": {
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
   "actionCode": "string",
   "customFieldValues": [
      {
         "name": "string",
         "value": "string"
      }
   ],
   "reversePickupCode": "string"
}
```

## Request Parameters

| LEVEL | PARAMETER              | TYPE   | DESCRIPTION                                         | MANDATORY  | NOTES                             | 
|:------|:-----------------------|:------:|:----------------------------------------------------|:----------:|:----------------------------------| 
| 1     | saleOrderCode          | string | Sale order code                                     | Yes        | -                                 | 
| 2     | reversePickItems       | list   | List of reverse pick-up items                       | Yes        | -                                 | 
| 2.1   | saleOrderItemCode      | string | Sale order item code                                | Yes        | -                                 | 
| 2.2   | reason                 | string | Reason                                              | Yes        | Max chars: 500                    | 
| 2.3   | reversePickupAlternate | object | Item details to be delivered during reverse pick-up | No         | -                                 | 
| 2.3.1 | itemSKU                | string | Item SKU                                            | Yes        | Eg.: Bharat4                      | 
| 2.3.2 | totalPrice             | number | Total price                                         | Yes        | -                                 | 
| 2.3.3 | sellingPrice           | number | Selling price                                       | Yes        | -                                 | 
| 2.3.4 | discount               | number | Discount amount                                     | No         | -                                 | 
| 2.3.5 | shippingCharges        | number | Shipping charges                                    | No         | -                                 | 
| 2.3.6 | prepaidAmount          | number | Amount paid while ordering                          | No         | -                                 | 
| 3     | shippingAddress        | object | Shipping address details                            | No         | -                                 | 
| 3.1   | id                     | string | -                                                   | Yes        | -                                 | 
| 3.2   | name                   | string | Name of receiver                                    | Yes        | Max chars: 100                    | 
| 3.3   | addressLine1           | string | Precise address                                     | Yes        | Max chars: 500                    | 
| 3.4   | addressLine2           | string | Additional address information                      | No         | Max chars: 500                    | 
| 3.5   | city                   | string | City Name                                           | Yes        | Eg: Surat, Max chars: 100         | 
| 3.6   | state                  | string | State name                                          | Yes        | Eg: Gujrat, Max chars: 45         | 
| 3.7   | country                | string | Country code not name                               | No         | -                                 | 
| 3.8   | pincode                | string | Area pincode (6 digit)                              | No         | Eg: 395006, Max chars: 45         | 
| 3.9   | phone                  | string | Mobile No. (9 digit)                                | Yes        | Default: 999999999, Max chars: 50 | 
| 3.10  | email                  | string | Email ID                                            | No         | Case insensitive, Max chars: 100  | 
| 4     | actionCode             | string | Action code                                         | Yes        | -                                 | 
| 5     | customFieldValues      | list   | Custom field details                                | No         | -                                 | 
| 5.1   | name                   | string | Custom field name                                   | Yes        | -                                 | 
| 5.2   | value                  | string | Custom field value                                  | No         | -                                 | 
| 6     | reversePickupCode      | string | Reverse pick-up code                                | No         | -                                 | 
 
 

 
 


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
   "reversePickupCode": "string",
   "saleOrderItemCodes": [
      "string"
   ]
}
```

## Response Parameters

| LEVEL | PARAMETER          | TYPE   | DESCRIPTION               | NOTES | 
|:------|:-------------------|:------:|:--------------------------|:------| 
| 1     | successful         | TRUE   | Request success status    | -     | 
| 2     | message            | string | Response message          | -     | 
| 3     | errors             | list   | List of errors (if any)   | -     | 
| 3.1   | code               | number | Error code                | -     | 
| 3.2   | fieldName          | string | Field with error          | -     | 
| 3.3   | description        | string | Error description         | -     | 
| 3.4   | message            | string | Error message             | -     | 
| 3.5   | errorParams        | object | Parameters with error     | -     | 
| 3.5.1 | additionalProp1    | object | Parameter 1 with error    | -     | 
| 3.5.2 | additionalProp2    | object | Parameter 2 with error    | -     | 
| 3.5.3 | additionalProp3    | object | Parameter 3 with error    | -     | 
| 4     | warnings           | list   | List of warnings (if any) | -     | 
| 4.1   | code               | number | Warning code              | -     | 
| 4.2   | message            | string | Warning message           | -     | 
| 4.3   | description        | string | Warning description       | -     | 
| 5     | reversePickupCode  | string | Reverse pick-up code      | -     | 
| 6     | saleOrderItemCodes | string | Sale order item code      | -     | 
 
 

 



