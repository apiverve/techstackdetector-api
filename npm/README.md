# Website Tech Stack Detector API

Website Tech Stack Detector identifies the technologies a website runs on, such as its CMS, ecommerce platform, JavaScript framework, analytics, CDN and hosting, with categories and a confidence score for each. Paid plans add detected versions, CPE identifiers and a rendered mode that runs the page's JavaScript.

[![npm version](https://img.shields.io/npm/v/@apiverve/techstackdetector.svg)](https://www.npmjs.com/package/@apiverve/techstackdetector)

This is a JavaScript wrapper for the [Website Tech Stack Detector API](https://apiverve.com/marketplace/techstackdetector?utm_source=npm&utm_medium=referral&utm_content=readme)

---

## Installation

Using npm:
```shell
npm install @apiverve/techstackdetector
```

Using yarn:
```shell
yarn add @apiverve/techstackdetector
```

---

## Configuration

Before using the Website Tech Stack Detector API client, you have to setup your account and obtain your API Key.
You can get it by signing up at [https://apiverve.com](https://apiverve.com?utm_source=npm&utm_medium=referral&utm_content=readme)

---

## Quick Start

[Get started with the Quick Start Guide](https://docs.apiverve.com/quickstart?utm_source=npm&utm_medium=referral&utm_content=readme)

The Website Tech Stack Detector API documentation is found here: [https://docs.apiverve.com/ref/techstackdetector](https://docs.apiverve.com/ref/techstackdetector?utm_source=npm&utm_medium=referral&utm_content=readme).
You can find parameters, example responses, and status codes documented here.

### Setup

```javascript
const techstackdetectorAPI = require('@apiverve/techstackdetector');
const api = new techstackdetectorAPI({
    api_key: '[YOUR_API_KEY]'
});
```

---

## Usage

---

### Perform Request

Using the API is simple. All you have to do is make a request. The API will return a response with the data you requested.

```javascript
var query = {
  url: "https://wordpress.org",
  render: false
};

api.execute(query, function (error, data) {
    if (error) {
        return console.error(error);
    } else {
        console.log(data);
    }
});
```

---

### Using Promises

You can also use promises to make requests. The API returns a promise that you can use to handle the response.

```javascript
var query = {
  url: "https://wordpress.org",
  render: false
};

api.execute(query)
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });
```

---

### Using Async/Await

You can also use async/await to make requests. The API returns a promise that you can use to handle the response.

```javascript
async function makeRequest() {
    var query = {
  url: "https://wordpress.org",
  render: false
};

    try {
        const data = await api.execute(query);
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
```

---

## Example Response

```json
{
  "status": "ok",
  "error": null,
  "data": {
    "url": "https://wordpress.org/",
    "finalUrl": "https://wordpress.org/",
    "statusCode": 200,
    "mode": "static",
    "technologyCount": 13,
    "technologies": [
      {
        "name": "WordPress",
        "slug": "wordpress",
        "categories": [
          "CMS",
          "Blogs"
        ],
        "version": "7.2",
        "confidence": 100,
        "implied": false,
        "detectedBy": [
          "html",
          "scriptSrc",
          "scripts",
          "headers",
          "meta",
          "dom"
        ],
        "website": "https://wordpress.org",
        "icon": "WordPress.svg",
        "description": "WordPress is a free and open-source content management system written in PHP and paired with a MySQL or MariaDB database. Features include a plugin architecture and a template system.",
        "cpe": "cpe:2.3:a:wordpress:wordpress:*:*:*:*:*:*:*:*"
      },
      {
        "name": "WordPress Block Editor",
        "slug": "wordpress-block-editor",
        "categories": [
          "Page builders"
        ],
        "version": null,
        "confidence": 100,
        "implied": false,
        "detectedBy": [
          "html"
        ],
        "website": "https://wordpress.org/gutenberg/",
        "icon": "WordPress.svg",
        "description": "Sites using the WordPress Block Editor, also known as Gutenberg.",
        "cpe": null
      },
      {
        "name": "WordPress Site Editor",
        "slug": "wordpress-site-editor",
        "categories": [
          "Page builders"
        ],
        "version": null,
        "confidence": 100,
        "implied": false,
        "detectedBy": [
          "html"
        ],
        "website": "https://wordpress.org/documentation/article/site-editor/",
        "icon": "WordPress.svg",
        "description": "Full Site Editing enables users to design and customize their entire WordPress website with a block-based editor.",
        "cpe": null
      },
      {
        "name": "Gutenberg",
        "slug": "gutenberg",
        "categories": [
          "WordPress plugins",
          "Editors"
        ],
        "version": "24.2.0",
        "confidence": 100,
        "implied": false,
        "detectedBy": [
          "scriptSrc",
          "dom"
        ],
        "website": "https://github.com/WordPress/gutenberg",
        "icon": "Gutenberg.png",
        "description": "Gutenberg is the code name for the new block based editor introduced in WordPress 5.",
        "cpe": null
      },
      {
        "name": "MySQL",
        "slug": "mysql",
        "categories": [
          "Databases"
        ],
        "version": null,
        "confidence": 100,
        "implied": true,
        "detectedBy": [],
        "website": "https://mysql.com",
        "icon": "MySQL.svg",
        "description": "MySQL is an open-source relational database management system.",
        "cpe": "cpe:2.3:a:mysql:mysql:*:*:*:*:*:*:*:*"
      },
      {
        "name": "PHP",
        "slug": "php",
        "categories": [
          "Programming languages"
        ],
        "version": null,
        "confidence": 100,
        "implied": false,
        "detectedBy": [
          "scripts"
        ],
        "website": "https://php.net",
        "icon": "PHP.svg",
        "description": "PHP is a general-purpose scripting language used for web development.",
        "cpe": "cpe:2.3:a:php:php:*:*:*:*:*:*:*:*"
      },
      {
        "name": "Nginx",
        "slug": "nginx",
        "categories": [
          "Web servers",
          "Reverse proxies"
        ],
        "version": null,
        "confidence": 100,
        "implied": false,
        "detectedBy": [
          "headers"
        ],
        "website": "https://nginx.org/en",
        "icon": "Nginx.svg",
        "description": "Nginx is a web server that can also be used as a reverse proxy, load balancer, mail proxy and HTTP cache.",
        "cpe": "cpe:2.3:a:f5:nginx:*:*:*:*:*:*:*:*"
      },
      {
        "name": "Google Font API",
        "slug": "google-font-api",
        "categories": [
          "Font scripts"
        ],
        "version": null,
        "confidence": 100,
        "implied": false,
        "detectedBy": [
          "dom"
        ],
        "website": "https://fonts.google.com/",
        "icon": "Google Font API.svg",
        "description": "Google Font API is a web service that supports open-source font files that can be used on your web designs.",
        "cpe": null
      },
      {
        "name": "Google Tag Manager",
        "slug": "google-tag-manager",
        "categories": [
          "Tag managers"
        ],
        "version": null,
        "confidence": 100,
        "implied": false,
        "detectedBy": [
          "html"
        ],
        "website": "https://www.google.com/tagmanager",
        "icon": "Google Tag Manager.svg",
        "description": "Google Tag Manager is a tag management system (TMS) that allows you to quickly and easily update measurement codes and related code fragments collectively known as tags on your website or mobile app.",
        "cpe": null
      },
      {
        "name": "HSTS",
        "slug": "hsts",
        "categories": [
          "Security"
        ],
        "version": null,
        "confidence": 100,
        "implied": false,
        "detectedBy": [
          "headers"
        ],
        "website": "https://www.rfc-editor.org/rfc/rfc6797#section-6.1",
        "icon": null,
        "description": "HTTP Strict Transport Security (HSTS) informs browsers that the site should only be accessed using HTTPS.",
        "cpe": null
      },
      {
        "name": "Priority Hints",
        "slug": "priority-hints",
        "categories": [
          "Performance"
        ],
        "version": null,
        "confidence": 100,
        "implied": false,
        "detectedBy": [
          "dom"
        ],
        "website": "https://wicg.github.io/priority-hints/",
        "icon": "Priority Hints.svg",
        "description": "Priority Hints exposes a mechanism for developers to signal a relative priority for browsers to consider when fetching resources.",
        "cpe": null
      },
      {
        "name": "Open Graph",
        "slug": "open-graph",
        "categories": [
          "Miscellaneous"
        ],
        "version": null,
        "confidence": 100,
        "implied": false,
        "detectedBy": [
          "dom"
        ],
        "website": "https://ogp.me",
        "icon": "Open Graph.svg",
        "description": "Open Graph is a protocol that is used to integrate any web page into the social graph.",
        "cpe": null
      },
      {
        "name": "RSS",
        "slug": "rss",
        "categories": [
          "Miscellaneous"
        ],
        "version": null,
        "confidence": 100,
        "implied": false,
        "detectedBy": [
          "dom"
        ],
        "website": "https://www.rssboard.org/rss-specification",
        "icon": "RSS.svg",
        "description": "RSS is a family of web feed formats used to publish frequently updated works—such as blog entries, news headlines, audio, and video—in a standardized format.",
        "cpe": null
      }
    ],
    "fingerprintsUpdatedAt": "2026-10-19T01:59:39.005Z"
  }
}
```

---

## Customer Support

Need any assistance? [Get in touch with Customer Support](https://apiverve.com/contact?utm_source=npm&utm_medium=referral&utm_content=readme).

---

## Updates

Stay up to date by following [@apiverveHQ](https://twitter.com/apiverveHQ) on Twitter.

---

## Legal

All usage of the APIVerve website, API, and services is subject to the [APIVerve Terms of Service](https://apiverve.com/terms?utm_source=npm&utm_medium=referral&utm_content=readme) and [Privacy Policy](https://apiverve.com/privacy?utm_source=npm&utm_medium=referral&utm_content=readme).

---

## License
Licensed under the MIT License (MIT)

Copyright (&copy;) 2026 APIVerve, and EvlarSoft LLC

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
