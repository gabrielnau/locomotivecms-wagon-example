# LocomotiveCMS Wagon example

This is an application built with [Wagon](http://www.locomotivecms.com/features#wagon).
It's the actual template of [www.imacliche.com](http://www.imacliche.com).

Contains examples of : 

- small blog features (see news page)
- rich media contents
- editable contents
- TODO working with dev environment (front debugging assets)
- translation : actually english only website, but static string stored in a I18n way

## Dev notes

Compatibility: 

- html5 elements > modernzer
- inline-block
- box-sizing border box

Global : 

- time format
- alt images
- editables contents / tabs / files
- image resizes
- IE7 images
- editable elements for each page
- pagination

Home :
  
  next : 
    filter next events

about : 
  last child


Issues / features : 

- page parse error : better log
- autoreload translations

Notes : 

With this, you can use editable areas in your snippets.

Eg.:
You have a block called 'main' in your index view
{% block 'main' %}

Inside of this block, you have a call to snipped 'page_head.html.haml' with this code:

{% editable_short_text page_head_title, priority: 10 %}
  A simple title
{% endeditable_short_text %}

In your views that extend index you can make this block editable.

main/page_head_title
  ↑             ↑
Block      Slug

