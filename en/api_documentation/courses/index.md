---
title: Courses
---

# API-Documentation: Courses

[[toc]]

## General

Courses are a collection of exercise-series. They are usually made by teachers for their own class, and allow students to register for them. This page documents every action you can do on courses.

## Course contents
Every course has a few attributes. The main useful ones are:
- id
- name
- teacher
- url (points towards itself)
- series (points towards list of all exercise-series for the course)

Other attributes are:
- color (no active use anymore)
- year
- visibility (hidden, visible_for_all, visible_for_institutions)
- registration (closed, open_for_all, open_for_institution)
- created_at
- updated_at

To get this info from a specific course, you need its id to request 'https://dodona.be/courses/{id}.json':
```python
# Using featured course "The Coder's Apprentice"
id = 296
connection.request("GET", f"/courses/{id}", headers=headers)
response = json.loads(connection.getresponse().read())

print(response.get('id'))       # 296
print(response.get('name'))     # The Coder's Apprentice
print(response.get('teacher'))  # Pieter Spronck
```

## List courses
To get a list of all courses, you can request 'https://dodona.be/courses.json'. This will return the first 30 courses. To get more, or filter your results, you can add parameters to the url after a question mark:
- "?page=n"
- "?tab=x"

With "page" you can go to the page you want. To get all the pages, you can perform a GET request with the number 'n' increasing until the response is empty:
```python
n = 1
response = {"start": "value"}
while response:
    connection.request("GET", f"/courses?page={n}", headers=headers)
    response = json.loads(connection.getresponse().read())
    if response:
        print(response)
    n += 1 
connection.close()  
```
With "tab" you can specify between "all", "featured", "institution", and "my". Those last two are user-dependant, so they require you to authenticate via a token. If you don't provide an authentication token, or a tag, it will default to "all".

You can use both tags together with "&", like `https://dodona.be/courses?tab=all&page=3`.

## Course series
<!-- TODO: link series documentation -->
Most courses have exercise-series organised within them. To view all available series, you can request 'https://dodona.be/courses/{course_id}/series.json'. This will return a list of all series, each with their own attributes. You can read the [documentation about series]() here to learn more about them.

## Course activities
<!-- TODO: link series documentation -->
It is possible to view activities within a course, but that's usually not something you'd do, as there is not an API call that can return a list of all exercises within a course. It is more useful to view them inside [series]().

## Course members
Users with the right [permissions](../#permission-levels) (staff or higher) can view all members, users who are registered for that course. 
<!-- TODO: expand on this subject a bit more -->

## New courses

## Edit courses