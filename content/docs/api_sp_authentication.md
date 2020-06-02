---
id: sp-authentication
title: Shipping Provider Authentication
permalink: docs/sp-authentication.html
---

This API is used to get auth-token from the shipping provider/aggregator. The seller in this POST request needs to send valid username and password to get a valid token from shipping provider/aggregator.
This token needs to be used in all API requests by the seller.


## Basic Information

| NAME             | DETAILS                                                                 | 
| :----------------| :---------------------------------------------------------------------  | 
| End Point        | /authToken                                                              | 
| Request Type     | POST                                                                     | 
| Request Header   | 'Accept: application/json'                                               | 
| Sample URL       | http://{datacentre}.unicommerce.com/authToken?username=abc&password=123 |


## Query Parameters

|PARAMETERS     		|TYPE      	 		|DESCRIPTION	  |MANDATORY  |NOTES    |	
|:----------------------|:-----------------:|:---------------|:---------:|:--------|
| username				|string				| Username  |Yes		  |    -     | 
| password		   		|string     		| Password  |Yes		  |    -     |
   

## Response Payload
The response is a valid auth. token which is unique for each seller.


## Response Parameters

|PARAMETERS     		|TYPE      |DESCRIPTION	                              |MANDATORY    |NOTES                    |
|:----------------------|:--------:|:-----------------------------------------|:-----------:|:------------------------|
|status  				|string	   |Status of the request                     |Yes		    |Allowable: SUCCESS, INVALID_CREDENTIALS | 
|accessToken	   		|string    |Authorization Token                       |Yes		    |Eg: as23djaexnsnJsnJSW34snapl |
