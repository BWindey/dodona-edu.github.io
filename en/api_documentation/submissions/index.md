---
title: Submissions
---

# API-Documentation: Submissions

[[toc]]

# General
Submissions are linked to an exercise and user, and contain the results.
All the fields of a submission are:
- `created_at`: string with creation date
- `status`: string, [unknown|correct|wrong|time limit exceeded|running|queued|runtime error|compilation error|memory limit exceeded|internal error|output limit exceeded]
- `summary`: string
- `accepted`: boolean, all tests passed
- `id`: int
- `url`: string, self-referencing url
- `user`: string, user (can be in course-context)
- `has_annotations`: boolean
- `exercise`: 
- `course`: 
- `code`: 
- `result`: 


# Annotations
Submissions can have annotations, questions and answers by the code.

To get the annotations for an exercise, you can poll the endpoint `/submissions/{id}/annotations.json`.
This will bring up all the annotations for a submission. To get just one annotation, add its id to the link.

```bash
curl -H "Authorization: <TOKEN>" \
    -H "Accept: application/json" \
    -H 'Content-Type: application/json' \
    -d '{ "question": { "annotation_text": "<TEXT>", "line_nr": <LINE_NR>, "rows": <ROWS> }}' \
    -X POST \
    "https://dodona.be/submissions/<SUB_ID>/annotations/"
```

You can also use the API to mark an annotations as answered with a PATCH request:
```bash
curl -H "Authorization: <TOKEN>" \
    -H "Accept: application/json" \
    -H 'Content-Type: application/json' \
    -d '{"from":"unanswered","question":{"question_state":"answered"}}' \
    -X PATCH \
    "https://dodona.be/submissions/<SUB_ID>/annotations/<AN_ID>"
```

Both requests will return the new/edited annotation object.