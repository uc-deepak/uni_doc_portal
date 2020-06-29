---
id: saleorder-create
title: Create Sale Order
permalink: docs/saleorder-create.html
---

>Tip
>
> - It is recommended to check out [“Notes for the reader”](/docs/notes-for-reader.html). You might find this helpful as it contains **Guidelines**, **URL Details** and **Terminologies** used here.

## Basic Information

| NAME             | DETAILS                                                                 | 
| :----------------| :---------------------------------------------------------------------  | 
| End Point        | /services/rest/v1/oms/saleOrder/create                                                   | 
| Request Type     | POST                                                                     | 
| Header           | 'Accept: application/json'                                               |     




## Request Payload

```js
{
   "saleOrder": {
      "code": "string",
      "displayOrderCode": "string",
      "displayOrderDateTime": "2020-06-11T09:23:48.023Z",
      "customerCode": "string",
      "customerName": "string",
      "channel": "string",
      "notificationEmail": "string",
      "notificationMobile": "string",
      "cashOnDelivery": true,
      "paymentInstrument": "CASH",
      "additionalInfo": "string",
      "thirdPartyShipping": true,
      "shippingProviders": [
         {
            "packetNumber": 0,
            "code": "string",
            "trackingNumber": "string"
         }
      ],
      "saleOrderItemCombinations": [
         {
            "combinationIdentifier": "string",
            "combinationDescription": "string"
         }
      ],
      "addresses": [
         {
            "id": "string",
            "name": "string",
            "addressLine1": "string",
            "addressLine2": "string",
            "city": "string",
            "state": "string",
            "country": "string",
            "pincode": "string",
            "phone": "string",
            "email": "string"
         }
      ],
      "billingAddress": {
         "referenceId": "string"
      },
      "shippingAddress": {
         "referenceId": "string"
      },
      "saleOrderItems": [
         {
            "code": "string",
            "status": "string",
            "shelfCode": "string",
            "reason": "string"
         }
      ],
      "customFieldValues": [
         {
            "name": "string",
            "value": "string"
         }
      ],
      "currencyCode": "string",
      "taxExempted": true,
      "cformProvided": true,
      "fulfillmentTat": "2020-06-11T09:23:48.023Z",
      "verificationRequired": true,
      "priority": 0,
      "totalDiscount": 0,
      "totalShippingCharges": 0,
      "totalCashOnDeliveryCharges": 0,
      "totalGiftWrapCharges": 0,
      "totalStoreCredit": 0,
      "totalPrepaidAmount": 0,
      "useVerifiedListings": true
   },
   "invoices": [
      {
         "code": "string",
         "displayCode": "string",
         "channelCreated": "2020-06-11T09:23:48.023Z",
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
      }
   ]
}
```

## Request Parameters

| LEVEL       | PARAMETER            | TYPE   | DESCRIPTION                                                                     | MANDATORY | NOTES                                                                 |
|:-------------|:----------------------|:--------:|:-----------------------------------------|:-----------:|:------------------------|  
| 1          | saleOrder                    | object  | Sale order details                                                                             | Yes             | -                                                                                                    | 
| 1.1        | code                         | string  | Sale order code                                                                                | No              | Max. chars: 45                                                                                       | 
| 1.2        | displayOrderCode             | string  | Order code to be displayed                                                                     | No              | Max. chars: 45                                                                                       | 
| 1.3        | displayOrderDateTime         | date    | Order Date to be displayed                                                                     | No              | -                                                                                                    | 
| 1.4        | customerCode                 | string  | Customer code                                                                                  | No              | -                                                                                                    | 
| 1.5        | customerName                 | string  | Customer name                                                                                  | No              | Max. chars: 100                                                                                      | 
| 1.6        | channel                      | string  | Channel name                                                                                   | No              | -                                                                                                    | 
| 1.7        | notificationEmail            | string  | Email for notifications                                                                        | No              | Max. chars: 100                                                                                      | 
| 1.8        | notificationMobile           | string  | Mobile for notifications                                                                       | No              | Max. chars: 45                                                                                       | 
| 1.9        | cashOnDelivery               | boolean | true if COD                                                                                    | Yes             | -                                                                                                    | 
| 1.10       | paymentInstrument            | string  | Mode of payment                                                                                | No              | Allowable: CASH (default), CREDIT\_CARD, DEBIT\_CARD, NET\_BANKING, WALLET                              | 
| 1.11       | additionalInfo               | string  | Any additional information                                                                     | No              | Max. chars: 500                                                                                      | 
| 1.12       | thirdPartyShipping           | boolean | true if the shipping to end customer is taken care by the Marketplace. false for self shipping | No              | Default: true                                                                                        | 
| 1.13       | shippingProviders            | object  | Shipping details                                                                               | No              | -                                                                                                    | 
| 1.13.1     | packetNumber                 | integer | No. of packets in a shipment                                                                   | Yes             | Default: 0                                                                                           | 
| 1.13.2     | code                         | string  | Shipment code                                                                                  | Yes             | -                                                                                                    | 
| 1.13.3     | trackingNumber               | string  | Shipment tracking number                                                                       | No              | Max. chars: 45                                                                                       | 
| 1.14       | saleOrderItemCombinations    | object  | Details of item combinations                                                                   | No              | -                                                                                                    | 
| 1.14.1     | combinationIdentifier        | string  | Combination identifier                                                                         | Yes             | -                                                                                                    | 
| 1.14.2     | combinationDescription       | string  | Combination description                                                                        | Yes             | Max. chars: 200                                                                                      | 
| 1.15       | addresses                    | object  | Address information                                                                            | No              | -                                                                                                    | 
| 1.15.1     | id                           | string  | ID                                                                                             | Yes             | -                                                                                                    | 
| 1.15.2     | name                         | string  | Name                                                                                           | Yes             | Max. chars: 100                                                                                      | 
| 1.15.3     | addressLine1                 | string  | Precise address                                                                                | Yes             | Max. chars: 500                                                                                      | 
| 1.15.4     | addressLine2                 | string  | Additional address information                                                                 | No              | -                                                                                                    | 
| 1.15.5     | city                         | string  | City Name                                                                                      | Yes             | Eg: Surat, Max. chars: 100                                                                           | 
| 1.15.6     | state                        | string  | State name                                                                                     | Yes             | Eg: Gujrat, Max. chars: 45                                                                           | 
| 1.15.7     | country                      | string  | Country code not name                                                                          | No              | -                                                                                                    | 
| 1.15.8     | pincode                      | string  | Area pincode (6 digit)                                                                         | No              | Eg: 395006, Max. chars: 100                                                                          | 
| 1.15.9     | phone                        | string  | Mobile No. (9 digit)                                                                           | Yes             | Default: 999999999, Max. chars: 100                                                                  | 
| 1.15.10    | email                        | string  | Email ID                                                                                       | No              | Case insensitive, Max. chars: 100                                                                    | 
| 1.16       | billingAddress               | object  | -                                                                                              | No              | -                                                                                                    | 
| 1.16.1     | referenceId                  | string  | -                                                                                              | Yes             | -                                                                                                    | 
| 1.17       | shippingAddress              | object  | -                                                                                              | No              | -                                                                                                    | 
| 1.17.1     | referenceId                  | string  | -                                                                                              | Yes             | -                                                                                                    | 
| 1.18       | saleOrderItems               | list    | List of ordered items                                                                          | No              | Max. chars: 5000                                                                                     | 
| 1.18.1     | code                         | string  | Item code                                                                                      | Yes             | -                                                                                                    | 
| 1.18.2     | status                       | string  | Item status                                                                                    | No              | -                                                                                                    | 
| 1.18.3     | shelfCode                    | string  | Shelf ID for the item                                                                          | No              | Default: DEFAULT                                                                                     | 
| 1.18.4     | reason                       | string  | Reason                                                                                         | No              | -                                                                                                    | 
| 1.19       | customFieldValues            | list    | -                                                                                              | No              | -                                                                                                    | 
| 1.19.1     | name                         | string  | Custom field nalue                                                                             | Yes             | -                                                                                                    | 
| 1.19.2     | value                        | string  | Custom field value                                                                             | No              | -                                                                                                    | 
| 1.20       | currencyCode                 | string  | Currency codes (3 digit)                                                                       | No              | [Currency Codes](/docs/currency-codes.html)                                                          | 
| 1.21       | taxExempted                  | boolean | true if tax exemption on item                                                                  | No              | Default: true                                                                                        | 
| 1.22       | cformProvided                | boolean | true if cform provided                                                                         | No              | Default: true                                                                                        | 
| 1.23       | fulfillmentTat               | date    | Fulfillment date                                                                               | No              | -                                                                                                    | 
| 1.24       | verificationRequired         | boolean | true if verification required                                                                  | No              | Default: true                                                                                        | 
| 1.25       | priority                     | integer | Order fullfillment priority                                                                    | No              | -                                                                                                    | 
| 1.26       | totalDiscount                | number  | Discount amount                                                                                | No              | -                                                                                                    | 
| 1.27       | totalShippingCharges         | number  | Shipping charges                                                                               | No              | -                                                                                                    | 
| 1.28       | totalCashOnDeliveryCharges   | number  | Charges for COD                                                                                | Yes for COD     | -                                                                                                    | 
| 1.29       | totalGiftWrapCharges         | number  | Gift charges                                                                                   | No              | -                                                                                                    | 
| 1.30       | totalStoreCredit             | number  | Total store credit                                                                             | No              | -                                                                                                    | 
| 1.31       | totalPrepaidAmount           | number  | Amount paid while ordering                                                                     | Yes for Prepaid | -                                                                                                    | 
| 1.32       | useVerifiedListings          | boolean | true to use verified listings                                                                  | No              | Default: true                                                                                        | 
| 2          | invoices                     | object  | Invoice details                                                                                | No              | -                                                                                                    | 
| 2.1        | code                         | string  | Invoice code                                                                                   | No              | Max. chars: 45                                                                                       | 
| 2.2        | displayCode                  | string  | Display code                                                                                   | No              | Max. chars: 45                                                                                       | 
| 2.3        | channelCreated               | date    | Channel creation date                                                                          | No              | -                                                                                                    | 
| 2.4        | channelCode                  | string  | Channel code                                                                                   | No              | -                                                                                                    | 
| 2.5        | fromPartyCode                | string  | From party code                                                                                | No              | -                                                                                                    | 
| 2.6        | toPartyCode                  | string  | To party code                                                                                  | No              | -                                                                                                    | 
| 2.7        | source                       | enum    | -                                                                                              | No              | Allowable: SHIPPING\_PACKAGE, PURCHASE\_ORDER, GATEPASS                                                | 
| 2.8        | destinationStateCode         | string  | Destination state code                                                                         | No              | -                                                                                                    | 
| 2.9        | destinationCountryCode       | string  | Destination country code                                                                       | No              | -                                                                                                    | 
| 2.10       | type                         | enum    | -                                                                                              | No              | Allowable: SALE, PURCHASE, GATEPASS, SALE\_RETURN, PURCHASE\_RETURN, GATEPASS\_RETURN, DELIVERY_CHALLAN | 
| 2.11       | userId                       | integer | User ID                                                                                        | No              | -                                                                                                    | 
| 2.12       | productManagementSwitchedOff | boolean | -                                                                                              | No              | Default: true                                                                                        | 
| 2.13       | taxExempted                  | boolean | Tax Exemption on item                                                                          | No              | Fixed: false                                                                                         | 
| 2.14       | cformProvided                | boolean | true if cform provided                                                                         | No              | Default: true                                                                                        | 
| 2.15       | url                          | string  | URL                                                                                            | No              | -                                                                                                    | 
| 2.16       | invoiceItems                 | list    | List of items                                                                                  | No              | -                                                                                                    | 
| 2.16.1     | skuCode                      | string  | SKU code of the item on the marketplace                                                        | No              | Eg: BD\_Floral\_3                                                                                      | 
| 2.16.2     | bundleSkuCode                | string  | SKU code for bundle                                                                            | No              | -                                                                                                    | 
| 2.16.3     | channelProductId             | string  | Channel product ID                                                                             | No              | -                                                                                                    | 
| 2.16.4     | sellerSkuCode                | string  | Seller SKU code                                                                                | No              | -                                                                                                    | 
| 2.16.5     | saleOrderItemCodes           | string  | Sale order item code                                                                           | No              | -                                                                                                    | 
| 2.16.6     | saleOrderItems               | list    | Details of items in sale order                                                                 | No              | -                                                                                                    | 
| 2.16.6.1   | code                         | string  | Item code                                                                                      | Yes             | -                                                                                                    | 
| 2.16.6.2   | status                       | string  | Status                                                                                         | No              | -                                                                                                    | 
| 2.16.6.3   | shelfCode                    | string  | Default shelf code for item                                                                    | No              | Default: DEFAULT                                                                                     | 
| 2.16.6.4   | reason                       | string  | Reason                                                                                         | No              | -                                                                                                    | 
| 2.16.7     | unitPrice                    | number  | Price of single item                                                                           | No              | -                                                                                                    | 
| 2.16.8     | subtotal                     | number  | Sub-total                                                                                      | No              | -                                                                                                    | 
| 2.16.9     | discount                     | number  | Discount amount                                                                                | No              | -                                                                                                    | 
| 2.16.10    | shippingCharges              | number  | Shipping charges                                                                               | No              | -                                                                                                    | 
| 2.16.11    | cashOnDeliveryCharges        | number  | COD charges                                                                                    | No              | -                                                                                                    | 
| 2.16.12    | shippingMethodCharges        | number  | Shipping charges                                                                               | No              | -                                                                                                    | 
| 2.16.13    | total                        | number  | Total amount                                                                                   | Yes             | -                                                                                                    | 
| 2.16.14    | prepaidAmount                | number  | Amount paid while ordering                                                                     | No              | -                                                                                                    | 
| 2.16.15    | voucherValue                 | number  | Voucher value                                                                                  | No              | -                                                                                                    | 
| 2.16.16    | serviceTax                   | number  | Service tax                                                                                    | No              | -                                                                                                    | 
| 2.16.17    | additionalTax                | number  | Additional tax (if any)                                                                        | No              | -                                                                                                    | 
| 2.16.18    | giftWrapCharges              | number  | Extra charges for the wrap                                                                     | No              | -                                                                                                    | 
| 2.16.19    | storeCredit                  | number  | Store credit                                                                                   | No              | -                                                                                                    | 
| 2.16.20    | additionalInfo               | string  | Any additional information                                                                     | No              | -                                                                                                    | 
| 2.16.21    | quantity                     | integer | Qty of the item ordered                                                                        | Yes             | Default: 1                                                                                           | 
| 2.16.22    | itemDetails                  | string  | Details of item                                                                                | No              | -                                                                                                    | 
| 2.16.23    | taxPercentageDetail          | object  | Tax percentage details                                                                         | No              | -                                                                                                    | 
| 2.16.23.1  | taxTypeCode                  | string  | Tax type code                                                                                  | No              | -                                                                                                    | 
| 2.16.23.2  | vat                          | number  | Value Added Tax                                                                                | No              | -                                                                                                    | 
| 2.16.23.3  | cst                          | number  | Central Sales Tax                                                                              | No              | -                                                                                                    | 
| 2.16.23.4  | cstFormc                     | number  | CST form c                                                                                     | No              | -                                                                                                    | 
| 2.16.23.5  | taxPercentage                | number  | Tax percentage                                                                                 | No              | -                                                                                                    | 
| 2.16.23.6  | serviceTax                   | number  | Service tax                                                                                    | No              | -                                                                                                    | 
| 2.16.23.7  | additionalTax                | number  | Additional tax (if any)                                                                        | No              | -                                                                                                    | 
| 2.16.23.8  | centralGst                   | number  | Central GST                                                                                    | No              | -                                                                                                    | 
| 2.16.23.9  | stateGst                     | number  | State GST                                                                                      | No              | -                                                                                                    | 
| 2.16.23.10 | unionTerritoryGst            | number  | UT GST                                                                                         | No              | -                                                                                                    | 
| 2.16.23.11 | integratedGst                | number  | Integrated GST                                                                                 | No              | -                                                                                                    | 
| 2.16.23.12 | compensationCess             | number  | Compensation cess                                                                              | No              | -                                                                                                    | 
| 2.16.24    | customFieldValues            | list    | List of custom fields                                                                          | No              | -                                                                                                    | 
| 2.16.24.1  | name                         | string  | Custom field name                                                                              | Yes             | -                                                                                                    | 
| 2.16.24.2  | value                        | string  | Custom field value                                                                             | No              | -                                                                                                    | 
 
 


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
   "saleOrderDetailDTO": {
      "code": "string",
      "displayOrderCode": "string",
      "channel": "string",
      "displayOrderDateTime": "2020-06-11T09:24:09.093Z",
      "status": "string",
      "created": "2020-06-11T09:24:09.093Z",
      "updated": "2020-06-11T09:24:09.093Z",
      "notificationEmail": "string",
      "notificationMobile": "string",
      "cod": true,
      "priority": 0,
      "currencyCode": "string",
      "customerCode": "string",
      "billingAddress": {
         "id": "string",
         "name": "string",
         "addressLine1": "string",
         "addressLine2": "string",
         "city": "string",
         "state": "string",
         "country": "string",
         "pincode": "string",
         "phone": "string",
         "email": "string"
      },
      "addresses": [
         {
            "id": "string",
            "name": "string",
            "addressLine1": "string",
            "addressLine2": "string",
            "city": "string",
            "state": "string",
            "country": "string",
            "pincode": "string",
            "phone": "string",
            "email": "string"
         }
      ],
      "customFieldValues": [
         {
            "fieldName": "string",
            "fieldValue": {},
            "valueType": "string",
            "displayName": "string",
            "required": true,
            "possibleValues": [
               "string"
            ]
         }
      ]
   }
}
```

## Response Parameters
 
| LEVEL   | PARAMETER            | TYPE    | DESCRIPTION                       | NOTES              | 
|:--------|:---------------------|:-------:|:----------------------------------|:-------------------| 
| 1       | successful           | TRUE    | Request success status            | -                  | 
| 2       | message              | string  | Response message                  | -                  | 
| 3       | errors               | list    | List of errors (if any)           | -                  | 
| 3.1     | code                 | number  | Error code                        | -                  | 
| 3.2     | fieldName            | string  | Field with error                  | -                  | 
| 3.3     | description          | string  | Warning description               | -                  | 
| 3.4     | message              | string  | Error message                     | -                  | 
| 3.5     | errorParams          | object  | Parameters with error             | -                  | 
| 3.5.1   | additionalProp1      | object  | Parameter 1 with error            | -                  | 
| 3.5.2   | additionalProp2      | object  | Parameter 2 with error            | -                  | 
| 3.5.3   | additionalProp3      | object  | Parameter 3 with error            | -                  | 
| 4       | warnings             | list    | List of warnings (if any)         | -                  | 
| 4.1     | code                 | number  | Warning code                      | -                  | 
| 4.2     | message              | string  | Warning message                   | -                  | 
| 4.3     | description          | string  | Warning description               | -                  | 
| 5       | saleOrderDetailDTO   | object  | Sale order details                | -                  | 
| 5.1     | code                 | string  | Sale order code                   | -                  | 
| 5.2     | displayOrderCode     | string  | Order code to be displayed        | -                  | 
| 5.3     | channel              | string  | Channel name                      | -                  | 
| 5.4     | displayOrderDateTime | date    | Order Date to be displayed        | -                  | 
| 5.5     | status               | string  | Status                            | -                  | 
| 5.6     | created              | date    | Sale order creation date          | -                  | 
| 5.7     | updated              | date    | Sale order updation date          | -                  | 
| 5.8     | notificationEmail    | string  | Email for notifications           | -                  | 
| 5.9     | notificationMobile   | string  | Mobile for notifications          | -                  | 
| 5.10    | cod                  | boolean | true if COD                       | -                  | 
| 5.11    | priority             | integer | Order fullfillment priority       | Default: 0         | 
| 5.12    | currencyCode         | string  | Currency codes (3 digit)          | Default: INR       | 
| 5.13    | customerCode         | string  | Customer code                     | -                  | 
| 5.14    | billingAddress       | object  | -                                 | -                  | 
| 5.14.1  | id                   | string  | Buyer ID                          | -                  | 
| 5.14.2  | name                 | string  | Buyer name                        | -                  | 
| 5.14.3  | addressLine1         | string  | Precise address of the buyer      | -                  | 
| 5.14.4  | addressLine2         | string  | Additional address information    | -                  | 
| 5.14.5  | city                 | string  | City Name                         | Eg: Surat          | 
| 5.14.6  | state                | string  | State name                        | Eg: Gujrat         | 
| 5.14.7  | country              | string  | Country code not name             | -                  | 
| 5.14.8  | pincode              | string  | Area pincode (6 digit)            | Eg: 395006         | 
| 5.14.9  | phone                | string  | Mobile No. (9 digit)              | Default: 999999999 | 
| 5.14.10 | email                | string  | Email ID                          | case insensitive   | 
| 5.15    | addresses            | object  | Address information               | -                  | 
| 5.15.1  | id                   | string  | ID                                | -                  | 
| 5.15.2  | name                 | string  | Name                              | -                  | 
| 5.15.3  | addressLine1         | string  | Precise address                   | -                  | 
| 5.15.4  | addressLine2         | string  | Additional address information    | -                  | 
| 5.15.5  | city                 | string  | City Name                         | Eg: Surat          | 
| 5.15.6  | state                | string  | State name                        | Eg: Gujrat         | 
| 5.15.7  | country              | string  | Country code not name             | -                  | 
| 5.15.8  | pincode              | string  | Area pincode (6 digit)            | Eg: 395006         | 
| 5.15.9  | phone                | string  | Mobile No. (9 digit)              | Default: 999999999 | 
| 5.15.10 | email                | string  | Email ID                          | case insensitive   | 
| 5.16    | customFieldValues    | list    | Custom field details              | -                  | 
| 5.16.1  | fieldName            | string  | Custom field name                 | -                  | 
| 5.16.2  | fieldValue           | list    | Custom field value                | -                  | 
| 5.16.3  | valueType            | string  | Value type                        | -                  | 
| 5.16.4  | displayName          | string  | Name to be displayed              | -                  | 
| 5.16.5  | required             | boolean | true if required                  | Default: true      | 
| 5.16.6  | possibleValues       | list    | Possible values for custom field | -                  | 
 



