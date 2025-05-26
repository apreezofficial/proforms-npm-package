---

# ProStore Form Handler

![MIT License](https://img.shields.io/badge/license-MIT-green.svg)
![TypeScript](https://img.shields.io/badge/Built%20With-TypeScript-blue.svg)
![AJAX](https://img.shields.io/badge/AJAX-Compatible-orange.svg)

**ProStore** is a lightweight, advanced, and customizable AJAX form handler that submits data to [ProForms](https://proforms.ng) with style. Supports smooth redirection, custom callbacks, loaders, and is integration-ready for any frontend or backend stack.

---

## Features

- Lightweight and fast
- Written in TypeScript
- Smart redirect handling
- Custom success/error callbacks
- Optional loaders
- Fully framework-agnostic
- Secure POST with `X-Requested-With` headers

---

## Installation

---

## Quick Start

### 1. Basic HTML Usage

```html
<form action="https://app.proforms.ng/f/YOUR_API_KEY" method="POST">
  <input type="text" name="name" placeholder="Your Name" required />
  <input type="email" name="email" placeholder="Your Email" required />
  <button type="submit">Send</button>
</form>
```
---
```
TypeScript

import { prostore } from "prostore";

prostore("contactForm", {
  apiKey: "your-api-key",
  onSuccess: (res) => console.log("Success:", res),
  onError: (err) => console.error("Error:", err),
});

```
---
```
React

import { useEffect } from "react";
import { prostore } from "prostore";

export default function ContactForm() {
  useEffect(() => {
    prostore("reactForm", {
      apiKey: "your-api-key",
      onSuccess: () => alert("Success"),
      onError: () => alert("Error"),
    });
  }, []);

  return (
    <form id="reactForm">
      <input name="name" />
      <button type="submit">Send</button>
    </form>
  );
}
```

---
```
Vue.js (Composition API)

<template>
  <form id="vueForm">
    <input name="email" />
    <button>Submit</button>
  </form>
</template>

<script setup>
import { onMounted } from 'vue';
import { prostore } from 'prostore';

onMounted(() => {
  prostore("vueForm", {
    apiKey: "your-api-key",
    onSuccess: (data) => alert("Success"),
    onError: (err) => alert(err)
  });
});
</script>

```
---
```
Angular

import { Component, AfterViewInit } from '@angular/core';
import { prostore } from 'prostore';

@Component({
  selector: 'app-form',
  template: `
    <form id="angularForm">
      <input name="name" />
      <button>Submit</button>
    </form>
  `
})
export class FormComponent implements AfterViewInit {
  ngAfterViewInit() {
    prostore("angularForm", {
      apiKey: "your-api-key",
      onSuccess: (res) => console.log(res),
      onError: (err) => alert(err)
    });
  }
}

```
---
```
PHP (HTML Output with ProStore JavaScript)

<form id="phpForm">
  <input name="email" />
  <button>Submit</button>
</form>

<script>
  prostore("phpForm", {
    apiKey: "your-api-key",
    onSuccess: () => alert("Success from PHP Form"),
    onError: (msg) => alert("Error: " + msg)
  });
</script>
```

---
```
Python Flask (HTML Template + JS)

# app.py
from flask import Flask, render_template
app = Flask(__name__)

@app.route("/")
def index():
    return render_template("form.html")

<!-- templates/form.html -->
<form id="flaskForm">
  <input name="email" />
  <button>Submit</button>
</form>

<script type="module">
  import { prostore } from '/static/prostore.js';

  prostore("flaskForm", {
    apiKey: "your-api-key",
    onSuccess: () => alert("Flask Success"),
    onError: (err) => alert(err)
  });
</script>

```
---

ProformOptions (API)

Option	Type	Description

apiKey	string	Your unique ProForms API key
onSuccess	(data: object) => void	Callback on successful response
onError	(message: string) => void	Callback on failed request or response
showLoader	() => void	Function to show custom loader
hideLoader	() => void	Function to hide custom loader



---

License

MIT License © Precious Adedokun & Onos Ejoor


---

Support

For feature requests, issues, or collaboration, open an Issue or contact @apcodesphere.


---

> Built with passion and pro-level smoothness by APCodeSphere & Team.

