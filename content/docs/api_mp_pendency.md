---
id: order-onhold
title: Order Pendency (On-hold)
permalink: docs/order-onhold.html
---

In cases where the partner requires the seller to block the inventory for orders received and process them upon receiving confirmation. Such orders are fetched as on-hold orders for blocking the inventor. This HTTP API details the method in which the on-hold orders are fetched from the partner portal/marketplace using the Unicommerce API.

>Tip
>
>It is recommended to check out [“Notes for the reader”](/docs/notes-for-reader.html). You might find this helpful as it contains **Guidelines**, **URL Details** and **Terminologies** used here.

## Basic Information

| NAME             | DETAILS                                                                 | 
| :----------------| :---------------------------------------------------------------------  |
| End Point                                         | /orders/pendency                       | 
| Request Type                                      | GET                                                      | 
| Header                                            | 'Accept: application/json'                                | 
| Sample URL                                        | `http://{tenant}.unicommerce.com/orders/pendency?pageNumber=1&pageSize=20&orderDateFrom=2020-01-01&orderDateTo=2020-01-15` |


## Query Parameters

|PARAMETERS     		    |TYPE      	 		    |DESCRIPTION			|MANDATORY	|NOTES	
|:----------------------|:-----------------:|:---------------|:---------:|:--------| 
| pageNumber    | string | Page number     | Yes       | Default: 1                                             | 
| pageSize      | string | Page size       | Yes       | Fixed: 50                                              | 
| orderDateFrom | date   | Order date from | No        | Format: yyyy-MM-dd'T'HH:mm:ss <br> Eg: 2017-01-02T08:12:53 | 
| orderDateTo   | date   | Order date to   | No        | -                                                      | 



## Response Payload

```js
{
  "pendencies": [
    {
      "orderId": "123456",
      "orderStatus": "PENDING_VERIFICATION",
      "orderItems": [
        {
          "orderItemId": "orderitem-1234",
          "productId": "mouse",
          "variantId": "color_red",
          "sku": "MOUSE5-123",
          "title": "Gaming Mouse 5 Buttons",
          "status": "CREATED",
          "quantity": 1,
          "onHold": false,
          "packetNumber": 1
        }
      ]
    }
  ],
  "hasMore": true
}
```

## Response Parameters

| LEVEL  | PARAMETER    | TYPE    | DESCRIPTION                                                                                                          | MANDATORY  | NOTES                          | 
|:-------|:-------------|:-------:|:---------------------------------------------------------------------------------------------------------------------|:----------:|:-------------------------------| 
| 1      | pendencies   | list    | List of order pendencies                                                                                             | -          | -                              | 
| 1.1    | orderId      | string  | Order ID                                                                                                             | Yes        | -                              | 
| 1.3    | orderStatus  | string  | Status of the order                                                                                                  | Yes        | Fixed: PENDING_VERIFICATION    | 
| 1.8    | orderItems   | list    | List of items in the order                                                                                           | -          | -                              | 
| 1.8.1  | orderItemId  | string  | The ID of the item(s) present inside the order                                                                       | Yes        | -                              | 
| 1.8.2  | productId    | string  | Product ID of the item                                                                                               | Yes        | -                              | 
| 1.8.3  | variantId    | string  | Variant ID of the item                                                                                               | Yes        | -                              | 
| 1.8.4  | sku          | string  | SKU code of the item on the marketplace                                                                              | Yes        | -                              | 
| 1.8.5  | title        | string  | Title of the item                                                                                                    | No         | -                              | 
| 1.8.6  | status       | string  | Generally same as `orderStatus`. Only is case of partial order fulfilment the status of item in the order will vary. | Yes        | Allowable: same as orderStatus | 
| 1.8.7  | quantity     | integer | Qty of the item ordered                                                                                              | Yes        | Default: 1                     | 
| 1.8.8  | onHold       | boolean | true if order not available for processing                                                                           | No         | Default: false                 | 
| 1.8.9  | packetNumber | integer | No. of parcels in which the order has to be processed                                                                | No         | Default: 0                     | 
| 1.8.10 | hasMore      | boolean | -                                                                                                                    | No         | Default: true                  | 
 
 
