---
title: API Documentation
---
# API Documentation

In this section you'll find info on how to use the API as a developer. If you are looking for how to create an API-token, you can read that at [FAQ/api-tokens](../faq/api-tokens).
Only things that are possible via the json API will be documented here. Some actions are just not possible through the API. You can see which actions are and which aren't in the [endpoints-section](./all_endpoints).

::: warning
If you want to build an application, tool or plugin that uses the Dodona API, please contact us at [dodona@ugent.be](mailto:dodona@ugent.be) so we can help you out. This will also allow us to notify you if we make any changes to the API.
:::

::: info
All code examples will be given in Python. To keep them as short as possible, the following "header" is left out of every code fragment, but is always necessary:
```python
import json
import http.client

connection = http.client.HTTPSConnection("dodona.be")
# Authorization is not always needed
headers = {
    "Content-type": "application/json",
    "Accept": "application/json",
    "Authorization": <TOKEN>
}
```
:::

## Permission levels
In this documentation, permission-levels are sometimes used. Here is a list of all current permission-levels, from the lowest permissions to the highest:
1) student
2) staff
3) zeus

Staff-members are mostly teachers. They can create and manage their own [courses](./courses) and [repositories](../guides/exercises/creating-exercises/setup/#repository-forken). Zeus users are the Dodona admins. They can see more than anyone else, so they can keep the platform running. Features needing Zeus permissions won't be documented as well as others, as you'll likely not need them. Unless you're an actual Zeus user, but if you are, you'll mostly use the web-ui anyway.


## How to start using the API
- [First exploring](./first_use#explore-via-browser)
- [Authentication](./first_use#authenticate)

## All endpoints
- [List of endpoints](./all_endpoints)
## Exercises


## Exercise series


## Courses
- [General](./courses/#general)
- [Course contents](./courses/#course-contents)
- [List courses](./courses/#list-courses)
- [Course series](./courses/#course-series)


## User