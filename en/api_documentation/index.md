---
title: API Documentation
---
# API Documentation

## General

In this section you'll find info on how to use the API as a developer. If you are looking for how to create an API-token, you can read that at [FAQ/api-tokens](../faq/api-tokens).

::: tip
If you want to build an application, tool or plugin that uses the Dodona API, 
please contact us at [dodona@ugent.be](mailto:dodona@ugent.be), so we can help you out. 
This will also allow us to notify you if we make any changes to the API.
:::

This part of the documentation will evolve around using Dodona's API, only the json-stuff. 

If you're just looking for a list of all available endpoints, you can find that [here](./all_endpoints).

::: info
All examples will use curl and if useful, Python. To keep those Python examples short, the following content will always be left out:
```python
import json
import http.client

connection = http.client.HTTPSConnection("dodona.be")
headers = {
    "Content-type": "application/json",
    "Accept": "application/json",
    "Authorization": <TOKEN>
}
```
As this is documentation for the api, the type will always be "application/json", the html-version isn't interesting here. 
The "Authorization"-header is not always needed, but for everything that is tied to the user, it is needed.
:::

## Permission levels
In this documentation, permission-levels are sometimes used. Here is a list of all current permission-levels, from the lowest permissions to the highest:
1) student
2) staff
3) zeus

Staff-members are mostly teachers. They can create and manage their own [courses](./courses) and 
[repositories](../guides/exercises/creating-exercises/setup/#repository-forken). Zeus users are the Dodona admins. 
They can see more than anyone else, so they can keep the platform running. 
Features needing Zeus permissions won't be documented as well as others, as you'll likely not need them. 


## How to start using the API
- [First exploring](./first_use#explore-via-browser)
- [Authentication](./first_use#authenticate)