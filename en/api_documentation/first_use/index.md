---
title: First steps
---

# API-documentation: First steps

## Explore via browser
Many of the actions you can perform on Dodona can also be done through the API. You can add `.json` to the end of the URL of each page to see the results of the API in your browser.
For example, if you want to get a list of all featured courses on Dodona, you can go to [dodona.be/courses.json?tab=featured](https://dodona.be/courses.json?tab=featured).

## Authentication
For endpoints where you need to be signed in, you can use an [API token](#what-is-an-api-token) to authenticate. You can do this by adding the token to an `Authorization` header with your request:

```bash
curl \
  -H "Authorization: {YOUR TOKEN}" \
  -H "Accept: application/json" \
  "https://dodona.be/nl/courses.json?tab=featured"
```

In Python, this would look like:

```python
#!/usr/bin/python3
# Name: Get submissions
# By Robbert Gurdeep Singh
######################################################################
TOKEN = "TOKEN HERE"


import http.client
conn = http.client.HTTPSConnection("dodona.be")
headers = {
    "Content-type": "application/json",
    "Accept": "application/json",
    "Authorization" : TOKEN
}

conn.request("GET", "/en/courses.json?tab=featured", headers=headers)
res = conn.getresponse()
print(res.status, res.reason)
data = res.read()
conn.close()
print(data)
```