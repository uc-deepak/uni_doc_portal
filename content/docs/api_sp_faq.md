---
id: sp-faq
title: FAQ - Shipping Provider
permalink: docs/sp-faq.html
---

### Can we set the endpoint (custom URL format) for sending the request?

No, the URL should be as per our format only.

### What is the time for the token expiry?

We'll be generating token every time while generating AWB or tracking the shipments.

### Shipping labels in response should be in PDF format links or CSV format links? [waybill API]

PDF format.

### How frequently we can call tracking status API? Can we do it every 60 mins?

Tracking status API is called 4 times a day. No, it cannot be called every 60 mins.

### Can we customize the verification API body based on the client (logistics) parameters?

No, it is based on generic signatures that are valid for all partners.
