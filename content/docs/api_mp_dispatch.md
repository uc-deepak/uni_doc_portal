---
id: post-orders-dispatch
title: Order Update - Dispatch
permalink: docs/post-orders-dispatch.html
---

On dispatch of order by seller, the updated order status is posted on the marketplace. This HTTP API details the method in which the order dispatch status is communicated to the partner portal/marketplace using the Unicommerce API.

>Tip
>
>It is recommended to check out [“Notes for the reader”](/docs/notes-for-reader.html). You might find this helpful as it contains **Guidelines**, **Terminologies** and **Abbreviations** used here.


## Basic Information

| NAME             | DETAILS                                                                 | 
| :----------------| :---------------------------------------------------------------------  | 
| End Point       | /orders/dispatch                                           | 
| Request Type    | POST                                                     | 
| Header          | 'Accept: application/json'                                | 


    
## Request Payload

```js
{
  "orderItems": [
    {
      "orderItemId": "string",
      "quantity": 0,
      "centralGstPercentage": 0,
      "compensationCessPercentage": 0,
      "integratedGstPercentage": 0,
      "stateGstPercentage": 0,
      "taxRate": 0,
      "unionTerritoryGstPercentage": 0
    }
  ],
  "selfShipping": {
    "deliveryPartner": "string",
    "dispatchDate": "2017-01-02T08:12:53",
    "invoiceDate": "2017-01-02T08:12:53",
    "invoiceNumber": "string",
    "tentativeDeliveryDate": "2017-01-02T08:12:53",
    "trackingId": "string"
  }
}
```


## Request Parameters

| LEVEL       | PARAMETER            | TYPE   | DESCRIPTION                                                                     | MANDATORY | NOTES                                                                 |
|:-------------|:----------------------|:--------:|:-----------------------------------------|:-----------:|:------------------------|
| 1     | orderItems                  | -       | List of items in an order       | -          | -     | 
| 1.1   | orderItemId                 | string  | Item ID                         | Yes        | -     | 
| 1.2   | quantity                    | integer | Quantity of the item dispatched | Yes        | -     | 
| 1.3   | taxPercentage               | number  | Tax percentage                  | As applied | -     | 
| 1.4   | centralGstPercentage        | number  | Central GST percentage          | As applied | -     | 
| 1.5   | stateGstPercentage          | number  | State GST percentage            | As applied | -     | 
| 1.6   | unionTerritoryGstPercentage | number  | UT GST percentage               | As applied | -     | 
| 1.7   | integratedGstPercentage     | number  | IGST percentage                 | As applied | -     | 
| 1.8   | compensationCessPercentage  | number  | Compensation cess percentage    | As applied | -     | 






## Response Payload

```js
{
  "status": "SUCCESS",
  "orderItems": [
    {
      "orderItemId": "string",
      "errorMessage": "string"
    }
  ]
}
```

## Response Parameters

| LEVEL       | PARAMETER            | TYPE   | DESCRIPTION                                                                     | MANDATORY | NOTES                                                                 |
|:-------------|:----------------------|:--------:|:-----------------------------------------|:-----------:|:------------------------|
| 1     | status       | string | Status of the request                     | Yes       | Allowable: SUCCESS, FAILED, PARTIAL_SUCCESS | 
| 2     | orderItems   | -      | Only if some dispatch doesn't get updated | -         | -                                           | 
| 2.1   | orderItemId  | string | Item ID                                   | No        | -                                           | 
| 2.2   | errorMessage | string | -                                         | No        | -                                           |


