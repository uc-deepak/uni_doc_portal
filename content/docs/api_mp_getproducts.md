---
id: getproducts
title: Products Fetching
permalink: docs/getproducts.html
---


The products are fetched by Unicommerce from the partner portal/marketplace regularly using the below method. The following section details the structure for various product related transactions. The partner is expected to refer the schema and comply to it for seamless data flow.

>Tip
>
> - It is recommended to check out [“Notes for the reader”](/docs/notes-for-reader.html). You might find this helpful as it contains **Guidelines**, **Terminologies** and **Abbreviations** used here.
>
> - In case there are no product variants, pass the product information in variant parameters also.

## Basic Information

| NAME             | DETAILS                                                                 | 
| :----------------| :---------------------------------------------------------------------  | 
| End Point        | /products                                                               | 
| Request Type     | GET                                                                     | 
| Header           | 'Accept: application/json'                                               | 
| Sample URL       | http://{datacenter}.unicommerce.com/products?pageNumber=1&pageSize=20&skus=abc&publishedStatus=PUBLISHED|
| -----------| ------------------------------------------------------------------------ |


## Query Parameters

|PARAMETERS     		    |TYPE      	 		    |DESCRIPTION			|MANDATORY	|NOTES	
|:----------------------|:-----------------:|:---------------|:---------:|:--------|
|pageNumber				      |string				      |Page (Number)			|Yes		    |           
|pageSize		   		      |string     		    |Page Size				|Yes		    |
|skus			  		        |string				      |SKU ID					  |Yes		    |
|publishedStatus		    |string				      |Posting Status		|Yes		    | Allowable: PUBLISHED, UNPUBLISHED       
|-----------------|------------|----------------|-------------------|------------------------------------------|

## Response Payload

Following is the schema defined for the product resource in Unicommerce system. Which means this includes superset of all the fields and types that define a product for the Unicommerce. The partner is expected to follow this schema for each product information, to complete the transaction successfully.

```js
{
  "products": [
    {
      "id": "string",
      "parentTitle": "string",
      "brand": "string",
      "variants": [
        {
          "imageUrl": "string",
          "productUrl": "string",
          "variantId": "string",
          "title": "string",
          "sku": "string",
          "size": "string",
          "color": "string",
          "live": false,
          "productDescription": "string",
          "itemPrice": {
            "currency": "string",
            "listingPrice": 0,
            "mrp": 0,
            "msp": 0,
            "netSellerPayable": 0
          },
          "inventory": 0,
          "blockedInventory": 0,
          "pendency": 0
        }
      ],
      "commissionPercentage": 0,
      "paymentGatewayCharge": 0,
      "logisticsCost": 0,
      "additionalInfo": "string",
      "created": "2017-01-02T08:12:53"
    }
  ]
}
```

## Response Parameters

| LEVEL       | PARAMETER            | TYPE   | DESCRIPTION                                                                     | MANDATORY | NOTES                                                                 |
|:-------------|:----------------------|:--------:|:-----------------------------------------|:-----------:|:------------------------|
| 1        | products             | -       | -                                                                                                              | -         | -                                                            | 
| 1.1      | id                   | string  | Unique ID of the product                                                                                       | Yes       | Eg: 79309                                                    | 
| 1.2      | parentTitle          | string  | Title of the product                                                                                          | Yes       | Eg: Cotton Double Bedsheet with 2 Pillow Covers - Blue)       | 
| 1.3      | brand                | string  | Brand of the product                                                                                           | Yes       | Eg: Bombay Dyeing                                            | 
| 1.4      | variants             | -       | If No variant, then add product data in variant parameters                                                                                                              | -         | -   | 
| 1.4.1    | imageUrl             | string  | Image URL of the variant                                                                                       | No        | -                                                            | 
| 1.4.2    | productUrl           | string  | Product URL of the variant                                                                                     | No        | -                                                            | 
| 1.4.3    | variantId            | string  | Unique ID of the variant.                                                                                      | Yes       | Eg: 79309                                                    | 
| 1.4.4    | title                | string  | Title of the variant.                                                                                          | Yes       | Eg: Cotton Double Size Bedsheet with 2 Pillow Covers (Green) | 
| 1.4.5    | sku                  | string  | SKU code of the variant as per marketplace                                                                     | Yes       | Eg: BD-Floral-3                                              | 
| 1.4.6    | size                 | string  | Size of the variant                                                                                            | Yes       | Format: LxBxH, Unit: mm, Eg: 60.00X40.00X2.00                | 
| 1.4.7    | color                | string  | Color of the variant                                                                                           | No        |                                                              | 
| 1.4.8    | live                 | boolean | Product availability on marketplace. <br> true for product available on marketplace,<br> false for non-sellable product | Yes       | Default: true                                                | 
| 1.4.9    | productDescription   | string  | Description of the product                                                                                     | No        | -                                                            | 
| 1.4.10   | itemPrice            | -       | -                                                                                                              | -         | -                                                            | 
| 1.4.10.1 | currency             | string  | INR                                                                                                            | No        | INR                                                          | 
| 1.4.10.2 | listingPrice         | number  | -                                                                                                              | No        | -                                                            | 
| 1.4.10.3 | mrp                  | number  | Max. price                                                                                                     | No        | -                                                            | 
| 1.4.10.4 | msp                  | number  | Min. price                                                                                                     | No        | -                                                            | 
| 1.4.10.5 | netSellerPayable     | number  | -                                                                                                              | No        | -                                                            | 
| 1.4.11   | inventory            | number  | available quantity                                                                                             | No        | -                                                            | 
| 1.4.11   | blockedInventory     | number  | quantity blocked                                                                                               | No        | -                                                            | 
| 1.4.11   | pendency             | number  | -                                                                                                              | No        | -                                                            | 
| 1.5      | commissionPercentage | number  | -                                                                                                              | No        | -                                                            | 
| 1.6      | paymentGatewayCharge | number  | -                                                                                                              | No        | -                                                            | 
| 1.7      | logisticsCost        | number  | -                                                                                                              | No        | -                                                            | 
| 1.8      | additionalInfo       | string  | Any additional information of the product                                                                      | No        | -                                                            | 
| 1.9      | created              | string  | Created date of the product on Marketplace                                                                     | No        | -                                                            | 
|-------|------------------------|--------|-------------------------------|-------------|--------------------------|

