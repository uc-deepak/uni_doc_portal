---
id: fetchmanifest
title: Custom Manifest (by partner)
permalink: docs/fetchmanifest.html
---

In cases where the partner requires the channel manifest generation at their end in their custom template, the Unicommerce post the required parameters at partner portal and in response gets the manifest in pdf format for printing.
This HTTP API details the method in which the channel manifest data is communicated to the partner portal/marketplace using the Unicommerce API.

>Tip
>
>It is recommended to check out [“Notes for the reader”](/docs/notes-for-reader.html). You might find this helpful as it contains **Guidelines**, **URL Details** and **Terminologies** used here.


## Basic Information

| NAME             | DETAILS                                                                 | 
| :----------------| :---------------------------------------------------------------------  | 
| End Point                                         | /orders/fetchManifest                                    | 
| Request Type                                      | POST                                                     | 
| Header                                            | 'Accept: application/json'                                | 


    
## Request Payload

```js
{
  "courierCode": "string",
  "manifestItems": [
    {
      "orderItemId": "string",
      "status": "CANCELLED",
      "productId": "string",
      "variantId": "string",
      "quantity": 0
    }
  ]
}
```
## Request Parameters

| LEVEL       | PARAMETER            | TYPE   | DESCRIPTION                                                                     | MANDATORY | NOTES                                                                 |
|:-------------|:----------------------|:--------:|:-----------------------------------------|:-----------:|:------------------------| 
| 1     | courierCode   | string | -                      | Yes       | -                                                                                                                                                     | 
| 2     | manifestItems | -      | -                      | -         | -                                                                                                                                                     | 
| 2.1   | orderItemId   | string | Item ID                | Yes       | -                                                                                                                                                     | 
| 2.2   | status        | string | Status of the request  | Yes       | Allowable: "CANCELLED", "CREATED", "PROCESSING", "PACKED", "READY_TO_DISPATCH", "DISPATCHED", "DELIVERED", "REPLACED", "RETURN_REQUESTED", "RETURNED" | 
| 2.3   | productId     | string | Product ID of the item | Yes       | -                                                                                                                                                     | 
| 2.4   | variantId     | string | Variant ID of the item | Yes       | -                                                                                                                                                     | 
| 2.5   | quantity      | number | Qty of the item        | Yes       | -                                                                                                                                                     | 







## Response Payload

```js
{
  "status": "SUCCESS",
  "manifestUrl": "https://channelEndpoint/encoded-pdf-file.pdf"
}
```
Allowable: SUCCESS, FAILED, PARTIAL_SUCCESS. PDF will get generated for printing.

