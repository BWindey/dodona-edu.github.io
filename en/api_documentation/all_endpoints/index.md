---
title: All Endpoints
---

# API-Documentation: All Endpoints

This table provides a list of all available endpoints (parts of url to paste behind `dodona.be`).
For each endpoint, the available request method, the needed privilege level to access it, 
and the type of content it returns/accepts, is listed.


| Endpoint                                                                                     | Request Methods         |         Privilege Level          |   Accessible by   |
|----------------------------------------------------------------------------------------------|-------------------------|:--------------------------------:|:-----------------:|
| [/](https://dodona.be/)                                                                      | GET                     | <PermissionSquares :level="3" /> |    HTML, JSON     |
| [/about](https://dodona.be/about)                                                            | GET                     | <PermissionSquares :level="3" /> |       HTML        |
| [/activities](https://dodona.be/about)                                                       | GET                     | <PermissionSquares :level="3" /> |    HTML, JSON     |
| /activities/\{id\}                                                                           | PUT, PATCH, GET         | <PermissionSquares :level="3" /> |    HTML, JSON     |
| /activities/\{id\}/edit                                                                      | GET                     | <PermissionSquares :level="2" /> |       HTML        |
| /activities/\{id\}/inputServiceWorker.js                                                     | GET                     | <PermissionSquares :level="3" /> |    HTML, JSON     |
| [/activity_read_states](https://dodona.be/activity_read_states)                              | GET, POST               | <PermissionSquares :level="3" /> |                   |
| [/annotations](https://dodona.be/annotations)                                                | GET, POST               | <PermissionSquares :level="3" /> |       JSON        |
| /annotations/\{id\}                                                                          | GET, PUT, PATCH, DELETE | <PermissionSquares :level="3" /> |       JSON        |
| [/announcements](https://dodona.be/announcements)                                            | GET, POST               | <PermissionSquares :level="1" /> |                   |
| [/announcements/new](https://dodona.be/announcements/new)                                    | GET                     | <PermissionSquares :level="1" /> |                   |
| /announcements/\{id\}                                                                        | DELETE, PUT, PATCH      |                ?                 |                   |
| /announcements/\{id\}/edit                                                                   | GET                     | <PermissionSquares :level="1" /> |                   |
| /announcements/\{id\}/mark_as_read                                                           | POST                    |                ?                 |                   |
| /api_tokens/\{id\}                                                                           | DELETE                  |                ?                 |                   |
| [/contact](https://dodona.be/contact)                                                        | GET, POST               | <PermissionSquares :level="3" /> |                   |
| [/courses](https://dodona.be/courses)                                                        | GET, POST               | <PermissionSquares :level="3" /> |                   |
| [/courses/new](https://dodona.be/courses/new)                                                | GET                     | <PermissionSquares :level="2" /> |                   |
| /courses/\{course_id\}/activities/\{activity_id\}/inputServiceWorker.js                      | GET                     | <PermissionSquares :level="3" /> |                   |
| /courses/\{course_id\}/activities/\{id\}                                                     | PUT, PATCH, GET         | <PermissionSquares :level="3" /> |                   |
| /courses/\{course_id\}/activities/\{id\}/edit                                                | GET                     | <PermissionSquares :level="2" /> |                   |
| /courses/\{course_id\}/activity_read_states                                                  | GET                     | <PermissionSquares :level="3" /> |                   |
| /courses/\{course_id\}/exercises/\{id\}                                                      | PUT, PATCH, GET         | <PermissionSquares :level="3" /> |                   |
| /courses/\{course_id\}/exercises/\{id\}/edit                                                 | GET                     | <PermissionSquares :level="2" /> |                   |
| /courses/\{course_id\}/members                                                               | GET                     | <PermissionSquares :level="2" /> |     HTML, CSV     |
| /courses/\{course_id\}/members/download_labels_csv                                           | GET                     | <PermissionSquares :level="2" /> |                   |
| /courses/\{course_id\}/members/upload_labels_csv                                             | POST                    |                ?                 |                   |
| /courses/\{course_id\}/members/\{id\}                                                        | PUT, PATCH, GET         | <PermissionSquares :level="2" /> |                   |
| /courses/\{course_id\}/members/\{id\}/edit                                                   | GET                     | <PermissionSquares :level="2" /> |                   |
| /courses/\{course_id\}/series                                                                | GET                     | <PermissionSquares :level="3" /> |                   |
| /courses/\{course_id\}/series/new                                                            | GET                     | <PermissionSquares :level="2" /> |                   |
| /courses/\{course_id\}/series/\{series_id\}/activities/\{activity_id\}/inputServiceWorker.js | GET                     | <PermissionSquares :level="3" /> |                   |
| /courses/\{course_id\}/series/\{series_id\}/activities/\{id\}                                | PUT, PATCH, GET         | <PermissionSquares :level="3" /> |                   |
| /courses/\{course_id\}/series/\{series_id\}/activities/\{id\}/edit                           | GET                     | <PermissionSquares :level="2" /> |                   |
| /courses/\{course_id\}/series/\{series_id\}/exercises/\{id\}                                 | PUT, PATCH, GET         | <PermissionSquares :level="3" /> |                   |
| /courses/\{course_id\}/series/\{series_id\}/exercises/\{id\}/edit                            | GET                     | <PermissionSquares :level="2" /> |                   |
| /courses/\{course_id\}/submissions                                                           | GET                     | <PermissionSquares :level="3" /> |                   |
| /courses/\{id\}                                                                              | GET, PUT, PATCH, DELETE | <PermissionSquares :level="3" /> |                   |
| /courses/\{id\}/edit                                                                         | GET                     | <PermissionSquares :level="2" /> |                   |
| /courses/\{id\}/favorite                                                                     | POST                    |                ?                 |                   |
| /courses/\{id\}/ical                                                                         | GET                     | <PermissionSquares :level="3" /> |                   |
| /courses/\{id\}/manage_series                                                                | GET                     | <PermissionSquares :level="2" /> |                   |
| /courses/\{id\}/mass_accept_pending                                                          | POST                    |                ?                 |                   |
| /courses/\{id\}/mass_decline_pending                                                         | POST                    |                ?                 |                   |
| /courses/\{id\}/questions                                                                    | GET                     | <PermissionSquares :level="2" /> |                   |
| /courses/\{id\}/reorder_series                                                               | POST                    |                ?                 |                   |
| /courses/\{id\}/reset_token                                                                  | POST                    |                ?                 |                   |
| /courses/\{id\}/scoresheet                                                                   | GET                     | <PermissionSquares :level="2" /> |                   |
| /courses/\{id\}/statistics                                                                   | GET                     | <PermissionSquares :level="2" /> |                   |
| /courses/\{id\}/subscribe                                                                    | GET, POST               | <PermissionSquares :level="3" /> |                   |
| /courses/\{id\}/subscribe/\{secret\}                                                         | GET                     | <PermissionSquares :level="3" /> |                   |
| /courses/\{id\}/unfavorite                                                                   | POST                    |                ?                 |                   |
| /courses/\{id\}/unsubscribe                                                                  | POST                    | <PermissionSquares :level="3" /> |                   |
| /courses/\{id\}/update_membership                                                            | POST                    |                ?                 |                   |
| [/data](https://dodona.be/data)                                                              | GET                     | <PermissionSquares :level="3" /> |                   |
| /evaluation_exercise/\{id\}                                                                  | PATCH, PUT              |                ?                 |                   |
| [/evaluations](https://dodona.be/evaluations)                                                | POST                    |                ?                 |                   |
| [/evaluations/new](https://dodona.be/evaluations/new)                                        | GET                     |                ?                 |                   |
| /evaluations/\{evaluation_id\}/feedbacks/\{id\}                                              | PUT, PATCH, GET         |                ?                 |                   |
| /evaluations/\{evaluation_id\}/feedbacks/\{id\}/edit                                         | GET                     |                ?                 |                   |
| /evaluations/\{evaluation_id\}/score_items                                                   | POST                    |                ?                 |                   |
| /evaluations/\{evaluation_id\}/score_items/add_all                                           | POST                    |                ?                 |                   |
| /evaluations/\{evaluation_id\}/score_items/copy                                              | POST                    |                ?                 |                   |
| /evaluations/\{evaluation_id\}/score_items/\{id\}                                            | DELETE, PUT, PATCH      |                ?                 |                   |
| /evaluations/\{evaluation_id\}/scores                                                        | POST                    |                ?                 |                   |
| /evaluations/\{evaluation_id\}/scores/\{id\}                                                 | GET, PUT, PATCH, DELETE |                ?                 |                   |
| /evaluations/\{id\}                                                                          | GET, PUT, PATCH, DELETE |                ?                 |                   |
| /evaluations/\{id\}/add_user                                                                 | POST                    |                ?                 |                   |
| /evaluations/\{id\}/edit                                                                     | GET                     |                ?                 |                   |
| /evaluations/\{id\}/export_grades                                                            | GET                     |                ?                 |                   |
| /evaluations/\{id\}/modify_grading_visibility                                                | POST                    |                ?                 |                   |
| /evaluations/\{id\}/overview                                                                 | GET                     |                ?                 |                   |
| /evaluations/\{id\}/remove_user                                                              | POST                    |                ?                 |                   |
| /evaluations/\{id\}/set_multi_user                                                           | POST                    |                ?                 |                   |
| [/events](https://dodona.be/events)                                                          | GET                     |                X                 |                   |
| [/exercises](https://dodona.be/exercises)                                                    | GET                     | <PermissionSquares :level="3" /> |                   |
| /exercises/\{id\}                                                                            | PUT, PATCH, GET         | <PermissionSquares :level="3" /> |                   |
| /exercises/\{id\}/edit                                                                       | GET                     | <PermissionSquares :level="2" /> |                   |
| [/exports](https://dodona.be/exports)                                                        | GET                     | <PermissionSquares :level="3" /> |                   |
| /exports/courses/\{id\}                                                                      | GET, POST               | <PermissionSquares :level="3" /> |                   |
| /exports/series/\{id\}                                                                       | GET, POST               | <PermissionSquares :level="3" /> |                   |
| /exports/users/\{id\}                                                                        | GET, POST               | <PermissionSquares :level="3" /> |                   |
| /feedbacks/\{id\}                                                                            | PUT, PATCH, GET         |                ?                 |                   |
| /feedbacks/\{id\}/edit                                                                       | GET                     |                ?                 |                   |
| /feedbacks/\{id\}/scores                                                                     | DELETE                  |                ?                 |                   |
| [/infoable/info](https://dodona.be/infoable/info)                                            | GET                     |                X                 |                   |
| [/institution_not_supported](https://dodona.be/institution_not_supported)                    | GET                     | <PermissionSquares :level="3" /> |                   |
| [/institutions](https://dodona.be/institutions)                                              | GET                     | <PermissionSquares :level="1" /> |                   |
| /institutions/\{id\}                                                                         | PUT, PATCH, GET         | <PermissionSquares :level="1" /> |                   |
| /institutions/\{id\}/edit                                                                    | GET                     | <PermissionSquares :level="1" /> |                   |
| /institutions/\{id\}/merge                                                                   | GET, POST               | <PermissionSquares :level="1" /> |                   |
| /institutions/\{id\}/merge_changes                                                           | GET                     | <PermissionSquares :level="1" /> |                   |
| [/judges](https://dodona.be/judges)                                                          | GET, POST               | <PermissionSquares :level="2" /> |                   |
| [/judges/new](https://dodona.be/judges/new)                                                  | GET                     | <PermissionSquares :level="1" /> |                   |
| /judges/\{id\}                                                                               | GET, PUT, PATCH, DELETE | <PermissionSquares :level="2" /> |                   |
| /judges/\{id\}/edit                                                                          | GET                     | <PermissionSquares :level="1" /> |                   |
| /judges/\{id\}/hook                                                                          | GET, POST               | <PermissionSquares :level="2" /> |                   |
| /judges/\{judge_id\}/submissions                                                             | GET                     | <PermissionSquares :level="2" /> |                   |
| [/labels](https://dodona.be/labels)                                                          | GET, POST               | <PermissionSquares :level="3" /> |                   |
| [/labels/new](https://dodona.be/labels/new)                                                  | GET                     | <PermissionSquares :level="2" /> |                   |
| /labels/\{id\}                                                                               | GET, PUT, PATCH         | <PermissionSquares :level="3" /> |                   |
| /labels/\{id\}/edit                                                                          | GET                     | <PermissionSquares :level="1" /> |                   |
| [/lti/content_selection](https://dodona.be/lti/content_selection)                            | GET, POST               |                ?                 |                   |
| [/lti/do_redirect](https://dodona.be/lti/do_redirect)                                        | GET                     |                ?                 |                   |
| [/lti/wks](https://dodona.be/lti/wks)                                                        | GET                     |                ?                 |                   |
| [/lti/redirect](https://dodona.be/lti/redirect)                                              | GET                     |                ?                 |                   |
| [/lti/series_and_activities](https://dodona.be/lti/series_and_activities)                    | GET                     |                ?                 |                   |
| [/notifications](https://dodona.be/notifications)                                            | GET                     | <PermissionSquares :level="3" /> |                   |
| [/notifications/destroy_all](https://dodona.be/notifications/destroy_all)                    | DELETE                  |                ?                 |                   |
| /notifications/\{id\}                                                                        | DELETE, PUT, PATCH      |                ?                 |                   |
| [/privacy](https://dodona.be/privacy)                                                        | GET                     | <PermissionSquares :level="3" /> |                   |
| [/profile](https://dodona.be/profile)                                                        | GET                     | <PermissionSquares :level="3" /> |                   |
| [/programming_languages](https://dodona.be/programming_languages)                            | GET, POST               | <PermissionSquares :level="2" /> |                   |
| [/programming_languages/new](https://dodona.be/programming_languages/new)                    | GET                     | <PermissionSquares :level="2" /> |                   |
| /programming_languages/\{id\}                                                                | GET, PUT, PATCH, DELETE | <PermissionSquares :level="2" /> |                   |
| /programming_languages/\{id\}/edit                                                           | GET                     | <PermissionSquares :level="1" /> |                   |
| [/publications](https://dodona.be/publications)                                              | GET                     | <PermissionSquares :level="3" /> |                   |
| [/questions](https://dodona.be/questions)                                                    | GET                     | <PermissionSquares :level="3" /> |                   |
| [/readable/activity_read_states](https://dodona.be/readable/activity_read_states)            | GET, POST               |                X                 |                   |
| [/repositories](https://dodona.be/repositories)                                              | GET, POST               | <PermissionSquares :level="2" /> |                   |
| [/repositories/new](https://dodona.be/repositories/new)                                      | GET                     | <PermissionSquares :level="2" /> |                   |
| /repositories/\{id\}                                                                         | GET, PUT, PATCH, DELETE | <PermissionSquares :level="2" /> |                   |
| /repositories/\{id\}/add_admin                                                               | POST                    | <PermissionSquares :level="2" /> |                   |
| /repositories/\{id\}/add_course                                                              | POST                    | <PermissionSquares :level="2" /> |                   |
| /repositories/\{id\}/admins                                                                  | GET                     | <PermissionSquares :level="2" /> |                   |
| /repositories/\{id\}/courses                                                                 | GET                     | <PermissionSquares :level="2" /> |                   |
| /repositories/\{id\}/edit                                                                    | GET                     | <PermissionSquares :level="2" /> |                   |
| /repositories/\{id\}/hook                                                                    | GET, POST               | <PermissionSquares :level="2" /> |                   |
| /repositories/\{id\}/public/*media                                                           | GET                     |                ?                 |                   |
| /repositories/\{id\}/remove_admin                                                            | POST                    | <PermissionSquares :level="2" /> |                   |
| /repositories/\{id\}/remove_course                                                           | POST                    | <PermissionSquares :level="2" /> |                   |
| /repositories/\{id\}/reprocess                                                               | POST                    | <PermissionSquares :level="2" /> |                   |
| [/rights_requests](https://dodona.be/rights_requests)                                        | GET, POST               | <PermissionSquares :level="1" /> |                   |
| [/rights_requests/new](https://dodona.be/rights_requests/new)                                | GET                     | <PermissionSquares :level="1" /> |                   |
| /rights_requests/\{id\}/approve                                                              | POST                    | <PermissionSquares :level="1" /> |                   |
| /rights_requests/\{id\}/reject                                                               | POST                    | <PermissionSquares :level="1" /> |                   |
| [/saved_annotations](https://dodona.be/saved_annotations)                                    | GET, POST               | <PermissionSquares :level="2" /> |                   |
| [/saved_annotations/new](https://dodona.be/saved_annotations/new)                            | GET                     | <PermissionSquares :level="2" /> |                   |
| /saved_annotations/\{id\}                                                                    | GET, PUT, PATCH, DELETE | <PermissionSquares :level="2" /> |                   |
| /saved_annotations/\{id\}/edit                                                               | GET                     | <PermissionSquares :level="2" /> |                   |
| [/series](https://dodona.be/series)                                                          | POST                    | <PermissionSquares :level="3" /> |                   |
| /series/\{id\}                                                                               | GET, PUT, PATCH, DELETE | <PermissionSquares :level="3" /> |                   |
| /series/\{id\}/add_activity                                                                  | POST                    | <PermissionSquares :level="2" /> |                   |
| /series/\{id\}/available_activities                                                          | GET                     |                X                 |                   |
| /series/\{id\}/edit                                                                          | GET                     | <PermissionSquares :level="2" /> |                   |
| /series/\{id\}/mass_rejudge                                                                  | POST                    |                ?                 |                   |
| /series/\{id\}/overview                                                                      | GET                     | <PermissionSquares :level="3" /> |                   |
| /series/\{id\}/remove_activity                                                               | POST                    | <PermissionSquares :level="2" /> |                   |
| /series\{id\}/reorder_activities                                                             | POST                    | <PermissionSquares :level="2" /> |                   |
| /series\{id\}/reset_token                                                                    | POST                    | <PermissionSquares :level="2" /> |                   |
| /series/\{id\}/scoresheet                                                                    | GET                     | <PermissionSquares :level="2" /> |                   |
| /series/\{series_id\}/activities                                                             | GET                     | <PermissionSquares :level="3" /> |                   |
| /series/\{series_id\}/exercises                                                              | GET                     | <PermissionSquares :level="3" /> |                   |
| [/stats/cumulative_timeseries](https://dodona.be/stats/cumulative_timeseries)                | GET                     |                X                 |                   |
| [/stats/heatmap](https://dodona.be/stats/heatmap)                                            | GET                     | <PermissionSquares :level="3" /> |       JSON        |
| [/stats/punchcard](https://dodona.be/stats/punchcard)                                        | GET                     | <PermissionSquares :level="3" /> |       JSON        |
| [/stats/stacked_status](https://dodona.be/stats/stacked_status)                              | GET                     |                X                 |                   |
| [/stats/timeseries](https://dodona.be/stats/timeseries)                                      | GET                     |                X                 |                   |
| [/stats/violin](https://dodona.be/stats/violin)                                              | GET                     |                X                 |                   |
| [/status](https://dodona.be/status)                                                          | GET                     | <PermissionSquares :level="3" /> | External redirect |
| [/submissions](https://dodona.be/submissions)                                                | GET, POST               | <PermissionSquares :level="3" /> |    HTML, JSON     |
| [/submissions/mass_rejudge](https://dodona.be/submissions/mass_rejudge)                      | POST                    | <PermissionSquares :level="1" /> |                   |
| /submissions/\{id\}                                                                          | GET                     | <PermissionSquares :level="3" /> |    HTML, JSON     |
| /submissions/\{id\}/download                                                                 | GET                     | <PermissionSquares :level="3" /> |  Direct download  |
| /submissions/\{id\}/edit                                                                     | GET                     | <PermissionSquares :level="3" /> |       HTML        |
| /submissions/\{id\}/evaluate                                                                 | GET                     | <PermissionSquares :level="2" /> |       HTML        |
| /submissions/\{id\}/media/*media                                                             | GET                     |                ?                 |         ?         |
| /submissions/\{submission_id\}/annotations                                                   | GET, POST               | <PermissionSquares :level="3" /> |       JSON        |     
| /submissions/\{submission_id\}/annotations/\{id\}                                            | DELETE, PUT, PATCH      | <PermissionSquares :level="3" /> |       JSON        |
| [/submitable/submissions](https://dodona.be/submitable/submissions)                          | GET, POST               |                ?                 |                   |
| [/support-us](https://dodona.be/support-us)                                                  | GET                     | <PermissionSquares :level="3" /> |                   |
| [/toggle_demo_mode](https://dodona.be/toggle_demo_mode)                                      | POST                    | <PermissionSquares :level="2" /> |                   |
| [/user/confirm_new_user](https://dodona.be/user/confirm_new_user)                            | GET, POST               |                X                 |                   |
| [/user/privacy_prompt](https://dodona.be/user/privacy_prompt)                                | GET, POST               |                X                 |                   |
| [/user/sign_in](https://dodona.be/user/sign_in)                                              | GET                     |                X                 |                   |
| [/user/sign_out](https://dodona.be/user/sign_out)                                            | DELETE                  |                X                 |                   |
| [/users](https://dodona.be/users)                                                            | GET, POST               | <PermissionSquares :level="1" /> |                   |
| [/users/available_for_repository](https://dodona.be/users/available_for_repository)          | GET                     |                X                 |                   |
| [/users/new](https://dodona.be/users/new)                                                    | GET                     | <PermissionSquares :level="1" /> |                   |
| [/users/sami/metadata](https://dodona.be/users/sami/metadata)                                | GET                     |                X                 |                   |
| [/users/stop_impersonating](https://dodona.be/users/stop_impersonating)                      | GET                     | <PermissionSquares :level="1" /> |                   |
| /users/\{id\}                                                                                | GET, PUT, PATCH, DELETE | <PermissionSquares :level="3" /> |                   |
| /users/\{id\}/edit                                                                           | GET                     | <PermissionSquares :level="1" /> |                   |
| /users/\{id\}/impersonate                                                                    | GET                     | <PermissionSquares :level="1" /> |                   |
| /users/\{id\}/token/\{token\}                                                                | GET                     | <PermissionSquares :level="1" /> |                   |
| /users/\{user_id\}/activity_read_states                                                      | GET                     | <PermissionSquares :level="3" /> |                   |
| /users/\{user_id\}/api_tokens                                                                | GET, POST               | <PermissionSquares :level="3" /> |       JSON        |
| /users/\{user_id\}/submissions                                                               | GET                     | <PermissionSquares :level="3" /> |                   |
| [/user/users/auth/lti](https://dodona.be/user/users/auth/lti)                                | GET                     |                X                 |                   |
| [/user/users/saml/auth](https://dodona.be/user/users/saml/auth)                              | POST                    |                X                 |                   |
| /\{locale\}                                                                                  | GET                     | <PermissionSquares :level="3" /> |                   |
