---
id: post-orders-cancel
title: Order Update Cancel
permalink: docs/post-orders-cancel.html
---


On cancellation of order by seller, the updated order status is posted on the marketplace. This HTTP API details the method in which the order cancellation status is communicated to the partner portal/marketplace using the Unicommerce API.

>Tip
>
>It is recommended to check out [“Notes for the reader”](/docs/notes-for-reader.html). You might find this helpful as it contains **Guidelines**, **Terminologies** and **Abbreviations** used here.

## Basic Information

| NAME             | DETAILS                                                  | 
| :----------------| :------------------------------------------------------  | 
| End Point        | /orders/cancel                                           | 
| Request Type     | POST                                                     | 
| Header           | 'Accept: application/json'                               | 
| ----------------| -------------------------- |

    
## Request Payload

```js
{
  "orderId": "string",
  "orderItems": [
    {
      "orderItemId": "string",
      "productId": "string",
      "variantId": "string",
      "quantity": 2
    }
  ]
}
```
## Request Parameters

| LEVEL       | PARAMETER            | TYPE   | DESCRIPTION                                                                     | MANDATORY | NOTES                                                                 |
|:-------------|:----------------------|:--------:|:-----------------------------------------|:-----------:|:------------------------| 
| 1     | orderID     | string | ID of orders to be marked as cancel        | Yes       | -     | 
| 2     | orderItems  | -      | -                                          | -         | -     | 
| 2.1   | orderItemId | string | ItemsId of orders to be marked as cancel   | Yes       | -     | 
| 2.2   | productId   | string | ProductID of orders to be marked as cancel | Yes       | -     | 
| 2.3   | variantId   | string | VariantID of orders to be marked as cancel | Yes       | -     | 
| 2.4   | quantity    | number | Qty to be cancelled                        | Yes       | -     | 
|------|----------------|---------|----------------------------------------------|-----------------|---------|




## Response Payload

```js
{
  "status": "SUCCESS",
  "orderItems": [
    {
      "orderItemId": "string",
      "errorMessage": "order Item Id not available"
    }
  ]
}
```

## Response Parameters

| LEVEL       | PARAMETER            | TYPE   | DESCRIPTION                                                                     | MANDATORY | NOTES                                                                 |
|:-------------|:----------------------|:--------:|:-----------------------------------------|:-----------:|:------------------------| 
| 1     | Status       | string | Send Success after cancellation is acknowledged                  | Yes       | Allowable: SUCCESS, FAILED, PARTIAL_SUCCESS | 
| 2     | orderItems   | -      | -                                                                | -         | -                                           | 
| 2.1   | orderItemId  | string | Order ID of the orders failed to be marked cancel at your system | No        | -                                           | 
| 2.2   | errorMessage | string | Reason of failure                                                | No        | -                                           |
|------|-------------|-----|------------------------------------------|--------------|-----------------------------|
