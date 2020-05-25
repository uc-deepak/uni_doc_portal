---
id: order-acceptance
title: Order Acceptance (by seller)
permalink: docs/order-acceptance.html
---

In cases where seller acceptance to fulfilling each received order is desirable. The seller on receiving the order, gives his acceptance for each order id. This HTTP API details the method for order acceptance process using Unicommerce APIs.

>Tip
>
>It is recommended to check out [“Notes for the reader”](/docs/notes-for-reader.html). You might find this helpful as it contains **Guidelines**, **Terminologies** and **Abbreviations** used here.

## Basic Information

| NAME             | DETAILS                                                                 | 
| :----------------| :---------------------------------------------------------------------  |
| End Point        | /orders/acknowledge                                                     | 
| Request Type     | POST                                                                    | 
| Header           | 'Accept: application/json'                                              | 
| ---------------------| --------------------------- |

## Request Payload

```js
{
  "orderId": "ABC123"
}
```

## Response Payload

```js
{
  "status": "SUCCESS"
}
```

## Response Parameters

|PARAMETERS     		    |TYPE      	 		    |DESCRIPTION			|MANDATORY	|NOTES	
|:----------------------|:-----------------:|:---------------|:---------:|:--------|
|status   				      |string				      |Status of the request			|-		    |   Allowable: SUCCESS, FAILED, PARTIAL_SUCCESS |      
|---------------|----------|---------------------|-----------------|---------------------------------------------------|
