---
id: getcourierdetails
title: Courier Details Fetching
permalink: docs/getcourierdetails.html
---

>Tip
>
>It is recommended to check out [“Notes for the reader”](/docs/notes-for-reader.html). You might find this helpful as it contains **Guidelines**, **URL Details** and **Terminologies** used here.


## Basic Information

| NAME             | DETAILS                                                                 | 
| :----------------| :---------------------------------------------------------------------  | 
| End Point        | /courierDetails                                          | 
| Request Type     | GET                                                     | 
| Header           | 'Accept: application/json'                                | 
| Sample URL       | `http://{tenant}.unicommerce.com/courierDetails?orderItemIds=abc123` |




## Query Parameters

|PARAMETERS     		    |TYPE      	 		    |DESCRIPTION			|MANDATORY	|NOTES	
|:----------------------|:-----------------:|:---------------|:---------:|:--------|
| orderItemIds | list | Item IDs    | Yes       | -     |



## Response Payload

```js
{
  "awbNo": "string",
  "status": "AVAILABLE",
  "courierCode": "string",
  "courierName": "string",
  "additionalInfo": "string"
}
```

## Response Parameters 

| LEVEL | PARAMETER      | TYPE   | DESCRIPTION                                           | MANDATORY  | NOTES                                                       | 
|:------|:---------------|:------:|:------------------------------------------------------|:----------:|:------------------------------------------------------------| 
| 1     | awbNo          | string | Way bill No. (shipment tracking no.)                  | Yes        | Eg: BHDESKFASLKEF                                           | 
| 2     | status         | string | AVAILABLE if courier and tracking number is available | Yes        | Allowable: AVAILABLE, SELLER\_SHIPPING, COURIER\_NOT\_ASSIGNED | 
| 3     | courierCode    | string | -                                                     | Yes        | Eg: Fedex                                                   | 
| 4     | courierName    | string | Name of shipping provider                             | Yes        | Eg: Fedex                                                   | 
| 5     | additionalInfo | string | Any additional information                            | No         | -                                                           | 



