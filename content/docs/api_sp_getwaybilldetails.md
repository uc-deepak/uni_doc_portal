---
id: shipment-status
title: Shipment Status
permalink: docs/shipment-status.html
---


This API is used by Uniware to get the shipment status (after dispatch) from shipper. The list of way bill is sent whose tracking status needs to be determined. The shipper in response will share the current status with date for each way bill. Below method is used in such transactions.

>Tip
>
> - It is recommended to check out [“Notes for the reader”](/docs/notes-for-reader.html). You might find this helpful as it contains **Guidelines**, **URL Details** and **Terminologies** used here.
>
> - In case there are no product variants, pass the product information in variant parameters also.

## Basic Information

| NAME             | DETAILS                                                                 | 
| :----------------| :---------------------------------------------------------------------  | 
| End Point        | /waybillDetails                                                               | 
| Request Type     | GET                                                                     | 
| Header           | 'Accept: application/json'                                               | 
| Sample URL       | `http://{tenant}.unicommerce.com/waybillDetails?waybill=(waybillString)`|



## Query Parameters

|PARAMETERS     		    |TYPE      	 		    |DESCRIPTION			|MANDATORY	|NOTES	
|:----------------------|:-----------------:|:---------------|:---------:|:--------|
|waybillString				      |string				      |List of way bill numbers			|Yes		    | Max. 50      |    


## Response Payload

```js
{
   "Status":"SUCCESS",
   "waybillDetails":[
      {
         "currentStatus":"String",
         "waybill":"String",
         "statusDate":"String"
      }
   ]
}
```

## Response Parameters

| PARAMETER     | TYPE   | DESCRIPTION                 | NOTES    | 
|:--------------|:------:|:----------------------------|:---------| 
| currentStatus | string | Most recent shipment status | -        | 
| waybill       | string | Shipment tracking number    | Max.: 45 | 
| statusDate    | date   | Last status date            | -        | 

 


