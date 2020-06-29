---
id: getinvoicedetails
title: Invoice Details Fetching
permalink: docs/getinvoicedetails.html
---

>Tip
>
>It is recommended to check out [“Notes for the reader”](/docs/notes-for-reader.html). You might find this helpful as it contains **Guidelines**, **URL Details** and **Terminologies** used here.

## Basic Information

| NAME             | DETAILS                                                  | 
| :----------------| :------------------------------------------------------- | 
| End Point        | /invoiceDetails                                          | 
| Request Type     | GET                                                      | 
| Header           | 'Accept: application/json'                               | 
| Sample URL       | `http://{tenant}.unicommerce.com/invoiceDetails?orderId=abc123` |


## Query Parameters

| PARAMETER            | TYPE   | DESCRIPTION                                                                     | MANDATORY | NOTES                                                                 |
|:----------------------|:--------:|:-----------------------------------------|:-----------:|:------------------------| 
| orderId     | string  | Order ID                 | Yes       | -     |


## Response Payload

```js
{
  "code": "string",
  "productTaxes": [
    {
      "additionalInfo": "string",
      "productId": "string",
      "variantId": "string",
      "taxPercentage": 0,
      "centralGstPercentage": 0,
      "stateGstPercentage": 0,
      "unionTerritoryGstPercentage": 0,
      "integratedGstPercentage": 0,
      "compensationCessPercentage": 0
    }
  ],
  "invoiceDate": "2020-03-11T05:06:27.600Z"
}
```

## Response Parameters

| LEVEL | PARAMETER                   | TYPE   | DESCRIPTION                                           | MANDATORY  | NOTES                                                  | 
|:------|:----------------------------|:------:|:------------------------------------------------------|:----------:|:-------------------------------------------------------| 
| 1     | code                        | string | Invoice code                                          | Yes        | -                                                      | 
| 2     | productTaxes                | list   | List of product taxes                                 | -          | -                                                      | 
| 2.1   | additionalInfo              | string | Any additional information                            | No         | -                                                      | 
| 2.2   | productId                   | string | The product ID for which the tax details are provided | Yes        | -                                                      | 
| 2.3   | variantId                   | string | The variant ID for which the tax details are provided | Yes        | -                                                      | 
| 2.4   | taxPercentage               | number | Tax percentage                                        | No         | -                                                      | 
| 2.5   | centralGstPercentage        | number | Central GST percentage                                | Yes        | -                                                      | 
| 2.6   | stateGstPercentage          | number | State GST percentage                                  | Yes        | -                                                      | 
| 2.7   | unionTerritoryGstPercentage | number | UT GST percentage                                     | Yes        | -                                                      | 
| 2.8   | integratedGstPercentage     | number | IGST percentage                                       | Yes        | -                                                      | 
| 2.9   | compensationCessPercentage  | number | Compensation cess percentage                          | Yes        |                                                        | 
| 3     | invoiceDate                 | date   | Date when invoice was generated                       | Yes        | Format: yyyy-MM-dd'T'HH:mm:ss, Eg: 2017-01-02T08:12:53 | 
 



