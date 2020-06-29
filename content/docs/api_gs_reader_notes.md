---
id: notes-for-reader
title: Notes for the Reader
permalink: docs/notes-for-reader.html
---

## URL Details

**Sample URL** <br>
`http://{tenant}.unicommerce.com/{endpoint}?{query parameters}`

**Example URL** <br>
`http://{tenant}.unicommerce.com/orders?pageNumber=1& pageSize=20& orderStatus=CREATED`

*{tenant}* 
: Uniware account code which comes in URL after login into Uniware.

*{endpoint}* 
: orders

*{query parameters}* 
: pageNumber=1& pageSize=20& orderStatus=CREATED


## Guidelines

- Specify **date** as yyyy-MM-dd'T'HH:mm:ss (Eg: 2017-01-02T08:12:53).
- **Do not leave the unwanted fields empty.** For number/integer pass '0' and for string pass 'NULL'.
- To pass more than one values for a parameter, separate them with commas (,).

## Terminology

**Allowable**
: is the set of valid values for that parameter, only these case-sensitive values should be passed.

**Default**
: is the default value for that parameter.

**Eg.**
: is the example of correct parameter value.

**Fixed**
: is the fixed value for a parameter that should not be changed.

**Opt**
: is the optional parameter. The available option is mentioned in the notes.

**Rec**
: is the recommended option.

