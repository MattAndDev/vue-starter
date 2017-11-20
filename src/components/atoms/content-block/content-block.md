This very simple component is used to display pieces of content.
If you pass html ensure the isHtml flag is set to true as follows

```jsx
<content-block content='This content has some html tags inside like <a href="http://www.example.org" class="anchor">a link</a>' :isHtml='true' />

```
Elsehow yu can pass in a simple string as content that will be wrapped in a paragraph tag
```jsx
<content-block content="Lorem ipsum any type of simple string to be displayed as paragraph" />
```
