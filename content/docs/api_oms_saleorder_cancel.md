---
id: saleorder-cancel
title: Cancel Sale Order
permalink: docs/saleorder-cancel.html
---

>Tip
>
> - It is recommended to check out [“Notes for the reader”](/docs/notes-for-reader.html). You might find this helpful as it contains **Guidelines**, **URL Details** and **Terminologies** used here.

## Basic Information

| NAME             | DETAILS                                                                 | 
| :----------------| :---------------------------------------------------------------------  | 
| End Point        | /services/rest/v1/oms/saleOrder/cancel                                                   | 
| Request Type     | POST                                                                     | 
| Header           | 'Accept: application/json'                                               |     




## Request Payload

```js
{
  "saleOrderCode": "string",
  "saleOrderItemCodes": [
    "string"
  ],
  "cancelPartially": true,
  "cancelOnChannel": true,
  "cancellationReason": "string"
}
```

## Request Parameters
 
| PARAMETER          | TYPE    | DESCRIPTION                        | MANDATORY  | NOTES          | 
|:----------------------|:--------:|:-----------------------------------------|:-----------:|:------------------------| 
| saleOrderCode      | string  | Sale order code                    | Yes        | -              | 
| saleOrderItemCodes | string  | Sale order item code               | No         | -              | 
| cancelPartially    | boolean | true if cancellation is partial    | No         | -              | 
| cancelOnChannel    | boolean | true if cancellation is on channel | No         | Default: true  | 
| cancellationReason | string  | Reason for cancellation            | No         | Max chars: 100 | 
 
 
 


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
  ]
}
```

## Response Parameters
 
| LEVEL | PARAMETER       | TYPE    | DESCRIPTION               | NOTES | 
|:------|:----------------|:-------:|:--------------------------|:------| 
| 1     | successful      | boolean | Request success status    | -     | 
| 2     | message         | string  | Response message          | -     | 
| 3     | errors          | list    | List of errors (if any)   | -     | 
| 3.1   | code            | boolean | Error code                | -     | 
| 3.2   | fieldName       | string  | Field with error          | -     | 
| 3.3   | description     | string  | Error description         | -     | 
| 3.4   | message         | string  | Error message             | -     | 
| 3.5   | errorParams     | object  | Parameters with error     | -     | 
| 3.5.1 | additionalProp1 | object  | Parameter 1 with error    | -     | 
| 3.5.2 | additionalProp2 | object  | Parameter 2 with error    | -     | 
| 3.5.3 | additionalProp3 | object  | Parameter 3 with error    | -     | 
| 4     | warnings        | list    | List of warnings (if any) | -     | 
| 4.1   | code            | number  | Warning code              | -     | 
| 4.2   | message         | string  | Warning message           | -     | 
| 4.3   | description     | string  | Warning description       | -     | 
 
 
 



