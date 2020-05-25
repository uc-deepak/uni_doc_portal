---
id: postlabels
title: Custom Label Generation
permalink: docs/postlabels.html
---


In cases where the partner requires the label generation at their end in their custom template, the Unicommerce post the required parameters at partner portal, this also helps in verifying these parameter values at each end (partner portal and Unicommerce). 
This HTTP API details the method in which the label data is communicated to the partner portal/marketplace using the Unicommerce API.

>Tip
>
>It is recommended to check out [“Notes for the reader”](/docs/notes-for-reader.html). You might find this helpful as it contains **Guidelines**, **Terminologies** and **Abbreviations** used here.


## Basic Information

| NAME             | DETAILS                                                                 | 
| :----------------| :---------------------------------------------------------------------  | 
| End Point        | /orders/labels                                           | 
| Request Type     | POST                                                     | 
| Header           | 'Accept: application/json'                                | 
| ----------------| ------------------------------- |

    
## Request Payload

```js
{
  "boxHeight": 0,
  "boxLength": 0,
  "boxWidth": 0,
  "weight": 0,
  "orderItems": [
    {
      "orderItemId": "string",
      "invoiceNumber": "string",
      "invoiceDate": "2017-01-02T08:12:53",
      "taxRate": 0,
      "centralGstPercentage": 0,
      "compensationCessPercentage": 0,
      "integratedGstPercentage": 0,
      "stateGstPercentage": 0,
      "unionTerritoryGstPercentage": 0
    }
  ]
}
```
## Request Parameters

| LEVEL       | PARAMETER            | TYPE   | DESCRIPTION                                                                     | MANDATORY | NOTES                                                                 |
|:-------------|:----------------------|:--------:|:-----------------------------------------|:-----------:|:------------------------| 
| 1     | boxHeight                   | number | Packing box height                        | Yes       | -                                                      | 
| 2     | boxLength                   | number | Packing box length                        | Yes       | -                                                      | 
| 3     | boxWidth                    | number | Packing box width                         | Yes       | -                                                      | 
| 4     | weight                      | number | Weight of the shipment                    | Yes       | -                                                      | 
| 5     | orderItems                  | list   | List of items in an order                 | -         | -                                                      | 
| 5.1   | orderItemId                 | string | Item ID                                   | Yes       | -                                                      | 
| 5.2   | invoiceNumber               | string | Invoice Number                            | Yes       | -                                                      | 
| 5.3   | invoiceDate                 | date   | Date when invoice was generated in the MP | Yes       | Format: yyyy-MM-dd'T'HH:mm:ss, Eg: 2017-01-02T08:12:53 | 
| 5.4   | taxRate                     | number | -                                         | Yes       | -                                                      | 
| 5.5   | centralGstPercentage        | number | Central GST percentage                    | Opt       | -                                                      | 
| 5.6   | compensationCessPercentage  | number | Compensation cess percentage              | Opt       | -                                                      | 
| 5.7   | integratedGstPercentage     | number | IGST percentage                           | Opt       | -                                                      | 
| 5.8   | stateGstPercentage          | number | State GST percentage                      | Opt       | -                                                      | 
| 5.9   | unionTerritoryGstPercentage | number | UT GST percentage                         | Opt       | -                                                      | 
|------|------------------------------|-------|-------------------------|--------------|------|





## Response Payload

```js
{
  "status": "FAILED",
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
| 1     | status       | string | Send SUCCESS for acknowledgement                           | Yes       | Allowable: SUCCESS, FAILED, PARTIAL_SUCCESS | 
| 2     | orderItems   | list   | List of items in an order                                  | -         | -                                           | 
| 2.1   | orderItemId  | string | Applicable if request is unsuccessful for few or all items | No        | -                                           | 
| 2.2   | errorMessage | string | Reason of failure                                          | No        | -                                           |
|------|-------------|-----|----------------------------------------|--------------|----------------------------|

