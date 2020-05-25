---
id: error-codes
title: Error Codes
permalink: docs/error-codes.html
---


## Status Code - 400

Fields are with validation errors.

### Response Payload

```js
{
  "errors": [
    {
      "code": "string",
      "message": "string",
      "params": {}
    }
  ]
}
```


## Status Code - 401

Authentication error.

### Response Payload

```js
{
  "reason": "authToken expired/Invalid authToken",
  "description": "string"
}
```





