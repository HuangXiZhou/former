---
title: Design concept
lang: en-US
---

# Design Concept

Before using **Former**, we can look at how traditional forms are written in html:

```html
<form>
  <!-- input -->
  First name:<br>
  <input type="text" name="firstname"><br>
  Last name:<br>
  <input type="text" name="lastname">

  <!-- radio -->
  <input type="radio" name="gender" value="male" checked> Male<br>
  <input type="radio" name="gender" value="female"> Female<br>
  <input type="radio" name="gender" value="other"> Other

  <!-- ... -->
  <!-- Lots of elements you need to write -->
</form>
```

Not just writing a lot of repeating elements, and traditional form switching preview, editing state, there is no good mechanism for unified management.

**Former**'s advantages are as follows:

### Zero learning cost

All configurations are configured with major UI component libraries with almost no learning costs.

### Unified state control

Quickly switch between preview and edit status of the form.

### Take full control

As long as you want, you can take full control of your subcomponent behavior.

If you don't understand **Former** well now, it doesn't matter. Just start using it and you will love **Former**.

**Enjoy your coding now ;)**
