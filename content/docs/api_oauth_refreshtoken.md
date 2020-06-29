---
id: oauth-refreshtoken
title: Renew Access Token
permalink: docs/oauth-refreshtoken.html
---



## Basic Information

| NAME             | DETAILS                                                                 | 
| :----------------| :---------------------------------------------------------------------  | 
| End Point        | /oauth/token                                                              | 
| Request Type     | GET                                                                     | 
| Request Header   | 'Accept: application/json'                                               | 
| Sample URL       | `http://{tenant}.unicommerce.com/oauth/token?grant_type= refresh_token&client_id=my-trusted-client& refresh_token=ec79eb6b-001b-4b55-a039-b1b1582b254a`


## Query Parameters

|PARAMETERS  |TYPE    |DESCRIPTION             |MANDATORY  |NOTES    |	
|:-----------|:------:|:-----------------------|:---------:|:--------|
| grant_type    | string | “refresh_token”     | Yes | -                                          | 
| client_id     | string | “my-trusted-client” | Yes | -                                          | 
| refresh_token | string | Refresh Token       | Yes | Eg: "18f96b68-bdf4-4c5f-93f2-16e2c6e674c6" | 


   

## Response Payload
```js
{
   "access_token": "1211cf66-d9b3-498b-a8a4-04c76578b72e",
   "token_type": "bearer",
   "refresh_token": "18f96b68-bdf4-4c5f-93f2-16e2c6e674c6",
   "expires_in": 41621,
   "scope": "read trust write"
}
```

## Response Parameters

|PARAMETERS     		|TYPE      |DESCRIPTION	                              |NOTES                    |
|:----------------------|:--------:|:-----------------------------------------|:------------------------| 
| access_token  | string  | Access token (expires after time given in expires_in)                                                             | Eg: "1211cf66-d9b3-498b-a8a4-04c76578b72e" | 
| token_type    | string  | "bearer"                                                                                                          | -                                          | 
| refresh_token | string  | Refresh token (used to re-validate access\_token, can only be used till 30 days of first issuance of access_token) | Eg: "18f96b68-bdf4-4c5f-93f2-16e2c6e674c6" | 
| expires_in    | integer | valid time of access_token in seconds                                                                             | Eg: 41621                                  | 
| scope         | string  | "read trust write"                                                                                                | -                                          | 
 

 
