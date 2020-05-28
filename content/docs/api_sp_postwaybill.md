---
id: waybill-generation
title: Waybill Generation
permalink: docs/waybill-generation.html
---


This API is used to get AWB (waybill) for a shipment from the shipping provider/aggregator. The seller using below method sends the shipping package details (which includes sender and receiver details) to get the AWB (waybill) number and shipping label (.pdf format).

>Tip
>
> - The below method is applicable for:
>   -	Forward Delivery - Package delivery to the customer.
>   -	Reverse Delivery - Package pick-up from the customer.
>
> - It is recommended to check out [“Notes for the reader”](/docs/notes-for-reader.html). You might find this helpful as it contains **Guidelines**, **Terminologies** and **Abbreviations** used here.
>
> - In case there are no product variants, pass the product information in variant parameters also.

## Basic Information

| NAME             | DETAILS                                                                 | 
| :----------------| :---------------------------------------------------------------------  | 
| End Point        | /waybill                                                               | 
| Request Type     | POST                                                                     | 
| Header           | 'Accept: application/json'                                               |
| ------------------|--------------------------- |

## Request Payload

```js
{
   "serviceType": "String",
   "handOverMode": "String",
   "returnShipmentFlag": "Boolean",
   "Shipment": {
      "code": "String",
      "orderCode": "String",
      "orderDate": "Date",
      "fullFilllmentTat": "Date",
      "weight": "Number",
      "length": "Number",
      "height": "Number",
      "breadth": "Number",
      "items": [
         {
            "name": "String",
            "description": "String",
            "quantity": "Number"
         }
      ]
   },
   "deliveryAddressId": "String",
   "deliveryAddressDetails": {
      "name": "String",
      "email": "String",
      "phone": "String",
      "address1": "String",
      "address2": "String",
      "pincode": "String",
      "city": "String",
      "state": "String",
      "country": "String"
   },
   "pickupAddressId": "String",
   "pickupAddressDetails": {
      "name": "String",
      "email": "String",
      "phone": "String",
      "address": "String",
      "address2": "String",
      "pincode": "String",
      "city": "String",
      "state": "String",
      "country": "String"
   },
   "currencyCode": "String",
   "paymentMode": "String",
   "totalAmount": "Number",
   "collectableAmount": "Number",
   "courierName": "String"
}
```

## Request Parameters

| LEVEL       | PARAMETER            | TYPE   | DESCRIPTION                                                                     | MANDATORY | NOTES                                                                 |
|:-------------|:----------------------|:--------:|:-----------------------------------------|:-----------:|:------------------------|
| 1     | serviceType            | string  | Mode of shipment delivery (air, road)      | No        | -                                                             | 
| 2     | handOverMode           | string  | -                                          | No        | Allowable: [Drop, Pickup]                                     | 
| 3     | returnShipmentFlag     | boolean | High for reverse delivery                  | -         | Allowable: false (Forward Delivery), true (Reverse Delivery)  | 
| 4     | Shipment               | list    | -                                          | -         | -                                                             | 
| 4.1   | code                   | string  | -                                          | -         | -                                                             | 
| 4.2   | orderCode              | string  | -                                          | -         | -                                                             | 
| 4.3   | orderDate              | date    | Date of order                              | -         |                                | 
| 4.4   | fullFilllmentTat       | date    |                                            | -         | -                                                             | 
| 4.5   | weight                 | number  | Unit: gm                                   | -         | Min.: 1                                                 | 
| 4.6   | length                 | number  | Unit: mm                                   | -         | Min.: 1                                                 | 
| 4.7   | height                 | number  | Unit: mm                                   | -         | Min.: 1                                                 | 
| 4.8   | breadth                | number  | Unit: mm                                   | -         | Min.: 1                                                 | 
| 4.9   | items                  | array   | Details of contents in shipment            | -         | -                                                             | 
| 4.9.1 | name                   | string  |                                            | -         | -                                                             | 
| 4.9.2 | description            | string  |                                            | -         | -                                                             | 
| 4.9.3 | quantity               | number  | Item quantity                              | -         | -                                                             | 
| 5     | deliveryAddressId      | string  | Seller address ID                          | -         | Applicability: Reverse Delivery                               | 
| 6     | deliveryAddressDetails | list    | Customer address details                   | -         | Applicability: Forward Delivery                               | 
| 6.1   | name                   | string  | Receiver Name                              | -         | -                                                             | 
| 6.2   | email                  | string  | Receiver Email                             | -         | -                                                             | 
| 6.3   | phone                  | string  | Receiver Phone                             | -         | -                                                             | 
| 6.4   | address1               | string  | Receiver Address                           | -         | -                                                             | 
| 6.5   | address2               | string  | Receiver Address                           | -         | -                                                             | 
| 6.6   | pincode                | string  | Receiver Pincode                           | -         | -                                                             | 
| 6.7   | city                   | string  | Receiver City                              | -         | -                                                             | 
| 6.8   | state                  | string  | Receiver State                             | -         | -                                                             | 
| 6.9   | country                | string  | Receiver Country                           | -         | -                                                             | 
| 7     | pickupAddressId        | string  | Seller address ID                          | No        | Applicability: Forward Delivery                               | 
| 8     | pickupAddressDetails   | list    | Customer address details                   | -         | Applicability: Reverse Delivery                               | 
| 8.1   | name                   | string  | Sender Name                                | -         | -                                                             | 
| 8.2   | email                  | string  | Sender Email                               | -         | -                                                             | 
| 8.3   | phone                  | string  | Sender Phone                               | -         | -                                                             | 
| 8.4   | address1               | string  | Sender Address                             | -         | -                                                             | 
| 8.5   | address2               | string  | Sender Address                             | -         | -                                                             | 
| 8.6   | pincode                | string  | Sender Pincode                             | -         | -                                                             | 
| 8.7   | city                   | string  | Sender City                                | -         | -                                                             | 
| 8.8   | state                  | string  | Sender State                               | -         | -                                                             | 
| 8.9   | country                | string  | Sender Country                             | -         | -                                                             | 
| 9     | currencyCode           | string  | Three letter currency code                 | -         | -                                                             | 
| 10    | paymentMode            | string  | Mode of payment                            | -         | Allowable: [COD, PREPAID]                                     | 
| 11    | totalAmount            | number  | -                                          | -         | -                                                             | 
| 12    | collectableAmount      | number  | Amount to be collected at time of delivery | -         | 0 for Prepaid mode                                            | 
| 13    | courierName            | string  | -                                          | -         | Filled only if shipping provider assign self service provider | 
|------|----------------------|--------|---------------------------|-------------|--------------------------|

## Response Payload

```js
{
“status”: “SUCCESS”,
“waybill”: “String”,
“shippingLabel”: “String”,
“courierName”: “String”
}
```

## Response Parameters

| PARAMETER            | TYPE   | DESCRIPTION                                                                     | MANDATORY | NOTES                                                                 |
|:----------------------|:--------:|:-----------------------------------------|:-----------:|:------------------------| 
| waybill       | String | Shipment tracking number   | -         | -                                                | 
| shippingLabel | String | Path of the shipping label | No        | If shipping provider provides own shipping label | 
| courierName   | String | Name of shipping provider  | -         | -                                                | 
|--------------|-------|------------------------------|----------|----------------------------------------------|