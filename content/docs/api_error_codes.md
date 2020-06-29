---
id: response-codes
title: Response Codes
permalink: docs/response-codes.html
---

Below is the list of HTTP REST API response codes supported by Uniware. This list is based on [List of HTTP status codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes).

All HTTP response status codes are separated into five classes or categories. The first digit of the status code defines the class of response, while the last two digits do not have any classifying or categorization role. 

There are five classes defined by the standard:

- 1xx informational response – the request was received, continuing process
- 2xx successful – the request was successfully received, understood, and accepted
- 3xx redirection – further action needs to be taken in order to complete the request
- 4xx client error – the request contains bad syntax or cannot be fulfilled
- 5xx server error – the server failed to fulfil an apparently valid request

## Success 

| CODE    | DESCRIPTION                                                       | 
|:--------|:------------------------------------------------------------------| 
| 200     | Successful request                                                | 
| 202     | Request under process                                             | 


## Errors Codes

| CODE    | DESCRIPTION                                                       | 
|:--------|:------------------------------------------------------------------| 
| 0       | UNKNOWN\_ERROR                                                     | 
| 1       | USER\_NOT\_LOGGED\_IN                                                | 
| 2       | AUTHENTICATION\_FAILURE                                            | 
| 3       | ACCESS\_DENIED                                                     | 
| 4       | INVALID\_URI                                                       | 
| 5       | SESSION\_EXPIRED\_DUE\_TO\_MAX\_SESSION\_LIMIT                          | 
| 400     | Fields are with validation errors                          |
| 401     | authToken expired/Invalid authToken                          |
| 1000    | INVALID\_REQUEST                                                   | 
| 1001    | MISSING\_REQUIRED\_PARAMETERS                                       | 
| 1002    | INVALID\_FORMAT                                                    | 
| 1003    | INVALID\_ADDRESS\_REFERENCE                                         | 
| 1003    | Shelf is already added to another sub cycle count.                | 
| 1004    | GENERIC\_WARNING                                                   | 
| 10001   | INVALID\_ITEM\_TYPE                                                 | 
| 10002   | INVALID\_VENDOR\_ID                                                 | 
| 10003   | INVALID\_ITEM\_ID                                                   | 
| 10004   | INVALID\_VENDOR\_AGREEMENT\_ID                                       | 
| 10005   | DUPLICATE\_PURCHASE\_ORDER\_CODE                                     | 
| 10006   | DUPLICATE\_ITEM\_SKU\_CODE                                           | 
| 10006   | INVALID\_ITEM\_SKU\_CODE                                             | 
| 10007   | INVALID\_VENDOR\_AGREEMENT\_STATUS                                   | 
| 10008   | DUPLICATE\_VENDOR\_ITEM\_TYPE                                        | 
| 10009   | INVALID\_VENDOR\_ITEM\_TYPE                                          | 
| 10010   | INVALID\_SECTION                                                   | 
| 10011   | DUPLICATE\_SHIPPING\_PROVIDER\_LOCATION                              | 
| 10012   | DUPLICATE\_CATEGORY\_CODE                                           | 
| 10013   | INVALID\_CATEGORY\_CODE                                             | 
| 10014   | INVALID\_ITEM\_CODE                                                 | 
| 10015   | DUPLICATE\_TAX\_TYPE\_CODE                                           | 
| 10016   | DUPLICATE\_VENDOR\_AGREEMENT                                        | 
| 10017   | INVALID\_VENDOR\_AGREEMENT                                          | 
| 10018   | INVALID\_FACILITY\_ITEM\_TYPE                                        | 
| 10020   | DUPLICATE\_VENDOR\_CODE                                             | 
| 10020   | INVALID\_TAX\_TYPE\_CODE                                             | 
| 10021   | INVALID\_VENDOR\_CODE                                               | 
| 10022   | DUPLICATE\_BILLING\_PARTY\_CODE                                      | 
| 10023   | INVALID\_BILLING\_PARTY\_CODE                                        | 
| 10023   | DUPLICATE\_CATEGORY\_SECTION\_MAPPING                                | 
| 10024   | INVALID\_PARTY\_CONTACT\_TYPE                                        | 
| 10025   | DUPLICATE MOBILE NUMBER                                           | 
| 10034   | INVALID\_SALE\_ORDER\_ITEM\_ALTERNATE\_SELECTION                       | 
| 10035   | INVALID\_SALE\_ORDER\_ITEM\_ALTERNATE\_ID                              | 
| 10040   | UNABLE\_TO\_FETCH\_SHIPPING\_PROVIDER\_INFORMATION                     | 
| 10050   | INVALID\_ITEM\_STATE                                                | 
| 10051   | ITEM\_DETAILS\_NOT\_EXPTECTED                                        | 
| 10052   | ITEM\_DETAILS\_INVALID\_FORMAT                                       | 
| 10053   | ITEMS\_DETAILING\_MANDATORY\_BEFORE\_PUTAWAY                          | 
| 10054   | ITEMS\_LABELLING\_MANDATORY\_BEFORE\_QC                               | 
| 10054   | INVALID\_CUSTOM\_FIELD                                              | 
| 10055   | ITEM\_NOT\_DETAILED\_FOR\_INVOICE                                     | 
| 10055   | INVALID\_INFLOW\_RECEIPT\_ITEM\_STATE                                 | 
| 10056   | INVOICE\_NOT\_GENERATED                                             | 
| 10057   | INVOICE\_NOT\_GENERATED\_AS\_ALL\_ORDER\_ITEMS\_CANCELLED                | 
| 12324   | IMCOMPLETE\_BATCH\_FIELDS                                           | 
| 12325   | BATCH\_CODE\_EXITS\_IN\_SAME\_GRN\_ITEMS                                | 
| 12326   | INVALID\_BATCH\_CODE                                                | 
| 12327   | Batch code does not exist                                         | 
| 12328   | Empty batch code                                                  | 
| 20001   | INVALID\_SHIPPING\_METHOD                                           | 
| 20001   | INVALID\_SALE\_ORDER\_ITEM\_TYPE                                      | 
| 20002   | INVALID\_PACKAGE\_SPECIFICATIONS                                    | 
| 20003   | INVALID\_PACKAGE\_STATE                                             | 
| 20004   | INVALID\_SHIPPING\_PACKAGE\_ID                                       | 
| 20005   | INVALID\_SHIPPING\_PROVIDER\_ID                                      | 
| 20006   | INVALID\_SHIPPING\_MANIFEST\_ID                                      | 
| 20007   | SHIPPING\_PROVIDER\_MISMATCH\_PACKAGE\_TO\_MANIFEST                    | 
| 20008   | SALE\_ORDER\_ONE\_OR\_MORE\_ITEMS\_ARE\_CANCELLED                        | 
| 20009   | SALE\_ORDER\_IS\_ON\_HOLD                                             | 
| 20010   | INVALID\_POD\_CODE                                                  | 
| 20010   | LOCATION\_NOT\_SERVICEABLE\_WITH\_GIVEN\_PROVIDER\_METHOD               | 
| 20011   | INVALID\_SHIPPING\_PROVIDER\_CODE                                    | 
| 20011   | NO\_TRACKING\_NUMBER\_AVAILABLE\_FOR\_GIVEN\_PROVIDER                   | 
| 20011   | INVALID\_SHIPPING\_MANIFEST\_ID                                      | 
| 20012   | INVALID\_SHIPPING\_PACKAGE\_CODE                                     | 
| 20013   | INVALID\_SHIPPING\_PROVIDER\_METHOD\_ID                               | 
| 20014   | INVALID\_SHIPPING\_PROVIDER\_METHOD\_TRACKING\_NUMBER\_GENERATION       | 
| 20015   | INVALID\_SHIPPING\_MANIFEST\_CODE                                    | 
| 20015   | REFETCH\_LABEL\_NOT\_ALLOWED                                         | 
| 20016   | SHIPPING\_MANIFEST\_ITEM\_LIMIT\_REACHED                              | 
| 20016   | COURIER\_MANAGEMENT\_SWITCHED\_OFF                                   | 
| 20017   | INVALID\_SHIPPING\_PROVIDER\_CONNECTOR\_CODE                          | 
| 20018   | INVALID\_SHIPPING\_PROVIDER\_CREDENTIALS                             | 
| 20019   | SHIPPING\_PROVIDER\_ALREADY\_ADDED                                   | 
| 20022   | INVALID\_BATCH\_GROUP\_CODE                                          | 
| 20050   | INVALID\_SHIPPING\_PACKAGE\_STATE                                    | 
| 20053   | BATCH\_GROUP\_NOT\_EXIST                                             | 
| 20054   | BATCH\_GROUP\_NOT\_LINKED\_WITH\_ITEM\_TYPE                             | 
| 20056   | BATCHING\_VALIDATION\_ERROR                                         | 
| 20057   | STAGING\_SHELF                                                     | 
| 30001   | INVALID\_BUCKET\_CODE                                               | 
| 30002   | DUPLICATE\_CODE                                                    | 
| 30003   | INVALID\_SHELF\_CODE                                                | 
| 30004   | INVALID\_PICKLIST\_CODE                                             | 
| 30005   | INVALID\_PICKLIST\_STATE                                            | 
| 30006   | INVALID\_PICKSLOT\_STATE                                            | 
| 30007   | INVALID\_ROLE\_CODE                                                 | 
| 40001   | DUPLICATE\_SALE\_ORDER                                              | 
| 40001   | TENANT\_ALREADY\_EXISTS                                             | 
| 40002   | DUPLICATE\_SALE\_ORDER\_ITEM                                         | 
| 40002   | TENANT\_CONFIG\_ERROR                                               | 
| 40003   | INVALID\_SALE\_ORDER\_ITEM\_CODE                                      | 
| 40003   | INVALID\_TENANT\_URL                                                | 
| 40004   | INVALID\_SALE\_ORDER\_ITEM\_ID                                        | 
| 40004   | INVALID\_FACILITY\_TYPE                                             | 
| 40005   | INVALID\_SALE\_ORDER\_CODE                                           | 
| 40005   | FACILITY\_CONFIG\_ERROR                                             | 
| 40006   | SALE\_ORDER\_ITEM\_ALREADY\_CANCELLED                                 | 
| 40007   | SALE\_ORDER\_ITEM\_DISPATCHED                                        | 
| 40008   | SALE\_ORDER\_ONE\_OR\_MORE\_ITEMS\_ARE\_DISPATCHED                       | 
| 40009   | SALE\_ORDER\_ALL\_ITEMS\_ARE\_DISPATCHED                               | 
| 40010   | INVALID\_SALE\_ORDER\_ITEM\_STATE                                     | 
| 40011   | SALE\_ORDER\_INTERNAL\_ERROR                                         | 
| 40011   | INVALID\_STATE\_CODE                                                | 
| 40012   | INVALID\_COUNTRY\_CODE                                              | 
| 40012   | INVALID\_SALE\_ORDER\_LINE\_ITEM                                      | 
| 40013   | MISSING\_SALE\_ORDER\_ITEMS                                          | 
| 40020   | INVALID\_CURRENCY\_CODE                                             | 
| 40021   | CURRENCY\_CONVERSION\_RATE\_NOT\_AVAILABLE                            | 
| 40023   | BILLING\_SHIPPING\_ADDRESS\_REQUIRED\_FOR\_FACILITY                    | 
| 50001   | INVALID\_USER\_ID                                                   | 
| 60001   | INVALID\_ITEM\_ALLOCATION                                           | 
| 60002   | ITEM\_ALREADY\_ALLOCATED                                            | 
| 60003   | INVENTORY\_NOT\_FOUND\_AT\_EXPECTED\_LOCATION                          | 
| 60004   | INVENTORY\_NOT\_AVAILABLE                                           | 
| 70001   | INVALID\_WAREHOUSE\_CONFIGURATION                                   | 
| 80001   | INVALID\_PURCHASE\_ORDER\_ID                                         | 
| 80002   | INVALID\_PURCHASE\_ORDER\_STATE                                      | 
| 80003   | ITEM\_NOT\_CONFIGURED\_TO\_PURCHASE\_FROM\_VENDOR                       | 
| 80004   | ITEM\_TYPE\_ALREADY\_ADDED\_TO\_PURCHASE\_ORDER                         | 
| 80005   | ITEM\_TYPE\_NOT\_YET\_ADDED\_TO\_PURCHASE\_ORDER                         | 
| 80006   | ITEM\_QUANTITY\_CANNOT\_BE\_LESS\_THAN\_RECEIVED                        | 
| 80007   | VENDOR\_AGREEMENT\_NOT\_ACTIVE                                       | 
| 80008   | RECEIVED\_QUANTITY\_CANNOT\_EXCEED\_PENDING\_QUANTITY                  | 
| 80009   | INVALID\_INFLOW\_RECEIPT\_ITEM\_ID                                    | 
| 80010   | INVALID\_INFLOW\_RECEIPT\_ID                                         | 
| 80011   | INVALID\_INFLOW\_RECEIPT\_STATE                                      | 
| 80012   | INFLOW\_RECEIPT\_REJECTED\_QTY\_CANNOT\_EXCEED\_TOTAL                   | 
| 80013   | INFLOW\_RECEIPT\_SHELFS\_ARE\_NOT\_ASSIGNED\_TO\_ALL\_ITEMS               | 
| 80014   | INFLOW\_RECEIPT\_NEW\_PUTAWAY\_QTY\_CANNOT\_EXCEED\_CURRENT              | 
| 80015   | INVALID\_INFLOW\_RECEIPT\_CODE                                       | 
| 80015   | NO\_ITEM\_TO\_PUTAWAY                                                | 
| 80015   | PURCHASE\_CART\_NOT\_INITIALIZED                                     | 
| 80016   | NO\_ITEM\_ADDED\_TO\_PURCHASE\_ORDER                                   | 
| 80016   | INVALID\_PURCHASE\_ORDER\_ITEM\_ID                                    | 
| 80016   | ACTION\_ONLY\_APPLICABLE\_FOR\_BARCODING\_BEFORE\_GRN\_CONFIGURATION     | 
| 80017   | EDIT\_NOT\_ALLOWED\_AFTER\_ITEMS\_LABELLED                             | 
| 80017   | ACTION\_NOT\_APPLICABLE\_FOR\_BARCODING\_BEFORE\_GRN\_CONFIGURATION      | 
| 80017   | ACTION\_NOT\_APPLICABLE\_FOR\_THIRD\_PARTY\_SHIPPING                    | 
| 80019   | ITEM\_CODES\_ALREADY\_CREATED                                        | 
| 80020   | ACTION\_NOT\_APPLICABLE\_FOR\_TRACEABLE\_ITEMS                         | 
| 80021   | ACTION\_APPLICABLE\_FOR\_TRACEABLE\_ITEMS                             | 
| 80022   | NO\_SUCH\_ITEM\_IN\_PURCHASE\_CART                                     | 
| 80022   | VENDOR\_DETAILS\_INCOMPLETE                                         | 
| 80050   | PURCHASE\_ORDER\_AMENDMENT\_NOT\_ALLOWED\_AFTER\_GRN                    | 
| 80051   | DUPLICATE\_ITEM\_CODE                                               | 
| 80060   | INVALID\_PURCHASE\_ORDER\_CODE                                       | 
| 90001   | INVALID\_REVERSE\_PICKUP\_ACTION                                     | 
| 90002   | REVERSE\_PICKUP\_ALREADY\_CREATED\_FOR\_THIS\_ITEM                      | 
| 90003   | INVALID\_REVERSE\_PICKUP\_ID                                         | 
| 90004   | INVALID\_REVERSE\_PICKUP\_STATE                                      | 
| 90005   | REVERSE\_PICKUP\_NOT\_FOUND                                          | 
| 90005   | INVALID\_RESHIPMENT\_ACTION                                         | 
| 90006   | RESHIPMENT\_ALREADY\_CREATED\_FOR\_THIS\_PACKAGE                       | 
| 90006   | INVALID\_RESHIPMENT\_ID                                             | 
| 90007   | INVALID\_RETURN\_MANIFEST\_ID                                        | 
| 90008   | INVALID\_RETURN\_MANIFEST\_STATE                                     | 
| 90009   | INVALID\_REVERSE\_PICKUP\_CODE                                       | 
| 90010   | AUTO\_REVERSE\_PICKUP\_LIMIT                                         | 
| 99900   | ONLY\_OWNER\_CAN\_DELETE\_COMMENT                                     | 
| 100001  | INVALID\_EXPORT\_JOB\_TYPE\_NAME                                      | 
| 100002  | INVALID\_EXPORT\_JOB\_COLUMN                                         | 
| 100003  | INVALID\_EXPORT\_JOB\_FILTER                                         | 
| 100004  | INVALID\_EXPORT\_JOB\_FILTER\_VALUE                                   | 
| 100005  | INVALID\_EXPORT\_JOB\_FILTER\_SELECT\_VALUE                            | 
| 100006  | INVALID\_IMPORT\_JOB\_TYPE\_NAME                                      | 
| 100007  | INVALID\_IMPORT\_JOB\_COLUMN                                         | 
| 100008  | INVALID\_IMPORT\_JOB\_FILTER                                         | 
| 100009  | INVALID\_IMPORT\_JOB\_FILTER\_VALUE                                   | 
| 100010  | INVALID\_IMPORT\_JOB\_FILTER\_SELECT\_VALUE                            | 
| 100011  | INVALID\_COLUMN\_ENTRIES                                            | 
| 100012  | INVALID\_IMPORT\_JOB\_TYPE                                           | 
| 100012  | INVALID\_TAG                                                       | 
| 100013  | INVALID\_IMPORT\_GROUP                                              | 
| 100014  | UNABLE\_TO\_FIND\_IMPORT\_JOB\_TYPE                                    | 
| 100014  | INVALID\_STATE                                                     | 
| 100015  | INVALID\_SHIPPING\_PROVIDER\_METHOD                                  | 
| 100016  | INVALID\_SHIPPING\_PROVIDER\_LOCATION                                | 
| 100017  | INVALID\_SHIPPING\_PROVIDER\_REGION                                  | 
| 100018  | ACTION\_NOT\_APPLICABLE\_FOR\_PRE\_ALLOCATED\_SHIPPING\_PROVIDER         | 
| 100019  | SHIPPING\_PROVIDER\_ALREADY\_ALLOCATED                               | 
| 100020  | DUPLICATE\_TRACKING\_NUMBER                                         | 
| 100021  | SHIPPING\_PROVIDER\_NOT\_YET\_ALLOCATED                               | 
| 100022  | ACTION\_APPLICABLE\_FOR\_MANUAL\_TRACKING\_NUMBER\_GENERATION           | 
| 100023  | MANUAL\_TRACKING\_NUMBER\_NOT\_ASSIGNED                               | 
| 100024  | INVALID\_USER\_WIDGET                                               | 
| 100025  | INVALID\_SHIPPING\_PACKAGE\_TYPE\_ID                                  | 
| 100026  | INVALID\_SYSTEM\_CONFIG\_NAME                                        | 
| 100028  | INVALID\_DATE                                                      | 
| 100029  | DUPLICATE\_SHIPPING\_PROVIDER\_ALLOCATION\_RULE                       | 
| 100030  | INVALID\_SHIPPING\_PROVIDER\_ALLOCATION\_RULE                         | 
| 100031  | DUPLICATE\_TAX\_TYPE\_CONFIGURATION                                  | 
| 100032  | INVALID\_TAX\_TYPE\_CONFIGURATION\_ID                                 | 
| 100032  | INVALID\_ALLOCATION\_CRITERIA                                       | 
| 100033  | TAX\_TYPE\_NOT\_CONFIGURED                                           | 
| 100034  | INVALID\_TAX\_TYPE\_CONFIGURATION\_RANGE                              | 
| 100050  | INVALID\_CHANNEL\_CODE                                              | 
| 100051  | CHANNEL\_NOT\_CONFIGURED                                            | 
| 100052  | CHANNEL\_ALREADY\_ADDED                                             | 
| 100053  | INVALID\_CHANNEL\_CREDENTIALS                                       | 
| 100054  | INVALID\_CHANNEL\_CONNECTOR                                         | 
| 100054  | INVALID\_CHANNEL\_CONNECTOR\_PARAMETER                               | 
| 100054  | INVALID\_SCRIPT                                                    | 
| 100055  | DUPLICATE\_CHANNEL\_SKU\_CODE                                        | 
| 100055  | TRACKING\_STATUS\_UPDATE\_DISABLED                                   | 
| 100056  | INVALID\_CHANNEL\_ITEM\_TYPE                                         | 
| 100056  | INVALID\_SAMPLE\_TEMPLATE                                           | 
| 100057  | DUPLICATE\_UNMAPPED\_SOURCE\_ITEM\_TYPE                               | 
| 100058  | DUPLICATE\_SOURCE\_ITEM\_TYPE                                        | 
| 100059  | DUPLICATE\_CUSTOMER\_CODE                                           | 
| 100060  | INVALID\_QUANTITY\_NOT\_FOUND\_VALUE                                  | 
| 100061  | INVALID\_CHANNEL\_NAME                                              | 
| 100061  | CANNOT\_DELETE\_SYSTEM\_GENERATED\_COMMENT                            | 
| 100062  | NOTIFICATION\_ERROR                                                | 
| 100063  | PENDENCY\_CONFIGURATION\_NOT\_ENABLED                                | 
| 100064  | ERROR\_UPDATING\_PENDENCY                                           | 
| 100065  | UNABLE\_TO\_LOG\_IN                                                  | 
| 100070  | SHIPPING\_PROVIDER\_STATUS\_MAPPING\_NOT\_FOUND                        | 
| 100071  | INVALID\_SALE\_ORDER\_STATE                                          | 
| 100071  | DUPLICATE\_SCAN\_IDENTIFIER                                         | 
| 100072  | INVALID\_TRACKING\_NUMBER                                           | 
| 100073  | INVALID\_TRACKING\_STATUS                                           | 
| 100074  | UNABLE\_TO\_VERIFY\_ORDER                                            | 
| 100075  | INVALID\_CHANNEL\_INVENTORY\_UPDATE\_FORMULA                          | 
| 100075  | INVALID\_PRICE\_MASTER                                              | 
| 100076  | ITEM\_TYPE\_ALREADY\_ADDED\_TO\_SALE\_ORDER                             | 
| 100076  | DUPLICATE\_CHANNEL\_PRICE\_MASTER                                    | 
| 100077  | INVALID\_TRANSFER\_PRICE\_FORMULA                                    | 
| 100078  | DUPLICATE\_SOURCE\_SHIPPING\_PROVIDER                                | 
| 100079  | INVALID\_SOURCE\_SHIPPING\_PROVIDER                                  | 
| 100080  | INVALID\_SELLING\_PRICE\_FORMULA                                     | 
| 100081  | INVALID\_DATATABLE\_VIEW\_NAME                                       | 
| 100081  | INVALID\_TRANSFER\_PRICE                                            | 
| 100082  | INVALID\_DATATABLE\_VIEW                                            | 
| 100082  | INVALID\_SELLING\_PRICE                                             | 
| 100083  | INVALID\_PASSWORD                                                  | 
| 100084  | INVALID\_TENANT                                                    | 
| 100085  | INVALID\_API\_REQUEST                                               | 
| 100086  | INVALID\_USER\_DETAIL                                               | 
| 100087  | INVALID\_RECONCILIATION\_STATE                                      | 
| 100088  | FILE\_EXCEEDS\_MAX\_ALLOWED\_SIZE                                     | 
| 100089  | ERROR\_SETTING\_UP\_TENANT                                           | 
| 100091  | INVALID\_BUNDLE\_CODE                                               | 
| 100092  | INVALID\_BUNDLE\_STATE                                              | 
| 100093  | INVALID\_BUNDLE\_ITEM\_TYPE                                          | 
| 100094  | BUNDLE\_ALREADY\_EXISTS                                             | 
| 100095  | INVALID\_BUNDLE\_PRICE                                              | 
| 100096  | NO\_COMPONENT\_ITEM\_TYPES\_IN\_BUNDLE                                 | 
| 100097  | DUPLICATE\_VENDOR\_INVOICE\_NUMBER                                   | 
| 100098  | INVALID\_VENDOR\_INVOICE\_CODE                                       | 
| 100099  | INVALID\_VENDOR\_INVOICE\_STATE                                      | 
| 100100  | CHANNEL\_CONNECTOR\_CHALLENGE\_RECEIVED                              | 
| 100100  | INVALID\_RECONCILIATION\_IDENTIFIER                                 | 
| 100101  | ORDER\_IS\_IRRECONCILIABLE                                          | 
| 100102  | CHANNEL\_ITEM\_NOT\_DELISTED                                         | 
| 100103  | POD\_NOT\_VERIFIED                                                  | 
| 100104  | PRICE\_SYNC\_NOT\_CONFIGURED                                         | 
| 100105  | UNABLE\_TO\_UPDATE\_PRICE                                            | 
| 100106  | UNABLE\_TO\_CHECK\_PRICE                                             | 
| 100107  | UNABLE\_TO\_PULL\_PRICE                                              | 
| 100108  | UNABLE\_TO\_PUSH\_PRICE                                              | 
| 100109  | PENDING\_PRICE\_UPDATES                                             | 
| 100110  | INVALID\_SCRIPT\_RESPONSE                                           | 
| 100111  | INVALID\_PRICES                                                    | 
| 100112  | INVALID\_RECOMMENDATION\_CODE                                       | 
| 100113  | INVALID\_RECOMMENDATION\_STATUS                                     | 
| 100114  | INVALID\_RECOMMENDATION\_TYPE                                       | 
| 100115  | INVALID\_RECOMMENDATION\_PROVIDER                                   | 
| 100116  | FILE\_UPLOAD\_ERROR                                                 | 
| 100117  | Web Putaway is not allowed for this facility                      | 
| 100118  | Unable to create invoice                                          | 
| 100119  | HSN code not defined on SKU                                       | 
| 100120  | Signature upload is mandatory                                     | 
| 100121  | Invalid Pickset Id                                                | 
| 100122  | INVALID\_PICKLIST\_ITEM\_STATE                                       | 
| 100123  | SHELF\_BLOCKED\_FOR\_CYCLE\_COUNT                                     | 
| 100124  | INACTIVE\_SHLEF                                                    | 
| 100125  | INVALID\_GST\_NUMBER                                                | 
| 100125  | BATCH\_GROUP\_WITH\_SAME\_NAME\_EXISTS                                 | 
| 100126  | INVALID\_SCAN\_TYPE                                                 | 
| 100126  | BATCH\_GROUP\_WITH\_SAME\_FIELDS\_EXISTS                               | 
| 100127  | INFLOW RECEIPT ITEM CAN NOT BE DELETED IN ITEM LEVEL TRACEBAILITY | 
| 100128  | BLOCKED\_QUANTITY\_MISMATCH                                         | 
| 100129  | MISSING\_CART\_ITEMS                                                | 
| 100130  | INVENTORY\_NOT\_ALLOCATED                                           | 
| 100131  | MISSING\_ITEM\_DETAILS                                              | 
| 100132  | INVALID\_ACTIVITY\_ENTITY                                           | 
| 100133  | INVOICE\_DIGITAL\_SINGING\_ERROR                                     | 
| 100134  | INVALID\_BOX\_STATE                                                 | 
| 100135  | ATLEAST\_TWO\_BOX\_REQUIRED                                          | 
| 100136  | MISSING\_RECONCILIATON\_INVOICE\_DELIMETER                           | 
| 100136  | NO\_GIFT\_MESSAGE\_PRESENT                                           | 
| 100137  | NO\_CHANNEL\_ITEM\_LABEL\_PRESENT                                     | 
| 100138  | CYCLE\_COUNT\_INVALID\_ITEM\_STATUS\_CODE                              | 
| 100139  | ALL\_ITEMS\_OF\_BUNDLE\_MUST\_BE\_IN\_BOX                                | 
| 100139  | REPLACEMENT\_ITEM\_NOT\_DISPATCHED                                   | 
| 100140  | ATLEAST\_ONE\_SECTION\_IN\_DEFAULT\_ZONE                               | 
| 100141  | DEFAULT\_ZONE\_CANNOT\_BE\_DISABLED                                   | 
| 100142  | MAX\_PURCHASE\_ORDER\_ITEMS\_FOR\_ORDER\_CREATION                       | 
| 100143  | INVALID\_CHANNEL\_ITEM\_TYPE\_STATUS                                  | 
| 100144  | BUNDLE\_SKU\_CANNOT\_BE\_SPLITTED                                     | 
| 100145  | GOOD\_QUANTITY\_NOT\_AVAILABLE\_TO\_BE\_MARKED\_AS\_BAD                   | 
| 100146  | INVALID\_INVENTORY\_SYNC\_ACTION                                     | 
| 100200  | INVALID\_VENDOR\_INVOICE\_ITEM                                       | 
| 100201  | DUPLICATE\_FACILITY\_CODE                                           | 
| 100202  | INVALID\_SHIPMENT\_BATCH\_CODE                                       | 
| 100203  | DUPLICATE\_SEQUENCE\_PREFIX                                         | 
| 100203  | INVALID\_ENTITY\_IDENTIFIER\_NAME                                    | 
| 100204  | CATALOG\_SYNC\_CAN\_RUN\_ONCE\_IN\_HALF\_HOUR                            | 
| 100204  | FULL\_INVENTORY\_SYNC\_CAN\_RUN\_ONCE\_IN\_HOUR                          | 
| 100204  | RECONCILIATION\_INVOICE\_SYNC\_CAN\_RUN\_ONCE\_IN\_HOUR                  | 
| 100205  | SKU\_NOT\_MAPPED                                                    | 
| 100206  | INVALID\_ADDRESS\_DETAIL                                            | 
| 100207  | BAD\_CHANNEL\_STATE                                                 | 
| 100208  | UNABLE\_TO\_MARK\_RETURNED\_ON\_CHANNEL                                | 
| 100209  | INVALID\_TOKEN                                                     | 
| 100210  | ERROR\_SENDING\_EMAIL                                               | 
| 100211  | ALREADY\_RUNNING                                                   | 
| 100212  | INVENTORY\_UPDATE\_NOT\_ALLOWED                                      | 
| 100213  | CHANNEL\_LIMIT\_EXCEDED                                             | 
| 100214  | INVALID\_RETURN\_MANIFEST\_CODE                                      | 
| 100215  | INVALID\_PRODUCT\_TYPE                                              | 
| 100216  | UNABLE\_TO\_ADD\_USER\_ROLE                                           | 
| 100217  | IMPORT\_UPPER\_LIMIT\_EXCEEDED                                       | 
| 100217  | IMPORT\_UPPER\_LIMIT\_EXCEEDED                                       | 
| 100218  | INVALID\_OUTBOUND\_GATEPASS\_ITEM\_QUANTITY                           | 
| 100219  | INVALID\_OUTBOUND\_GATEPASS\_ITEM                                    | 
| 100220  | SPLIT\_PACKAGE\_NOT\_ALLOWED                                         | 
| 100220  | MISSING\_REQUIRED\_FIELD\_TAT                                        | 
| 100222  | UNABLE\_TO\_DOWNLOAD\_LABEL                                          | 
| 100222  | Internal Error                                                    | 
| 100223  | SKU\_LIMIT\_EXCEDED                                                 | 
| 100239  | NO\_SHELVES\_LEFT\_FOR\_CYCLE\_COUNT                                   | 
| 100240  | INVALID\_ZONE\_NAME                                                 | 
| 100241  | TIME\_NOT\_IN\_VALID\_COUNTING\_HOURS                                  | 
| 100246  | CYCLE\_COUNT\_ALREADY\_IN\_PROGRESS                                   | 
| 100252  | INVALID\_PICK\_BUCKET\_CODE                                          | 
| 100253  | INVALID\_PICK\_BUCKET\_STATE                                         | 
| 100254  | INVALID\_PICK\_BATCH\_CODE                                           | 
| 100255  | INVALID\_PICK\_BATCH\_STATE                                          | 
| 100258  | NO\_AVAILABLE\_SHELF                                                | 
| 100258  | INVALID\_PICKLIST\_DESTINATION                                      | 
| 100259  | PICKLIST\_ALREADY\_RECEIVING                                        | 
| 100928  | Invalid value                                                     | 
| 110001  | INVALID\_PUTAWAY\_ID                                                | 
| 110002  | INVALID\_PUTAWAY\_STATE                                             | 
| 110003  | INVALID\_PUTAWAY\_CODE                                              | 
| 110004  | INVALID\_PUTAWAY\_ITEM\_ID                                           | 
| 110004  | ITEM\_NOT\_IN\_GIVEN\_PUTAWAY                                         | 
| 110005  | INVALID\_EMAIL\_TEMPLATE\_TYPE                                       | 
| 110055  | INVALID\_REVERSE\_PICKUP\_CANCELLATION\_RESPONSE                      | 
| 120005  | INVALID\_EXPORT\_SCHEDULE\_CONFIG                                    | 
| 123422  | INVALID\_SHIPMENT\_SPLITTING                                        | 
| 200001  | INVALID\_FACILITY\_CODE                                             | 
| 200002  | INVALID\_TENANT\_MODE                                               | 
| 200003  | INVALID\_FACILITY\_CONFIGURATION                                    | 
| 200016  | INVALID\_COMBINATION\_IDENTIFIER                                    | 
| 200016  | INVALID\_PAYMENT\_METHOD                                            | 
| 200017  | INVALID\_SOURCE                                                    | 
| 200018  | INVALID\_PAYMENT\_STATUS                                            | 
| 200592  | BATCHING\_NOT\_ENABLE                                               | 
| 400050  | INVALID\_CUSTOMER\_CODE                                             | 
| 500001  | FEATURE\_NOT\_SUPPORTED                                             | 
| 990001  | ITEM\_CANNOT\_NOT\_BE\_DISCARDED                                      | 
| 990001  | NO\_SHIPPING\_PACKAGE\_AVAILABLE\_TO\_PICK                             | 
| 990002  | ITEM\_NOT\_CREATED\_DURING\_TRANSITION                                | 
| 1000001 | INVALID\_PARTY\_CODE                                                | 
| 1100001 | INVALID\_OUTBOUND\_GATE\_PASS\_CODE                                   | 
| 1100002 | INVALID\_OUTBOUND\_GATE\_PASS\_STATE                                  | 
| 1100003 | INVALID\_OUTBOUND\_GATE\_PASS\_ITEM\_ID                                | 
| 1111111 | THIRD\_PARTY\_API\_RETURNED\_ERROR                                    |




