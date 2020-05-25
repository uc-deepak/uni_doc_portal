---
id: authentication
title: Authentication
permalink: docs/authentication.html
---

The Unicommerce works on basic authentication, in which valid auth token is sent with each API request. This auth token is expected from partner portal/marketplace against valid user credentials.

## Basic Information

| NAME             | DETAILS                                                                 | 
| :----------------| :---------------------------------------------------------------------  | 
| End Point        | /authToken                                                              | 
| Request Type     | GET                                                                     | 
| Request Header   | 'Accept: application/json'                                               | 
| Sample URL       | http://{datacentre}.unicommerce.com/authToken?username=abc&password=123 |
| --------------------| --------------------------------------------------------------------------------- |

## Query Parameters

|PARAMETERS     		|TYPE      	 		|DESCRIPTION	  |MANDATORY  |NOTES    |	
|:----------------------|:-----------------:|:---------------|:---------:|:--------|
| username				|string				| Username  |Yes		  |    -     | 
| password		   		|string     		| Password  |Yes		  |    -     |
|---------------|------------|----------------|-------------------|------------|    

## Response Payload
The response is a valid auth. token which is unique for each seller.


## Response Parameters

|PARAMETERS     		|TYPE      |DESCRIPTION	                              |MANDATORY    |NOTES                    |
|:----------------------|:--------:|:-----------------------------------------|:-----------:|:------------------------|
|status  				|string	   |Status of the request                     |Yes		    |Allowable: SUCCESS, INVALID_CREDENTIALS | 
|accessToken	   		|string    |Authorization Token                       |Yes		    |Eg: as23djaexnsnJsnJSW34snapl |
|-----------------|---------|----------------------|-----------------|----------------------------------------------|