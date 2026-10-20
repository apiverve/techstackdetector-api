Website Tech Stack Detector API
============

Website Tech Stack Detector identifies the technologies a website runs on, such as its CMS, ecommerce platform, JavaScript framework, analytics, CDN and hosting, with categories and a confidence score for each. Paid plans add detected versions, CPE identifiers and a rendered mode that runs the page's JavaScript.


[![PyPI version](https://img.shields.io/pypi/v/apiverve-websitetechstackdetector.svg)](https://pypi.org/project/apiverve-websitetechstackdetector/)

This is a Python wrapper for the [Website Tech Stack Detector API](https://apiverve.com/marketplace/techstackdetector?utm_source=pypi&utm_medium=referral&utm_content=readme)

---

## Installation

Using `pip`:

```bash
pip install apiverve-websitetechstackdetector
```

Using `pip3`:

```bash
pip3 install apiverve-websitetechstackdetector
```

---

## Configuration

Before using the Website Tech Stack Detector API client, you have to setup your account and obtain your API Key.
You can get it by signing up at [https://apiverve.com](https://apiverve.com?utm_source=pypi&utm_medium=referral&utm_content=readme)

---

## Quick Start

Here's a simple example to get you started quickly:

```python
from apiverve_websitetechstackdetector.apiClient import TechstackdetectorAPIClient

# Initialize the client with your APIVerve API key
api = TechstackdetectorAPIClient("[YOUR_API_KEY]")

query = {
    "url": "https://wordpress.org",
    "render": true
}

try:
    # Make the API call
    result = api.execute(query)

    # Print the result
    print(result)
except Exception as e:
    print(f"Error: {e}")
```

---

## Usage

The Website Tech Stack Detector API documentation is found here: [https://docs.apiverve.com/ref/techstackdetector](https://docs.apiverve.com/ref/techstackdetector?utm_source=pypi&utm_medium=referral&utm_content=readme).
You can find parameters, example responses, and status codes documented here.

### Setup

```python
# Import the client module
from apiverve_websitetechstackdetector.apiClient import TechstackdetectorAPIClient

# Initialize the client with your APIVerve API key
api = TechstackdetectorAPIClient("[YOUR_API_KEY]")
```

---

## Perform Request

Using the API client, you can perform requests to the API.

###### Define Query

```python
query = {
    "url": "https://wordpress.org",
    "render": true
}
```

###### Simple Request

```python
# Make a request to the API
result = api.execute(query)

# Print the result
print(result)
```

###### Example Response

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

## Error Handling

The API client provides comprehensive error handling through the `TechstackdetectorAPIClientError` exception. Here are some examples:

### Basic Error Handling

```python
from apiverve_websitetechstackdetector.apiClient import TechstackdetectorAPIClient, TechstackdetectorAPIClientError

api = TechstackdetectorAPIClient("[YOUR_API_KEY]")

query = {
    "url": "https://wordpress.org",
    "render": true
}

try:
    result = api.execute(query)
    print("Success!")
    print(result)
except TechstackdetectorAPIClientError as e:
    print(f"API Error: {e.message}")
    if e.status_code:
        print(f"Status Code: {e.status_code}")
    if e.response:
        print(f"Response: {e.response}")
```

### Handling Specific Error Types

```python
from apiverve_websitetechstackdetector.apiClient import TechstackdetectorAPIClient, TechstackdetectorAPIClientError

api = TechstackdetectorAPIClient("[YOUR_API_KEY]")

query = {
    "url": "https://wordpress.org",
    "render": true
}

try:
    result = api.execute(query)

    # Check for successful response
    if result.get('status') == 'success':
        print("Request successful!")
        print(result.get('data'))
    else:
        print(f"API returned an error: {result.get('error')}")

except TechstackdetectorAPIClientError as e:
    # Handle API client errors
    if e.status_code == 401:
        print("Unauthorized: Invalid API key")
    elif e.status_code == 429:
        print("Rate limit exceeded")
    elif e.status_code >= 500:
        print("Server error - please try again later")
    else:
        print(f"API error: {e.message}")
except Exception as e:
    # Handle unexpected errors
    print(f"Unexpected error: {str(e)}")
```

### Using Context Manager (Recommended)

The client supports the context manager protocol for automatic resource cleanup:

```python
from apiverve_websitetechstackdetector.apiClient import TechstackdetectorAPIClient, TechstackdetectorAPIClientError

query = {
    "url": "https://wordpress.org",
    "render": true
}

# Using context manager ensures proper cleanup
with TechstackdetectorAPIClient("[YOUR_API_KEY]") as api:
    try:
        result = api.execute(query)
        print(result)
    except TechstackdetectorAPIClientError as e:
        print(f"Error: {e.message}")
# Session is automatically closed here
```

---

## Advanced Features

### Debug Mode

Enable debug logging to see detailed request and response information:

```python
from apiverve_websitetechstackdetector.apiClient import TechstackdetectorAPIClient

# Enable debug mode
api = TechstackdetectorAPIClient("[YOUR_API_KEY]", debug=True)

query = {
    "url": "https://wordpress.org",
    "render": true
}

# Debug information will be printed to console
result = api.execute(query)
```

### Manual Session Management

If you need to manually manage the session lifecycle:

```python
from apiverve_websitetechstackdetector.apiClient import TechstackdetectorAPIClient

api = TechstackdetectorAPIClient("[YOUR_API_KEY]")

query = {
    "url": "https://wordpress.org",
    "render": true
}

try:
    result = api.execute(query)
    print(result)
finally:
    # Manually close the session when done
    api.close()
```

---

## Customer Support

Need any assistance? [Get in touch with Customer Support](https://apiverve.com/contact?utm_source=pypi&utm_medium=referral&utm_content=readme).

---

## Updates
Stay up to date by following [@apiverveHQ](https://twitter.com/apiverveHQ) on Twitter.

---

## Legal

All usage of the APIVerve website, API, and services is subject to the [APIVerve Terms of Service](https://apiverve.com/terms?utm_source=pypi&utm_medium=referral&utm_content=readme) and all legal documents and agreements.

---

## License
Licensed under the MIT License (MIT)

Copyright (&copy;) 2026 APIVerve, and EvlarSoft LLC

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
