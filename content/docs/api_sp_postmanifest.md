---
id: generate-manifest
title: Generate Manifest
permalink: docs/generate-manifest.html
---


This API is used to generate the manifest for AWBs. This is intended for shipping aggregators to provide shipping provider specific (bifurcated) manifest.

>Tip
>
> - It is recommended to check out [“Notes for the reader”](/docs/notes-for-reader.html). You might find this helpful as it contains **Guidelines**, **URL Details** and **Terminologies** used here.
>
> - In case there are no product variants, pass the product information in variant parameters also.

## Basic Information

| NAME             | DETAILS                                                                 | 
| :----------------| :---------------------------------------------------------------------  | 
| End Point        | /manifest                                                               | 
| Request Type     | POST                                                                     | 
| Header           | 'Accept: application/json'                                               |



## Request Payload

```js
{
   "awbNumbers":[
      16090109,
      16090108]
}
```

## Request Parameters

|PARAMETERS     		    |TYPE      	 		    |DESCRIPTION			|MANDATORY	|NOTES	
|:----------------------|:-----------------:|:---------------|:---------:|:--------|
|awbNumbers				      |integer				      |List of AWB numbers			|Yes		    | Eg.: 16090109      |    


## Response 201:Success

Manifest in .pdf format will get generated for printing.

```js
{
   "manifestNumber":343434334,
[Unique generated manifest number/id"]
   "manifestDownloadUrl":"downloadable URL"[Downloadable URL which contains details of order shipping providers]
}
```

## Response 400: 

Manifest already generated for some AWBs, Please try again after removing them.

```js
{
  "message": "Manifest already generated for some AWBs, Please try again after removing them",
   "alreadyManifestedAWBs": [
    16090109s]
}
```

## Response 40X:

Missing Fields or Invalid Data.

```js
{
  "message": "Some invalid AWBs provided, Please try again after removing them",
   "invalidAWBs": [
    16090109
  ]
}
```