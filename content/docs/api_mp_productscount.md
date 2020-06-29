---
id: getproductscount
title: Products Count Fetching
permalink: docs/getproductscount.html
---


>Tip
>
>It is recommended to check out [“Notes for the reader”](/docs/notes-for-reader.html). You might find this helpful as it contains **Guidelines**, **URL Details** and **Terminologies** used here.


## Basic Information

| NAME             | DETAILS                                                                 | 
| :----------------| :---------------------------------------------------------------------  | 
| End Point        | /productsCount                                                          | 
| Request Type     | GET                                                                     | 
| Header           | 'Accept: application/json'                                               | 
| Sample URL       | `http://{tenant}.unicommerce.com/productsCount?publishedStatus=PUBLISHED`  |


## Query Parameters

|PARAMETERS     		|TYPE      	 		|DESCRIPTION	 |MANDATORY	 |NOTES	
|:----------------------|:-----------------:|:---------------|:---------:|:--------|
|publishedStatus		|string				|Posting Status	 |Yes	     | Allowable: PUBLISHED, UNPUBLISHED      



## Response Payload

```js
{
"count": 20
}
```
