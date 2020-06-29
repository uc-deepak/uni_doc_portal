---
id: waybill-generation
title: Waybill Generation
permalink: docs/waybill-generation.html
---


This API is used to get AWB (waybill) for the shipment (shippingPackage) from the shipping provider/aggregator. The shipment details will be sent along with seller and customer details in this HTTP POST request for AWB number creation. The waybill generation will be for both the package delivery to the customer and pickup package from customer for delivery to the seller. The expected response is supposed to provide waybill number along with the shippingLabel link for the PDF file of shippingLabel.


>Tip
>
> - It is recommended to check out [“Notes for the reader”](/docs/notes-for-reader.html). You might find this helpful as it contains **Guidelines**, **URL Details** and **Terminologies** used here.
>
> - In Case of Forward Delivery (delivering to the customer)
>   - pickupAddressId 		:  Seller Address Id, Optional
>   - deliveryAddressDetails 	:  Customer Address Details
>   - returnShipmentFlag 	:  false
>
> - In Case of Reverse Delivery (pickup from customer to the seller)
>   - pickupAddressDetails 	: Customer Address Details
>   - deliveryAddressId 		: Seller Address Id
>   - returnShipmentFlag 	: true 


## Basic Information

| NAME             | DETAILS                                                                 | 
| :----------------| :---------------------------------------------------------------------  | 
| End Point        | /waybill                                                               | 
| Request Type     | POST                                                                     | 
| Header (content-type)          | 'Accept: application/json'                                               |
| Header (authorization)          | token (got from user verification or hardcoded value)                                               |

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
| 1     | serviceType            | string  | Mode of shipment delivery (air, road)                    | Opt.       | -                                                                                                         | 
| 2     | handOverMode           | string  | -                                                        | Opt.       | Allowable: Drop, Pickup                                                                                   | 
| 3     | returnShipmentFlag     | boolean | High for reverse delivery                                | Yes        | Allowable: false (Forward Delivery), true (Reverse Delivery)                                              | 
| 4     | Shipment               | list    | List of items in a shipment                              | Yes        | -                                                                                                         | 
| 4.1   | code                   | string  | Shipment code/reference no.                              | Yes        | -                                                                                                         | 
| 4.2   | orderCode              | string  | Sale order code                                          | Yes        | -                                                                                                         | 
| 4.3   | orderDate              | date    | Date of order                                            | Yes        | -                                                                                                         | 
| 4.4   | fullFilllmentTat       | date    | Turnaround time for delivery                             | Yes        | -                                                                                                         | 
| 4.5   | weight                 | integer | Unit: gm                                                 | Yes        | Min.: 1                                                                                                   | 
| 4.6   | length                 | integer | Unit: mm                                                 | Yes        | Min.: 1                                                                                                   | 
| 4.7   | height                 | integer | Unit: mm                                                 | Yes        | Min.: 1                                                                                                   | 
| 4.8   | breadth                | integer | Unit: mm                                                 | Yes        | Min.: 1                                                                                                   | 
| 4.9   | items                  | array   | Details of items in shipment                             | Yes        | -                                                                                                         | 
| 4.9.1 | name                   | string  | Item name                                                | Yes        | -                                                                                                         | 
| 4.9.2 | description            | string  | Item description                                         | Yes        | -                                                                                                         | 
| 4.9.3 | quantity               | integer | Item quantity                                            | Yes        | -                                                                                                         | 
| 5     | deliveryAddressId      | string  | Seller address ID                                        | Opt.       | Forward: Customer address ID, Reverse: seller address ID                                                  | 
| 6     | deliveryAddressDetails | list    | Customer address details                                 | Yes        | Forward: Customer address details, Reverse: seller address details                                        | 
| 6.1   | name                   | string  | Receiver Name                                            | Yes        | -                                                                                                         | 
| 6.2   | email                  | string  | Receiver Email                                           | Opt.       | -                                                                                                         | 
| 6.3   | phone                  | string  | Receiver Phone                                           | Yes        | -                                                                                                         | 
| 6.4   | address1               | string  | Receiver Address                                         | Yes        | -                                                                                                         | 
| 6.5   | address2               | string  | Receiver Address                                         | Opt.       | -                                                                                                         | 
| 6.6   | pincode                | string  | Receiver Pin code                                        | Yes        | -                                                                                                         | 
| 6.7   | city                   | string  | Receiver City                                            | Yes        | -                                                                                                         | 
| 6.8   | state                  | string  | Receiver State                                           | Yes        | -                                                                                                         | 
| 6.9   | country                | string  | Receiver Country                                         | Yes        | -                                                                                                         | 
| 7     | pickupAddressId        | string  | Seller address ID                                        | Opt.       | Forward: Seller address ID, Reverse: customer address ID                                                  | 
| 8     | pickupAddressDetails   | list    | Customer address details                                 | Yes        | Forward: Seller address details, Reverse: customer address details                                        | 
| 8.1   | name                   | string  | Sender Name                                              | Yes        | -                                                                                                         | 
| 8.2   | email                  | string  | Sender Email                                             | Opt.       | -                                                                                                         | 
| 8.3   | phone                  | string  | Sender Phone                                             | Yes        | -                                                                                                         | 
| 8.4   | address1               | string  | Sender Address                                           | Yes        | -                                                                                                         | 
| 8.5   | address2               | string  | Sender Address                                           | Opt.       | -                                                                                                         | 
| 8.6   | pincode                | string  | Sender Pincode                                           | Yes        | -                                                                                                         | 
| 8.7   | city                   | string  | Sender City                                              | Yes        | -                                                                                                         | 
| 8.8   | state                  | string  | Sender State                                             | Yes        | -                                                                                                         | 
| 8.9   | country                | string  | Sender Country                                           | Yes        | -                                                                                                         | 
| 9     | currencyCode           | string  | Three letter currency code                               | Yes        | [Currency Codes](/docs/currency-codes.html)                                                               | 
| 10    | paymentMode            | string  | Mode of payment                                          | Yes        | Allowable: COD, PREPAID                                                                                   | 
| 11    | totalAmount            | integer | -                                                        | Yes        | -                                                                                                         | 
| 12    | collectableAmount      | integer | Amount to be collected at time of delivery               | Yes        | 0.00 for Prepaid mode                                                                                     | 
| 13    | courierName            | string  | Name of actual courier agency allocated to the shipment. | Opt.       | Filled only in case shipping provider assigns self-service. Generally mandatory for shipping aggregators. | 
 


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

| PARAMETER     | TYPE   | DESCRIPTION                | NOTES                                            | 
|:--------------|:--------:|:----------------------------|:--------------------------------------------------| 
| waybill       | string | Shipment tracking number   | -                                                | 
| shippingLabel | string | Path of the shipping label | If shipping provider provides own shipping label | 
| courierName   | string | Name of shipping provider  | -                                                | 
 
