<!-- <div style="display: flex;"><img src="./red_square.svg" alt="Zeus" style="margin-right: 5px"/> <img src="./orange_square.svg" alt="Staff" style="margin-right: 5px"/> <img src="./green_square.svg" alt="Student" style="margin-right: 5px"/></div> -->

| Endpoint                                                                                     | Request Methods         | Privilege Level |  API accessible   |
|----------------------------------------------------------------------------------------------|-------------------------|-----------------|:-----------------:|
| [/](https://dodona.be/)                                                                      | GET                     | 3               |                   |
| [/about](https://dodona.be/about)                                                            | GET                     | 3               |                   |
| [/activities](https://dodona.be/about)                                                       | GET                     | 3               |   :check_mark:    |
| /activities/\{id\}                                                                           | PUT, PATCH, GET         | 3               |
| /activities/\{id\}/edit                                                                      | GET                     | 2               |
| /activities/\{id\}/inputServiceWorker.js                                                     | GET                     | 3               |
| [/activity_read_states](https://dodona.be/activity_read_states)                              | GET, POST               | 3               |
| [/annotations](https://dodona.be/annotations)                                                | GET, POST               | 3               |     JSON only     |
| /annotations/\{id\}                                                                          | GET, PUT, PATCH, DELETE | 3               |     JSON only     |
| [/announcements](https://dodona.be/announcements)                                            | GET, POST               | 1               |
| [/announcements/new](https://dodona.be/announcements/new)                                    | GET                     | 1               |
| /announcements/\{id\}                                                                        | DELETE, PUT, PATCH      | ?               |
| /announcements/\{id\}/edit                                                                   | GET                     | 1               |
| /announcements/\{id\}/mark_as_read                                                           | POST                    | ?               |
| /api_tokens/\{id\}                                                                           | DELETE                  | ?               |
| [/contact](https://dodona.be/contact)                                                        | GET, POST               | 3               |



| [/courses](https://dodona.be/courses)                                                        | GET, POST               | 3               |
| [/courses/new](https://dodona.be/courses/new)                                                | GET                     | 2               |
| /courses/\{course_id\}/activities/\{activity_id\}/inputServiceWorker.js                      | GET                     | 3               |
| /courses/\{course_id\}/activities/\{id\}                                                     | PUT, PATCH, GET         | 3               |
| /courses/\{course_id\}/activities/\{id\}/edit                                                | GET                     | 2               |
| /courses/\{course_id\}/activity_read_states                                                  | GET                     | 3               |
| /courses/\{course_id\}/exercises/\{id\}                                                      | PUT, PATCH, GET         | 3               |
| /courses/\{course_id\}/exercises/\{id\}/edit                                                 | GET                     | 2               |
| /courses/\{course_id\}/members                                                               | GET                     | 2               |
| /courses/\{course_id\}/members/download_labels_csv                                           | GET                     | 2               |
| /courses/\{course_id\}/members/upload_labels_csv                                             | POST                    | ?               |
| /courses/\{course_id\}/members/\{id\}                                                        | PUT, PATCH, GET         | 2               |
| /courses/\{course_id\}/members/\{id\}/edit                                                   | GET                     | 2               |
| /courses/\{course_id\}/series                                                                | GET                     | 3               | :check_mark: |
| /courses/\{course_id\}/series/new                                                            | GET                     | 2               |
| /courses/\{course_id\}/series/\{series_id\}/activities/\{activity_id\}/inputServiceWorker.js | GET                     | 3               |
| /courses/\{course_id\}/series/\{series_id\}/activities/\{id\}                                | PUT, PATCH, GET         | 3               |
| /courses/\{course_id\}/series/\{series_id\}/activities/\{id\}/edit                           | GET                     | 2               |
| /courses/\{course_id\}/series/\{series_id\}/exercises/\{id\}                                 | PUT, PATCH, GET         | 3               |
| /courses/\{course_id\}/series/\{series_id\}/exercises/\{id\}/edit                            | GET                     | 2               |
| /courses/\{course_id\}/submissions                                                           | GET                     | 3               |
| /courses/\{id\}                                                                              | GET, PUT, PATCH, DELETE | 3               |
| /courses/\{id\}/edit                                                                         | GET                     | 2               |
| /courses/\{id\}/favorite                                                                     | POST                    | ?               |
| /courses/\{id\}/ical                                                                         | GET                     | 3               |
| /courses/\{id\}/manage_series                                                                | GET                     | 2               |
| /courses/\{id\}/mass_accept_pending                                                          | POST                    | ?               |
| /courses/\{id\}/mass_decline_pending                                                         | POST                    | ?               |
| /courses/\{id\}/questions                                                                    | GET                     | 2               |
| /courses/\{id\}/reorder_series                                                               | POST                    | ?               |
| /courses/\{id\}/reset_token                                                                  | POST                    | ?               |
| /courses/\{id\}/scoresheet                                                                   | GET                     | 2               |
| /courses/\{id\}/statistics                                                                   | GET                     | 2               |
| /courses/\{id\}/subscribe                                                                    | GET, POST               | 3               |
| /courses/\{id\}/subscribe/\{secret\}                                                         | GET                     | 3               |
| /courses/\{id\}/unfavorite                                                                   | POST                    | ?               |
| /courses/\{id\}/unsubscribe                                                                  | POST                    | 3               |
| /courses/\{id\}/update_membership                                                            | POST                    | ?               |



| [/data](https://dodona.be/data)                                                              | GET                     | 3               |
| /evaluation_exercise/\{id\}                                                                  | PATCH, PUT              | ?               |
| [/evaluations](https://dodona.be/evaluations)                                                | POST                    | ?               |
| [/evaluations/new](https://dodona.be/evaluations/new)                                        | GET                     | ?               |
| /evaluations/\{evaluation_id\}/feedbacks/\{id\}                                              | PUT, PATCH, GET         | ?               |
| /evaluations/\{evaluation_id\}/feedbacks/\{id\}/edit                                         | GET                     | ?               |
| /evaluations/\{evaluation_id\}/score_items                                                   | POST                    | ?               |
| /evaluations/\{evaluation_id\}/score_items/add_all                                           | POST                    | ?               |
| /evaluations/\{evaluation_id\}/score_items/copy                                              | POST                    | ?               |
| /evaluations/\{evaluation_id\}/score_items/\{id\}                                            | DELETE, PUT, PATCH      | ?               |
| /evaluations/\{evaluation_id\}/scores                                                        | POST                    | ?               |
| /evaluations/\{evaluation_id\}/scores/\{id\}                                                 | GET, PUT, PATCH, DELETE | ?               |
| /evaluations/\{id\}                                                                          | GET, PUT, PATCH, DELETE | ?               |
| /evaluations/\{id\}/add_user                                                                 | POST                    | ?               |
| /evaluations/\{id\}/edit                                                                     | GET                     | ?               |
| /evaluations/\{id\}/export_grades                                                            | GET                     | ?               |
| /evaluations/\{id\}/modify_grading_visibility                                                | POST                    | ?               |
| /evaluations/\{id\}/overview                                                                 | GET                     | ?               |
| /evaluations/\{id\}/remove_user                                                              | POST                    | ?               |
| /evaluations/\{id\}/set_multi_user                                                           | POST                    | ?               |
| [/events](https://dodona.be/events)                                                          | GET                     | X               |
| [/exercises](https://dodona.be/exercises)                                                    | GET                     | 3               |
| /exercises/\{id\}                                                                            | PUT, PATCH, GET         | 3               |
| /exercises/\{id\}/edit                                                                       | GET                     | 2               |
| [/exports](https://dodona.be/exports)                                                        | GET                     | 3               |
| /exports/courses/\{id\}                                                                      | GET, POST               | 3               |
| /exports/series/\{id\}                                                                       | GET, POST               | 3               |
| /exports/users/\{id\}                                                                        | GET, POST               | 3               |
| /feedbacks/\{id\}                                                                            | PUT, PATCH, GET         | ?               |
| /feedbacks/\{id\}/edit                                                                       | GET                     | ?               |
| /feedbacks/\{id\}/scores                                                                     | DELETE                  | ?               |
| [/infoable/info](https://dodona.be/infoable/info)                                            | GET                     | X               |
| [/institution_not_supported](https://dodona.be/institution_not_supported)                    | GET                     | 3               |
| [/institutions](https://dodona.be/institutions)                                              | GET                     | 1               |
| /institutions/\{id\}                                                                         | PUT, PATCH, GET         | 1               |
| /institutions/\{id\}/edit                                                                    | GET                     | 1               |
| /institutions/\{id\}/merge                                                                   | GET, POST               | 1               |
| /institutions/\{id\}/merge_changes                                                           | GET                     | 1               |
| [/judges](https://dodona.be/judges)                                                          | GET, POST               | 2               |
| [/judges/new](https://dodona.be/judges/new)                                                  | GET                     | 1               |
| /judges/\{id\}                                                                               | GET, PUT, PATCH, DELETE | 2               |
| /judges/\{id\}/edit                                                                          | GET                     | 1               |
| /judges/\{id\}/hook                                                                          | GET, POST               | 2               |
| /judges/\{judge_id\}/submissions                                                             | GET                     | 2               |
| [/labels](https://dodona.be/labels)                                                          | GET, POST               | 3               |
| [/labels/new](https://dodona.be/labels/new)                                                  | GET                     | 2               |
| /labels/\{id\}                                                                               | GET, PUT, PATCH         | 3               |
| /labels/\{id\}/edit                                                                          | GET                     | 1               |
| [/lti/content_selection](https://dodona.be/lti/content_selection)                            | GET, POST               | ?               |
| [/lti/do_redirect](https://dodona.be/lti/do_redirect)                                        | GET                     | ?               |
| [/lti/wks](https://dodona.be/lti/wks)                                                        | GET                     | ?               |
| [/lti/redirect](https://dodona.be/lti/redirect)                                              | GET                     | ?               |
| [/lti/series_and_activities](https://dodona.be/lti/series_and_activities)                    | GET                     | ?               |
| [/notifications](https://dodona.be/notifications)                                            | GET                     | 3               |
| [/notifications/destroy_all](https://dodona.be/notifications/destroy_all)                    | DELETE                  | ?               |
| /notifications/\{id\}                                                                        | DELETE, PUT, PATCH      | ?               |
| [/privacy](https://dodona.be/privacy)                                                        | GET                     | 3               |
| [/profile](https://dodona.be/profile)                                                        | GET                     | 3               |
| [/programming_languages](https://dodona.be/programming_languages)                            | GET, POST               | 2               |
| [/programming_languages/new](https://dodona.be/programming_languages/new)                    | GET                     | 2               |
| /programming_languages/\{id\}                                                                | GET, PUT, PATCH, DELETE | 2               |
| /programming_languages/\{id\}/edit                                                           | GET                     | 1               |
| [/publications](https://dodona.be/publications)                                              | GET                     | 3               |
| [/questions](https://dodona.be/questions)                                                    | GET                     | 3               |
| [/readable/activity_read_states](https://dodona.be/readable/activity_read_states)            | GET, POST               | X               |
| [/repositories](https://dodona.be/repositories)                                              | GET, POST               | 2               |
| [/repositories/new](https://dodona.be/repositories/new)                                      | GET                     | 2               |
| /repositories/\{id\}                                                                         | GET, PUT, PATCH, DELETE | 2               |
| /repositories/\{id\}/add_admin                                                               | POST                    | 2               |
| /repositories/\{id\}/add_course                                                              | POST                    | 2               |
| /repositories/\{id\}/admins                                                                  | GET                     | 2               |
| /repositories/\{id\}/courses                                                                 | GET                     | 2               |
| /repositories/\{id\}/edit                                                                    | GET                     | 2               |
| /repositories/\{id\}/hook                                                                    | GET, POST               | 2               |
| /repositories/\{id\}/public/*media                                                           | GET                     | ?               |
| /repositories/\{id\}/remove_admin                                                            | POST                    | 2               |
| /repositories/\{id\}/remove_course                                                           | POST                    | 2               |
| /repositories/\{id\}/reprocess                                                               | POST                    | 2               |
| [/rights_requests](https://dodona.be/rights_requests)                                        | GET, POST               | 1               |
| [/rights_requests/new](https://dodona.be/rights_requests/new)                                | GET                     | 1               |
| /rights_requests/\{id\}/approve                                                              | POST                    | 1               |
| /rights_requests/\{id\}/reject                                                               | POST                    | 1               |
| [/saved_annotations](https://dodona.be/saved_annotations)                                    | GET, POST               | 2               |
| [/saved_annotations/new](https://dodona.be/saved_annotations/new)                            | GET                     | 2               |
| /saved_annotations/\{id\}                                                                    | GET, PUT, PATCH, DELETE | 2               |
| /saved_annotations/\{id\}/edit                                                               | GET                     | 2               |
| [/series](https://dodona.be/series)                                                          | POST                    | 3               |
| /series/\{id\}                                                                               | GET, PUT, PATCH, DELETE | 3               |
| /series/\{id\}/add_activity                                                                  | POST                    | 2               |
| /series/\{id\}/available_activities                                                          | GET                     | X               |
| /series/\{id\}/edit                                                                          | GET                     | 2               |
| /series/\{id\}/mass_rejudge                                                                  | POST                    | ?               |
| /series/\{id\}/overview                                                                      | GET                     | 3               |
| /series/\{id\}/remove_activity                                                               | POST                    | 2               |
| /series\{id\}/reorder_activities                                                             | POST                    | 2               |
| /series\{id\}/reset_token                                                                    | POST                    | 2               |
| /series/\{id\}/scoresheet                                                                    | GET                     | 2               |
| /series/\{series_id\}/activities                                                             | GET                     | 3               |
| /series/\{series_id\}/exercises                                                              | GET                     | 3               |
| [/stats/cumulative_timeseries](https://dodona.be/stats/cumulative_timeseries)                | GET                     | X               |
| [/stats/heatmap](https://dodona.be/stats/heatmap)                                            | GET                     | 3               |     JSON only     |
| [/stats/punchcard](https://dodona.be/stats/punchcard)                                        | GET                     | 3               |     JSON only     |
| [/stats/stacked_status](https://dodona.be/stats/stacked_status)                              | GET                     | X               |
| [/stats/timeseries](https://dodona.be/stats/timeseries)                                      | GET                     | X               |
| [/stats/violin](https://dodona.be/stats/violin)                                              | GET                     | X               |
| [/status](https://dodona.be/status)                                                          | GET                     | 3               | External redirect |
| [/submissions](https://dodona.be/submissions)                                                | GET, POST               | 3               |   :check_mark:    |
| [/submissions/mass_rejudge](https://dodona.be/submissions/mass_rejudge)                      | POST                    | 1               |
| /submissions/\{id\}                                                                          | GET                     | 3               |   :check_mark:    |
| /submissions/\{id\}/download                                                                 | GET                     | 3               |
| /submissions/\{id\}/edit                                                                     | GET                     | 3               |         x         |
| /submissions/\{id\}/evaluate                                                                 | GET                     | 2               |
| /submissions/\{id\}/media/*media                                                             | GET                     | X               |
| /submissions/\{submission_id\}/annotations                                                   | GET, POST               | X               |
| /submissions/\{submission_id\}/annotations/\{id\}                                            | DELETE, PUT, PATCH      | X               |
| [/submitable/submissions](https://dodona.be/submitable/submissions)                          | GET, POST               | X               |
| [/support-us](https://dodona.be/support-us)                                                  | GET                     | 3               |
| [/toggle_demo_mode](https://dodona.be/toggle_demo_mode)                                      | POST                    | 2               |
| [/user/confirm_new_user](https://dodona.be/user/confirm_new_user)                            | GET, POST               | X               |
| [/user/privacy_prompt](https://dodona.be/user/privacy_prompt)                                | GET, POST               | X               |
| [/user/sign_in](https://dodona.be/user/sign_in)                                              | GET                     | X               |
| [/user/sign_out](https://dodona.be/user/sign_out)                                            | DELETE                  | X               |
| [/users](https://dodona.be/users)                                                            | GET, POST               | 1               |
| [/users/available_for_repository](https://dodona.be/users/available_for_repository)          | GET                     | X               |
| [/users/new](https://dodona.be/users/new)                                                    | GET                     | 1               |
| [/users/sami/metadata](https://dodona.be/users/sami/metadata)                                | GET                     | X               |
| [/users/stop_impersonating](https://dodona.be/users/stop_impersonating)                      | GET                     | 1               |
| /users/\{id\}                                                                                | GET, PUT, PATCH, DELETE | 3               |
| /users/\{id\}/edit                                                                           | GET                     | 1               |
| /users/\{id\}/impersonate                                                                    | GET                     | 1               |
| /users/\{id\}/token/\{token\}                                                                | GET                     | 1               |
| /users/\{user_id\}/activity_read_states                                                      | GET                     | 3               |
| /users/\{user_id\}/api_tokens                                                                | GET, POST               | 3               |     JSON only     |
| /users/\{user_id\}/submissions                                                               | GET                     | 3               |
| [/user/users/auth/lti](https://dodona.be/user/users/auth/lti)                                | GET                     | X               |
| [/user/users/saml/auth](https://dodona.be/user/users/saml/auth)                              | POST                    | X               |
| /\{locale\}                                                                                  | GET                     | 3               |
