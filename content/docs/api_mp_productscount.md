---
id: getproductscount
title: Products Count Fetching
permalink: docs/getproductscount.html
---

The products are fetched by Unicommerce from the partner portal/marketplace regularly using the below method. The following section details the structure for various product related transactions. The partner is expected to refer the schema and comply to it for seamless data flow.

>Tip
>
>It is recommended to check out [“Notes for the reader”](/docs/notes-for-reader.html). You might find this helpful as it contains **Guidelines**, **Terminologies** and **Abbreviations** used here.


## Basic Information

| NAME             | DETAILS                                                                 | 
| :----------------| :---------------------------------------------------------------------  | 
| End Point        | /productsCount                                                          | 
| Request Type     | GET                                                                     | 
| Header           | 'Accept: application/json'                                               | 
| Sample URL       | http://{datacenter}.unicommerce.com/productsCount?publishedStatus=PUBLISHED  |
| -----------------| ------------------------------------------------------------------------------------- |

## Query Parameters

|PARAMETERS     		|TYPE      	 		|DESCRIPTION	 |MANDATORY	 |NOTES	
|:----------------------|:-----------------:|:---------------|:---------:|:--------|
|publishedStatus		|string				|Posting Status	 |Yes	     | Allowable: PUBLISHED, UNPUBLISHED      
|-----------------|----------|----------------|----------------|---------------------------------------| 


## Response Payload

```js
{
"count": 20
}
```
