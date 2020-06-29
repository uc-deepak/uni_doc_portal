---
id: sp-authentication
title: Shipping Provider Authentication
permalink: docs/sp-authentication.html
---

This API is used to get auth-token from the shipping provider/aggregator. The seller in this POST request needs to send valid username and password to get a valid token from shipping provider/aggregator.
This token needs to be used in all subsequent API requests by the seller.


## Basic Information

| NAME             | DETAILS                                                                 | 
| :----------------| :---------------------------------------------------------------------  | 
| End Point        | /authToken                                                              | 
| Request Type     | POST                                                                     | 
| Request Header   | 'Accept: application/json'                                               | 



## Query Parameters

|PARAMETERS     		|TYPE      	 		|DESCRIPTION	  |MANDATORY  |NOTES    |	
|:----------------------|:-----------------:|:---------------|:---------:|:--------|
| username				|string				| Username  |Yes		  |    -     | 
| password		   		|string     		| Password  |Yes		  |    -     |
   

## Response Payload
The response is a valid auth. token which is unique for each seller.


## Response Parameters

| PARAMETER | TYPE   | DESCRIPTION               | NOTES                                   | 
|:----------|:------:|:--------------------------|:----------------------------------------| 
| status    | string | Status of the API request | Allowable: SUCCESS, INVALID_CREDENTIALS | 
| token     | string | Unique token              | Eg.: as23djaexnsnJsnJSW34snapl          | 

