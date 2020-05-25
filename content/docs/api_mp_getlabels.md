---
id: getlabels
title: Custom Label Fetching
permalink: docs/getlabels.html
---


In cases where the partner requires the labels generation at their end in their custom template. After posting the required parameters at partner portal, Unicommerce initiate the get request to get the custom label in pdf format for printing.
This HTTP API details the method in which the label in pdf format is received from the partner portal/marketplace using the Unicommerce API.



## Basic Information

| NAME             | DETAILS                                                                 | 
| :----------------| :---------------------------------------------------------------------  | 
| End Point        | /orders/labels                                           | 
| Request Type     | GET                                                     | 
| Header           | 'Accept: application/json'                                | 
| Sample URL       | http://{datacentre}.unicommerce.com/orders/labels?orderItemIds=abc |
| ----------------| ----------------------------------------------------------------------- |
    
## Query Parameters

| PARAMETER            | TYPE   | DESCRIPTION                                                                     | MANDATORY | NOTES                                                                 |
|:----------------------|:--------:|:-----------------------------------------|:-----------:|:------------------------| 
| orderItemId | string  | ItemsId    | Yes       | -     |
|--------------|----------|-------------------|-----------------|------|


## Response Payload

Download labels?orderItemIds={orderId}

PDF will get generated for printing.



