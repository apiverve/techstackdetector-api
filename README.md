# [Website Tech Stack Detector API](https://apiverve.com/marketplace/techstackdetector?utm_source&#x3D;github&amp;utm_medium&#x3D;referral&amp;utm_content&#x3D;readme)

Website Tech Stack Detector identifies the technologies a website runs on, such as its CMS, ecommerce platform, JavaScript framework, analytics, CDN and hosting, with categories and a confidence score for each. Paid plans add detected versions, CPE identifiers and a rendered mode that runs the page&#x27;s JavaScript.

The Website Tech Stack Detector API provides a simple, reliable way to integrate website tech stack detector functionality into your applications. Built for developers who need production-ready website tech stack detector capabilities without the complexity of building from scratch.

**[View API Details →](https://apiverve.com/marketplace/techstackdetector?utm_source&#x3D;github&amp;utm_medium&#x3D;referral&amp;utm_content&#x3D;readme)**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![API Status](https://img.shields.io/badge/Status-Active-green.svg)](https://apiverve.com/marketplace/techstackdetector?utm_source&#x3D;github&amp;utm_medium&#x3D;referral&amp;utm_content&#x3D;readme)
[![Method](https://img.shields.io/badge/Method-GET-blue.svg)](#)
[![Platform](https://img.shields.io/badge/Platform-Multi--Platform-orange.svg)](#installation)

**Available on:**
[![npm](https://img.shields.io/badge/npm-CB3837?style=flat&logo=npm&logoColor=white)](https://www.npmjs.com/package/@apiverve/techstackdetector)
[![NuGet](https://img.shields.io/badge/NuGet-004880?style=flat&logo=nuget&logoColor=white)](https://www.nuget.org/packages/APIVerve.API.WebsiteTechStackDetector)
[![PyPI](https://img.shields.io/badge/PyPI-3776AB?style=flat&logo=python&logoColor=white)](https://pypi.org/project/apiverve-techstackdetector/)
[![RubyGems](https://img.shields.io/badge/RubyGems-E9573F?style=flat&logo=rubygems&logoColor=white)](https://rubygems.org/gems/apiverve_techstackdetector)
[![Packagist](https://img.shields.io/badge/Packagist-F28D1A?style=flat&logo=packagist&logoColor=white)](https://packagist.org/packages/apiverve/techstackdetector)
[![Go](https://img.shields.io/badge/Go-00ADD8?style=flat&logo=go&logoColor=white)](#-go)
[![Dart](https://img.shields.io/badge/Dart-0175C2?style=flat&logo=dart&logoColor=white)](https://pub.dev/packages/apiverve_techstackdetector)
[![JitPack](https://img.shields.io/badge/JitPack-2E7D32?style=flat&logo=android&logoColor=white)](#-android-jitpack)

---

## Quick Start

### Using JavaScript

```javascript
async function callWebsiteTechStackDetectorAPI() {
    try {
        const params = new URLSearchParams({
            url: 'https://wordpress.org'
        });

        const response = await fetch(`https://api.apiverve.com/v1/techstackdetector?${params}`, {
            method: 'GET',
            headers: {
                'x-api-key': 'YOUR_API_KEY_HERE'
            }
        });

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

callWebsiteTechStackDetectorAPI();
```

### Using cURL

```bash
curl -X GET "https://api.apiverve.com/v1/techstackdetector?url=https%3A%2F%2Fwordpress.org" \
  -H "x-api-key: YOUR_API_KEY_HERE"
```

**Get your API key:** [https://apiverve.com](https://apiverve.com)

**📁 For more examples, see the [examples folder](./examples/)**

---

## Installation

Choose your preferred programming language:

### 📦 NPM (JavaScript/Node.js)

```bash
npm install @apiverve/techstackdetector
```

[**View NPM Package →**](https://www.npmjs.com/package/@apiverve/techstackdetector) | [**Package Code →**](./npm/)

---

### 🔷 NuGet (.NET/C#)

```bash
dotnet add package APIVerve.API.WebsiteTechStackDetector
```

[**View NuGet Package →**](https://www.nuget.org/packages/APIVerve.API.WebsiteTechStackDetector) | [**Package Code →**](./nuget/)

---

### 🐍 Python (PyPI)

```bash
pip install apiverve-techstackdetector
```

[**View PyPI Package →**](https://pypi.org/project/apiverve-techstackdetector/) | [**Package Code →**](./python/)

---

### 💎 Ruby (RubyGems)

```bash
gem install apiverve_techstackdetector
```

[**View RubyGems Package →**](https://rubygems.org/gems/apiverve_techstackdetector) | [**Package Code →**](./ruby/)

---

### 🐘 PHP (Packagist)

```bash
composer require apiverve/techstackdetector
```

[**View Packagist Package →**](https://packagist.org/packages/apiverve/techstackdetector) | [**Package Code →**](./php/)

---

### 🎯 Dart (pub.dev)

```bash
dart pub add apiverve_techstackdetector
```

[**View pub.dev Package →**](https://pub.dev/packages/apiverve_techstackdetector) | [**Package Code →**](./dart/)

---

### 🤖 Android (JitPack)

```gradle
implementation 'com.github.apiverve:techstackdetector-api:1.0.0'
```

[**Package Code →**](./android/)

---

### 🐹 Go

```bash
go get github.com/apiverve/techstackdetector-api/go
```

[**Package Code →**](./go/)

---

## Why Use This API?

| Feature | Benefit |
|---------|---------|
| **Multi-language SDKs** | Native packages for JavaScript, Python, C#, Go, and Android |
| **Simple Integration** | Single API key authentication, consistent response format |
| **Production Ready** | 99.9% uptime SLA, served from 24 global regions |
| **Comprehensive Docs** | Full examples, OpenAPI spec, and dedicated support |

---

## Documentation

- 🏠 **API Home:** [Website Tech Stack Detector API](https://apiverve.com/marketplace/techstackdetector?utm_source&#x3D;github&amp;utm_medium&#x3D;referral&amp;utm_content&#x3D;readme)
- 📚 **API Reference:** [docs.apiverve.com/ref/techstackdetector](https://docs.apiverve.com/ref/techstackdetector)
- 📖 **OpenAPI Spec:** [openapi.yaml](./openapi.yaml)
- 💡 **Examples:** [examples/](./examples/)

---

## What Can You Build?

The Website Tech Stack Detector API is commonly used for:

- **Web Applications** - Add website tech stack detector features to your frontend or backend
- **Mobile Apps** - Native SDKs for Android development
- **Automation** - Integrate with n8n, Zapier, or custom workflows
- **SaaS Products** - Enhance your product with website tech stack detector capabilities
- **Data Pipelines** - Process and analyze data at scale

---

## API Reference

### Authentication
All requests require an API key in the header:
```
x-api-key: YOUR_API_KEY_HERE
```

Get your API key: [https://apiverve.com](https://apiverve.com)

### Response Format

Every APIVerve endpoint returns the same envelope — check `status`, then read `data`:

```json
{
  "status": "ok",
  "error": null,
  "data": { ... }
}
```

### Example Response

A real response from the Website Tech Stack Detector API:

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

## Support & Community

- 🏠 **API Home**: [Website Tech Stack Detector API](https://apiverve.com/marketplace/techstackdetector?utm_source&#x3D;github&amp;utm_medium&#x3D;referral&amp;utm_content&#x3D;readme)
- 💬 **Support**: [https://apiverve.com/contact](https://apiverve.com/contact)
- 🐛 **Issues**: [GitHub Issues](../../issues)
- 📖 **Documentation**: [https://docs.apiverve.com](https://docs.apiverve.com)
- 🌐 **Website**: [https://apiverve.com](https://apiverve.com)

---

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

---

## Security

For security concerns, please review our [Security Policy](SECURITY.md).

---

## License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

Built with ❤️ by [APIVerve](https://apiverve.com)

Copyright © 2026 APIVerve. All rights reserved.
