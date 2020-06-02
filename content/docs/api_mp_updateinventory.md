---
id: updateinventory
title: Inventory Updating
permalink: docs/updateinventory.html
---

>Tip
>
>It is recommended to check out [“Notes for the reader”](/docs/notes-for-reader.html). You might find this helpful as it contains **Guidelines**, **Terminologies** and **Abbreviations** used here.


## Basic Information

| NAME             | DETAILS                                                                 | 
| :----------------| :---------------------------------------------------------------------  | 
| End Point                                         | /updateInventory                                         | 
| Request Type                                      | POST                                                     | 
| Header                                            | 'Accept: application/json'                                | 


## Request Payload

```js
{
  "inventoryList": [
    {
      "productId": "string",
      "variantId": "string",
      "inventory": 0,
      "hsnCode": "string"
    }
  ]
}
```

## Request Parameters
| LEVEL       | PARAMETER            | TYPE   | DESCRIPTION                                                                     | MANDATORY | NOTES                                                                 |
|:-------------|:----------------------|:--------:|:-----------------------------------------|:-----------:|:------------------------| 
| 1     | inventoryList | -       | -                                                                 | -         | -     | 
| 1.1   | productId     | string  | Product ID of the product for which Inventory needs to be updated | Yes       | -     | 
| 1.2   | variantId     | string  | Variant ID of the product for which Inventory needs to be updated | Yes       | -     | 
| 1.3   | inventory     | integer | The stock count which needs to be updated on the Marketplace      | Yes       | -     | 
| 1.4   | hsnCode       | string  | 6 digit uniform code that classifies products worldwide           | No        | -     |  



## Response Payload

Following is the schema defined for the product resource in Unicommerce system. Which means this includes superset of all the fields and types that define a product for the Unicommerce. The partner is expected to follow this schema for each product information, to complete the transaction successfully.

```js
{
  "status": "SUCCESS",
  "failedProductList": [
    {
      "productId": "string",
      "variantId": "string",
      "message": "string"
    }
  ]
}
```

## Response Parameters

| LEVEL       | PARAMETER            | TYPE   | DESCRIPTION                                                                     | MANDATORY | NOTES                                                                 |
|:-------------|:----------------------|:--------:|:-----------------------------------------|:-----------:|:------------------------|
| 1     | status            | string | Status of the request                                                        | Yes       | Allowable: SUCCESS, FAILED, PARTIAL_SUCCESS | 
| 2     | failedProductList | -      | Required for bulk update, when inventory update for some products got failed | -         | -                                           | 
| 2.1   | productId         | string | Product ID of the products whose inventory update fails                      | Yes       | Eg: 54353                                   | 
| 2.2   | variantId         | string | Variant ID of the products whose inventory update fails                      | Yes       | Eg: 54353-2                                 | 
| 2.3   | message           | string | Reason for failure                                                           | Yes       | Eg: Mismatch                                | 


