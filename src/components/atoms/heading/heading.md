General purpose heading component, supports all level of heading 1 to 6
Also offers the possibility to fake the heading styles with paragraph or span:
```jsx
<div>
<heading content="I'm a h1 heading" type="h1"></heading>
<heading content="I'm a h3 heading" type="h3"></heading>
<heading content="I'm a h5 heading as span element" fake="span" type="h5"></heading>      <heading content="I'm a h6 heading as span element" fake="span" type="h6"></heading>
</div>
```
