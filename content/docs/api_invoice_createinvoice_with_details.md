---
id: createinvoice-with-details
title: Create Invoice with Details
permalink: docs/createinvoice-with-details.html
---

>Tip
>
> - It is recommended to check out [“Notes for the reader”](/docs/notes-for-reader.html). You might find this helpful as it contains **Guidelines**, **URL Details** and **Terminologies** used here.

## Basic Information

| NAME             | DETAILS                                                                 | 
| :----------------| :---------------------------------------------------------------------  | 
| End Point        | /services/rest/v1/createInvoiceWithDetails                         | 
| Request Type     | POST                                                                     | 
| Header           | 'Accept: application/json'                                               |     




## Request Payload

```js
{
   "saleOrderCode": "string",
   "invoice": {
      "code": "string",
      "displayCode": "string",
      "channelCreated": "2020-06-19T13:50:11.112Z",
      "channelCode": "string",
      "fromPartyCode": "string",
      "toPartyCode": "string",
      "source": "SHIPPING_PACKAGE",
      "destinationStateCode": "string",
      "destinationCountryCode": "string",
      "type": "SALE",
      "userId": 0,
      "productManagementSwitchedOff": true,
      "taxExempted": true,
      "cformProvided": true,
      "url": "string",
      "invoiceItems": [
         {
            "skuCode": "string",
            "bundleSkuCode": "string",
            "channelProductId": "string",
            "sellerSkuCode": "string",
            "saleOrderItemCodes": [
               "string"
            ],
            "saleOrderItems": [
               {
                  "code": "string",
                  "status": "string",
                  "shelfCode": "string",
                  "reason": "string"
               }
            ],
            "unitPrice": 0,
            "subtotal": 0,
            "discount": 0,
            "shippingCharges": 0,
            "cashOnDeliveryCharges": 0,
            "shippingMethodCharges": 0,
            "total": 0,
            "prepaidAmount": 0,
            "voucherValue": 0,
            "serviceTax": 0,
            "additionalTax": 0,
            "giftWrapCharges": 0,
            "storeCredit": 0,
            "additionalInfo": "string",
            "quantity": 0,
            "itemDetails": "string",
            "taxPercentageDetail": {
               "taxTypeCode": "string",
               "vat": 0,
               "cst": 0,
               "cstFormc": 0,
               "taxPercentage": 0,
               "serviceTax": 0,
               "additionalTax": 0,
               "centralGst": 0,
               "stateGst": 0,
               "unionTerritoryGst": 0,
               "integratedGst": 0,
               "compensationCess": 0
            },
            "customFieldValues": [
               {
                  "name": "string",
                  "value": "string"
               }
            ]
         }
      ]
   },
   "userId": 0,
   "shippingProviderCode": "string",
   "trackingNumber": "string"
}
```

## Request Parameters

| LEVEL      | PARAMETER                    | TYPE    | DESCRIPTION                             | MANDATORY  | NOTES                                                                                                 | 
|:-----------|:-----------------------------|:-------:|:----------------------------------------|:----------:|:------------------------------------------------------------------------------------------------------| 
| 1          | saleOrderCode                | string  | Sale order code                         | Yes        | -                                                                                                     | 
| 2          | invoice                      | object  | Invoice resource details                | No         | -                                                                                                     | 
| 2.1        | code                         | string  | Invoice code                            | No         | Max. chars: 45                                                                                        | 
| 2.2        | displayCode                  | string  | Display code                            | No         | Max. chars: 45                                                                                        | 
| 2.3        | channelCreated               | date    | Channel creation date                   | No         | -                                                                                                     | 
| 2.4        | channelCode                  | string  | Channel code                            | No         | -                                                                                                     | 
| 2.5        | fromPartyCode                | string  | From party code                         | No         | -                                                                                                     | 
| 2.6        | toPartyCode                  | string  | To party code                           | No         | -                                                                                                     | 
| 2.7        | source                       | enum    | -                                       | No         | Allowable: SHIPPING\_PACKAGE, PURCHASE\_ORDER, GATEPASS                                                 | 
| 2.8        | destinationStateCode         | string  | Destination state code                  | No         | -                                                                                                     | 
| 2.9        | destinationCountryCode       | string  | Destination country code                | No         | -                                                                                                     | 
| 2.10       | type                         | enum    | -                                       | No         | Allowable: SALE, PURCHASE, GATEPASS, SALE\_RETURN, PURCHASE\_RETURN, GATEPASS\_RETURN, DELIVERY\_CHALLAN  | 
| 2.11       | userId                       | integer | -                                       | No         | -                                                                                                     | 
| 2.12       | productManagementSwitchedOff | boolean | -                                       | No         | Default: true                                                                                         | 
| 2.13       | taxExempted                  | boolean | true if tax exemption on item           | No         | -                                                                                                     | 
| 2.14       | cformProvided                | boolean | true if cform provided                  | No         | -                                                                                                     | 
| 2.15       | url                          | string  | URL                                     | No         | -                                                                                                     | 
| 2.16       | invoiceItems                 | list    | List of items                           | No         | -                                                                                                     | 
| 2.16.1     | skuCode                      | string  | SKU code of the item on the marketplace | No         | Eg: BD\_Floral\_3                                                                                       | 
| 2.16.2     | bundleSkuCode                | string  | SKU code for bundle                     | No         | -                                                                                                     | 
| 2.16.3     | channelProductId             | string  | Channel product ID                      | No         | -                                                                                                     | 
| 2.16.4     | sellerSkuCode                | string  | Seller SKU code                         | No         | -                                                                                                     | 
| 2.16.5     | saleOrderItemCodes           | string  | Sale order item code                    | No         | -                                                                                                     | 
| 2.16.6     | saleOrderItems               | list    | Details of items in sale order          | No         | -                                                                                                     | 
| 2.16.6.1   | code                         | string  | Item code                               | Yes        | -                                                                                                     | 
| 2.16.6.2   | status                       | string  | Item Status                             | No         | -                                                                                                     | 
| 2.16.6.3   | shelfCode                    | string  | Shelf code for item                     | No         | -                                                                                                     | 
| 2.16.6.4   | reason                       | string  | Reason                                  | No         | -                                                                                                     | 
| 2.16.7     | unitPrice                    | number  | Price of single item                    | No         | -                                                                                                     | 
| 2.16.8     | subtotal                     | number  | Sub-total                               | No         | -                                                                                                     | 
| 2.16.9     | discount                     | number  | Discount amount                         | No         | -                                                                                                     | 
| 2.16.10    | shippingCharges              | number  | Shipping charges                        | No         | -                                                                                                     | 
| 2.16.11    | cashOnDeliveryCharges        | number  | COD charges                             | No         | -                                                                                                     | 
| 2.16.12    | shippingMethodCharges        | number  | Shipping charges                        | No         | -                                                                                                     | 
| 2.16.13    | total                        | number  | Total amount                            | Yes        | -                                                                                                     | 
| 2.16.14    | prepaidAmount                | number  | Amount paid while ordering              | No         | -                                                                                                     | 
| 2.16.15    | voucherValue                 | number  | Voucher value                           | No         | -                                                                                                     | 
| 2.16.16    | serviceTax                   | number  | Service tax                             | No         | -                                                                                                     | 
| 2.16.17    | additionalTax                | number  | Additional tax (if any)                 | No         | -                                                                                                     | 
| 2.16.18    | giftWrapCharges              | number  | Extra charges for the wrap              | No         | -                                                                                                     | 
| 2.16.19    | storeCredit                  | number  | Store credit                            | No         | -                                                                                                     | 
| 2.16.20    | additionalInfo               | string  | Any additional information              | No         | -                                                                                                     | 
| 2.16.21    | quantity                     | number  | Qty of the item                         | Yes        | -                                                                                                     | 
| 2.16.22    | itemDetails                  | string  | Details of item                         | No         | -                                                                                                     | 
| 2.16.23    | taxPercentageDetail          | object  | Tax percentage details                  | No         | -                                                                                                     | 
| 2.16.23.1  | taxTypeCode                  | string  | Tax type code                           | No         | -                                                                                                     | 
| 2.16.23.2  | vat                          | number  | Value Added Tax                         | No         | -                                                                                                     | 
| 2.16.23.3  | cst                          | number  | Central Sales Tax                       | No         | -                                                                                                     | 
| 2.16.23.4  | cstFormc                     | number  | CST form c                              | No         | -                                                                                                     | 
| 2.16.23.5  | taxPercentage                | integer | Tax percentage                          | No         | -                                                                                                     | 
| 2.16.23.6  | serviceTax                   | number  | Service tax                             | No         | -                                                                                                     | 
| 2.16.23.7  | additionalTax                | number  | Additional tax (if any)                 | No         | -                                                                                                     | 
| 2.16.23.8  | centralGst                   | integer | Central GST                             | No         | -                                                                                                     | 
| 2.16.23.9  | stateGst                     | integer | State GST                               | No         | -                                                                                                     | 
| 2.16.23.10 | unionTerritoryGst            | integer | UT GST                                  | No         | -                                                                                                     | 
| 2.16.23.11 | integratedGst                | integer | Integrated GST                          | No         | -                                                                                                     | 
| 2.16.23.12 | compensationCess             | integer | Compensation cess                       | No         | -                                                                                                     | 
| 2.16.24    | customFieldValues            | list    | Custom field details                    | No         | -                                                                                                     | 
| 2.16.24.1  | name                         | string  | Custom field name                       | Yes        | -                                                                                                     | 
| 2.16.24.2  | value                        | string  | Custom field value                      | No         | -                                                                                                     | 
| 3          | userId                       | integer | User ID                                 | Yes        | -                                                                                                     | 
| 4          | shippingProviderCode         | string  | Shipping provider code                  | No         | -                                                                                                     | 
| 5          | trackingNumber               | string  | Tracking number                         | No         | -                                                                                                     | 
 
 

 
 


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
   "invoiceCode": "string",
   "shippingPackageCode": "string"
}
```

## Response Parameters

| LEVEL | PARAMETER           | TYPE   | DESCRIPTION               | NOTES | 
|:------|:--------------------|:------:|:--------------------------|:------| 
| 1     | successful          | TRUE   | Request success status    | -     | 
| 2     | message             | string | Response message          | -     | 
| 3     | errors              | list   | List of errors (if any)   | -     | 
| 3.1   | code                | number | Error code                | -     | 
| 3.2   | fieldName           | string | Field with error          | -     | 
| 3.3   | description         | string | Error description         | -     | 
| 3.4   | message             | string | Error message             | -     | 
| 3.5   | errorParams         | object | Parameters with error     | -     | 
| 3.5.1 | additionalProp1     | object | Parameter 1 with error    | -     | 
| 3.5.2 | additionalProp2     | object | Parameter 2 with error    | -     | 
| 3.5.3 | additionalProp3     | object | Parameter 3 with error    | -     | 
| 4     | warnings            | list   | List of warnings (if any) | -     | 
| 4.1   | code                | number | Warning code              | -     | 
| 4.2   | message             | string | Warning message           | -     | 
| 4.3   | description         | string | Warning description       | -     | 
| 5     | invoiceCode         | string | Invoice code              | -     | 
| 6     | shippingPackageCode | string | Shipping package code     | -     | 
 


 



