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

You can use both tags together with "&", like 'https://dodona.be/courses?tab=all&page=3'.

## Course series
<!-- TODO: link series and exercises documentation -->
Most courses have exercise-series organised within them. To view all available series, you can request 'https://dodona.be/courses/{course_id}/series.json'. This will return a list of all series, each with their own attributes. You can read the [documentation about series]() here to learn more about them.

## Course activities
<!-- TODO: link series and contentpages documentation -->
It is possible to view activities within a course via `https://dodona.be/courses/{course_id}/activities/{activity_id}`. However, it is (currently) not possible to get a list of all activities. It is more useful to view activities inside [series]().
There is, however, a list available of all read [ContentPages](). You can view all of those via `https://dodona.be/courses/{cours_id}/activity_read_states.json`. Each activity_read_state has the following attributes:
- created_at
- id
- url
- user
- course

## Course members
Users with the right [permissions](../#permission-levels) (staff or higher) can view all members, users who are registered for that course. Members have a few attributes:
- id
- username
- first_name
- last_name
- email
- status (course_admin, student)
- labels
- url

You can view each member seperately by appending its id to the link `https://dodona.be/courses/{course_id}/members/{member_id}.json`. This however doesn't provide more info then in the list above.

You can download the list of members as csv from `https://dodona.be/courses/{course_id}/members/download_labels_csv`:
```python
import shutil

# Authorization is required here!
connection.request("GET", f"/courses/{course_id}/members/download_labels_csv", headers=headers)
response = connection.getresponse()

with open("download_labels_csv", 'wb') as file:
    shutil.copyfileobj(response, file) 
```
You can edit the labels of this file and post it again to Dodona. Doing so through the api is not easy at all and highly discouraged (you'd need to capture an X-CSRF session token and add it to the headers). 

## New courses

## Edit courses