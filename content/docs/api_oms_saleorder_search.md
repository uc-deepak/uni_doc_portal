---
id: saleorder-search
title: Search Sale Order
permalink: docs/saleorder-search.html
---

>Tip
>
> - It is recommended to check out [“Notes for the reader”](/docs/notes-for-reader.html). You might find this helpful as it contains **Guidelines**, **URL Details** and **Terminologies** used here.

## Basic Information

| NAME             | DETAILS                                                                 | 
| :----------------| :---------------------------------------------------------------------  | 
| End Point        | /services/rest/v1/oms/saleOrder/search                                                   | 
| Request Type     | POST                                                                     | 
| Header           | 'Accept: application/json'                                               |     




## Request Payload

```js
{
   "displayOrderCode": "string",
   "status": "string",
   "channel": "string",
   "customerEmailOrMobile": "string",
   "customerName": "string",
   "cashOnDelivery": true,
   "fromDate": "2020-06-11T10:28:36.037Z",
   "toDate": "2020-06-11T10:28:36.037Z",
   "facilityCodes": [
      "string"
   ],
   "searchOptions": {
      "searchKey": "string",
      "displayLength": 0,
      "displayStart": 0,
      "columns": 0,
      "sortingCols": 0,
      "sortColumnIndex": 0,
      "sortDirection": "string",
      "columnNames": "string",
      "getCount": true
   },
   "updatedSinceInMinutes": 0,
   "onHold": true
}
```

## Request Parameters

| LEVEL | PARAMETER             | TYPE    | DESCRIPTION                | MANDATORY  | NOTES         | 
|:-------|:-----------------------|:---------:|:----------------------------|:------------:|:---------------| 
| 1     | displayOrderCode      | string  | Order code to be displayed | No         | -             | 
| 2     | status                | string  | Sale order status          | No         | -             | 
| 3     | channel               | string  | -                          | No         | -             | 
| 4     | customerEmailOrMobile | string  | Customer Email/Mobile      | No         | -             | 
| 5     | customerName          | string  | Customer Name              | No         | -             | 
| 6     | cashOnDelivery        | boolean | true if COD                | No         | Default: true | 
| 7     | fromDate              | date    | Filter start date          | No         | -             | 
| 8     | toDate                | date    | Filter end date            | No         | -             | 
| 9     | facilityCodes         | string  | Facility IDs               | No         | Eg.: Delhi6   | 
| 10    | searchOptions         | object  | List of filter parameters  | No         | -             | 
| 10.1  | searchKey             | string  | Search keywords            | No         | -             | 
| 10.2  | displayLength         | integer | Length displayed           | No         | -             | 
| 10.3  | displayStart          | integer | -                          | No         | -             | 
| 10.4  | columns               | integer | -                          | No         | -             | 
| 10.5  | sortingCols           | integer | -                          | No         | -             | 
| 10.6  | sortColumnIndex       | integer | -                          | No         | -             | 
| 10.7  | sortDirection         | string  | -                          | No         | -             | 
| 10.8  | columnNames           | string  | -                          | No         | -             | 
| 10.9  | getCount              | boolean | -                          | No         | -             | 
| 11    | updatedSinceInMinutes | integer | -                          | No         | -             | 
| 12    | onHold                | boolean | true if onHold             | No         | -             | 
 
 


## Response Payload

```js
{
   "successful": true,
   "message": "string",
   "errors": [
      {
         "code": 0,
         "fieldName": "string",
         "description": "string",
         "message": "string",
         "errorParams": {
            "additionalProp1": {},
            "additionalProp2": {},
            "additionalProp3": {}
         }
      }
   ],
   "warnings": [
      {
         "code": 0,
         "message": "string",
         "description": "string"
      }
   ],
   "totalRecords": 0,
   "elements": [
      {
         "code": "string",
         "displayOrderCode": "string",
         "channel": "string",
         "displayOrderDateTime": "2020-06-11T10:28:36.079Z",
         "status": "string",
         "created": "2020-06-11T10:28:36.079Z",
         "updated": "2020-06-11T10:28:36.079Z",
         "notificationEmail": "string",
         "notificationMobile": "string"
      }
   ]
}
```

## Response Parameters
 
| LEVEL | PARAMETER            | TYPE   | DESCRIPTION                | NOTES | 
|:------|:---------------------|:------:|:---------------------------|:------| 
| 1     | successful           | TRUE   | Request success status     | -     | 
| 2     | message              | string | Response message           | -     | 
| 3     | errors               | list   | List of errors (if any)    | -     | 
| 3.1   | code                 | number | Error code                 | -     | 
| 3.2   | fieldName            | string | Field with error           | -     | 
| 3.3   | description          | string | Warning description        | -     | 
| 3.4   | message              | string | Error message              | -     | 
| 3.5   | errorParams          | object | Parameters with error      | -     | 
| 3.5.1 | additionalProp1      | object | Parameter 1 with error     | -     | 
| 3.5.2 | additionalProp2      | object | Parameter 2 with error     | -     | 
| 3.5.3 | additionalProp3      | object | Parameter 3 with error     | -     | 
| 4     | warnings             | list   | List of warnings (if any)  | -     | 
| 4.1   | code                 | number | Warning code               | -     | 
| 4.2   | message              | string | Warning message            | -     | 
| 4.3   | description          | string | Warning description        | -     | 
| 5     | totalRecords         | number | Total no. of records found | -     | 
| 6     | elements             | list   | Details of matches found   | -     | 
| 6.1   | code                 | string | Item code                  | -     | 
| 6.2   | displayOrderCode     | string | Order code to be displayed | -     | 
| 6.3   | channel              | string | -                          | -     | 
| 6.4   | displayOrderDateTime | date   | Order Date                 | -     | 
| 6.5   | status               | string | Status                     | -     | 
| 6.6   | created              | date   | Creation Date              | -     | 
| 6.7   | updated              | date   | Updation Date              | -     | 
| 6.8   | notificationEmail    | string | Email for notifications    | -     | 
| 6.9   | notificationMobile   | string | Mobile for notifications   | -     | 
 
 



