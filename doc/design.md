# Design of SamsALIbim
SAMS contains data for users, their trainings and corresponding organizations. Which is highly relational data.

## Initial data:
[After login with oauth](https://test-oauth.web.cern.ch/), the user will have the following data:
1. name 
2. username
3. id
4. personid
5. email
6. identityclass
7. registered
8. phone
9. mobile

Assumed is that the either the id or the personid accesses the data from SAMS. Which one is used should be determined, but databases (such as Jiskefet) using this data should only store this id.



## Drivers
SamsALIbim makes use of 'drivers', which implements the interface 'SamsDriver'. This interface contains all the calls which should be possible. The goal is that we define the required API calls, when the implementation is done this driver is ´injected' into the sams library.

### return types
We want more data to show than only the primary keys of a user. 
However we can't assume that the data from one implementation is exactly the same, in one instance it might return json, or XML. Therefore all return types must be wrapped in a class. Making sure the output is always the same.

It's also important to note that SAMS most certaintly use IO. Therefore a return type within a driver is always a promise. If the implementation is not a promise it should wrap it in a promise for consistency.
