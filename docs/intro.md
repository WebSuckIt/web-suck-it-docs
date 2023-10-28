---
sidebar_position: 1
slug: /
---

# Getting started

Welcome to WebSuckIt, where we offer an innovative approach to integrating socket connections with ease and simplicity, empowering you to achieve your goals with confidence.

This guide shows you how to integrate WebSuckIt into an appkuication.

You'll learn how to:
- Include the WebSuckIt SDK in a project.
- Establish a realtime connection to WebSuckIt.
- Create & Subscribe to a channel.

## Create a WebSuckIt account

[Sign up](https://websuckit.com/signup) for a free account to get your own keys. To get your User Keys, from the Websocket API page, hover on the **Account** button in the top right corner of the page. Then, click the **User Keys** button.

### What you'll need

- [Node.js](https://nodejs.org/en/download/) version 16.14 or above:
  - When installing Node.js, it's recommended to check all checkboxes related to dependencies.

## Add the WebSuckIt SDK
> **Note**
> The JavaScript SDK can be used with any frameworks of your choice.
The WebSuckIt SDK is available via CDN.

To get started with your project, reference the SDK within the `<head>` of an HTML page:

```bash
<script src="https://unpkg.com/@websuckit/js/dist/websuckit.umd.js"></script>
```