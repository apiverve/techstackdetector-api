Website Tech Stack Detector API
============

Website Tech Stack Detector identifies the technologies a website runs on, such as its CMS, ecommerce platform, JavaScript framework, analytics, CDN and hosting, with categories and a confidence score for each. Paid plans add detected versions, CPE identifiers and a rendered mode that runs the page's JavaScript.


[![NuGet version](https://img.shields.io/nuget/v/APIVerve.API.WebsiteTechStackDetector.svg)](https://www.nuget.org/packages/APIVerve.API.WebsiteTechStackDetector)

This is a .NET wrapper for the [Website Tech Stack Detector API](https://apiverve.com/marketplace/techstackdetector?utm_source=nuget&utm_medium=referral&utm_content=readme)

---

## Installation

Using the .NET CLI:
```
dotnet add package APIVerve.API.WebsiteTechStackDetector
```

Using the Package Manager:
```
nuget install APIVerve.API.WebsiteTechStackDetector
```

Using the Package Manager Console:
```
Install-Package APIVerve.API.WebsiteTechStackDetector
```

From within Visual Studio:

1. Open the Solution Explorer
2. Right-click on a project within your solution
3. Click on Manage NuGet Packages
4. Click on the Browse tab and search for "APIVerve.API.WebsiteTechStackDetector"
5. Click on the APIVerve.API.WebsiteTechStackDetector package, select the appropriate version in the right-tab and click Install

---

## Configuration

Before using the Website Tech Stack Detector API client, you have to setup your account and obtain your API Key.
You can get it by signing up at [https://apiverve.com](https://apiverve.com?utm_source=nuget&utm_medium=referral&utm_content=readme)

---

## Quick Start

Here's a simple example to get you started quickly:

```csharp
using System;
using APIVerve.API.WebsiteTechStackDetector;

class Program
{
    static async Task Main(string[] args)
    {
        // Initialize the API client
        var apiClient = new WebsiteTechStackDetectorAPIClient("[YOUR_API_KEY]");

        var queryOptions = new WebsiteTechStackDetectorQueryOptions {
            Url = "https://wordpress.org",
            Render = true
        };

        // Make the API call
        try
        {
            var response = await apiClient.ExecuteAsync(queryOptions);

            if (response.Error != null)
            {
                Console.WriteLine($"API Error: {response.Error}");
            }
            else
            {
                Console.WriteLine("Success!");
                // Access response data using the strongly-typed ResponseObj properties
                Console.WriteLine(Newtonsoft.Json.JsonConvert.SerializeObject(response, Newtonsoft.Json.Formatting.Indented));
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Exception: {ex.Message}");
        }
    }
}
```

---

## Usage

The Website Tech Stack Detector API documentation is found here: [https://docs.apiverve.com/ref/techstackdetector](https://docs.apiverve.com/ref/techstackdetector?utm_source=nuget&utm_medium=referral&utm_content=readme).
You can find parameters, example responses, and status codes documented here.

### Setup

###### Authentication
Website Tech Stack Detector API uses API Key-based authentication. When you create an instance of the API client, you can pass your API Key as a parameter.

```csharp
// Create an instance of the API client
var apiClient = new WebsiteTechStackDetectorAPIClient("[YOUR_API_KEY]");
```

---

## Usage Examples

### Basic Usage (Async/Await Pattern - Recommended)

The modern async/await pattern provides the best performance and code readability:

```csharp
using System;
using System.Threading.Tasks;
using APIVerve.API.WebsiteTechStackDetector;

public class Example
{
    public static async Task Main(string[] args)
    {
        var apiClient = new WebsiteTechStackDetectorAPIClient("[YOUR_API_KEY]");

        var queryOptions = new WebsiteTechStackDetectorQueryOptions {
            Url = "https://wordpress.org",
            Render = true
        };

        var response = await apiClient.ExecuteAsync(queryOptions);

        if (response.Error != null)
        {
            Console.WriteLine($"Error: {response.Error}");
        }
        else
        {
            Console.WriteLine(Newtonsoft.Json.JsonConvert.SerializeObject(response, Newtonsoft.Json.Formatting.Indented));
        }
    }
}
```

### Synchronous Usage

If you need to use synchronous code, you can use the `Execute` method:

```csharp
using System;
using APIVerve.API.WebsiteTechStackDetector;

public class Example
{
    public static void Main(string[] args)
    {
        var apiClient = new WebsiteTechStackDetectorAPIClient("[YOUR_API_KEY]");

        var queryOptions = new WebsiteTechStackDetectorQueryOptions {
            Url = "https://wordpress.org",
            Render = true
        };

        var response = apiClient.Execute(queryOptions);

        if (response.Error != null)
        {
            Console.WriteLine($"Error: {response.Error}");
        }
        else
        {
            Console.WriteLine(Newtonsoft.Json.JsonConvert.SerializeObject(response, Newtonsoft.Json.Formatting.Indented));
        }
    }
}
```

---

## Error Handling

The API client provides comprehensive error handling. Here are some examples:

### Handling API Errors

```csharp
using System;
using System.Threading.Tasks;
using APIVerve.API.WebsiteTechStackDetector;

public class Example
{
    public static async Task Main(string[] args)
    {
        var apiClient = new WebsiteTechStackDetectorAPIClient("[YOUR_API_KEY]");

        var queryOptions = new WebsiteTechStackDetectorQueryOptions {
            Url = "https://wordpress.org",
            Render = true
        };

        try
        {
            var response = await apiClient.ExecuteAsync(queryOptions);

            // Check for API-level errors
            if (response.Error != null)
            {
                Console.WriteLine($"API Error: {response.Error}");
                Console.WriteLine($"Status: {response.Status}");
                return;
            }

            // Success - use the data
            Console.WriteLine("Request successful!");
            Console.WriteLine(Newtonsoft.Json.JsonConvert.SerializeObject(response, Newtonsoft.Json.Formatting.Indented));
        }
        catch (ArgumentException ex)
        {
            // Invalid API key or parameters
            Console.WriteLine($"Invalid argument: {ex.Message}");
        }
        catch (System.Net.Http.HttpRequestException ex)
        {
            // Network or HTTP errors
            Console.WriteLine($"Network error: {ex.Message}");
        }
        catch (Exception ex)
        {
            // Other errors
            Console.WriteLine($"Unexpected error: {ex.Message}");
        }
    }
}
```

### Comprehensive Error Handling with Retry Logic

```csharp
using System;
using System.Threading.Tasks;
using APIVerve.API.WebsiteTechStackDetector;

public class Example
{
    public static async Task Main(string[] args)
    {
        var apiClient = new WebsiteTechStackDetectorAPIClient("[YOUR_API_KEY]");

        // Configure retry behavior (max 3 retries)
        apiClient.SetMaxRetries(3);        // Retry up to 3 times (default: 0, max: 3)
        apiClient.SetRetryDelay(2000);     // Wait 2 seconds between retries

        var queryOptions = new WebsiteTechStackDetectorQueryOptions {
            Url = "https://wordpress.org",
            Render = true
        };

        try
        {
            var response = await apiClient.ExecuteAsync(queryOptions);

            if (response.Error != null)
            {
                Console.WriteLine($"API Error: {response.Error}");
            }
            else
            {
                Console.WriteLine("Success!");
                Console.WriteLine(Newtonsoft.Json.JsonConvert.SerializeObject(response, Newtonsoft.Json.Formatting.Indented));
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Failed after retries: {ex.Message}");
        }
    }
}
```

---

## Advanced Features

### Custom Headers

Add custom headers to your requests:

```csharp
var apiClient = new WebsiteTechStackDetectorAPIClient("[YOUR_API_KEY]");

// Add custom headers
apiClient.AddCustomHeader("X-Custom-Header", "custom-value");
apiClient.AddCustomHeader("X-Request-ID", Guid.NewGuid().ToString());

var queryOptions = new WebsiteTechStackDetectorQueryOptions {
    Url = "https://wordpress.org",
    Render = true
};

var response = await apiClient.ExecuteAsync(queryOptions);

// Remove a header
apiClient.RemoveCustomHeader("X-Custom-Header");

// Clear all custom headers
apiClient.ClearCustomHeaders();
```

### Request Logging

Enable logging for debugging:

```csharp
var apiClient = new WebsiteTechStackDetectorAPIClient("[YOUR_API_KEY]", isDebug: true);

// Or use a custom logger
apiClient.SetLogger(message =>
{
    Console.WriteLine($"[LOG] {DateTime.Now:yyyy-MM-dd HH:mm:ss} - {message}");
});

var queryOptions = new WebsiteTechStackDetectorQueryOptions {
    Url = "https://wordpress.org",
    Render = true
};

var response = await apiClient.ExecuteAsync(queryOptions);
```

### Retry Configuration

Customize retry behavior for failed requests:

```csharp
var apiClient = new WebsiteTechStackDetectorAPIClient("[YOUR_API_KEY]");

// Set retry options
apiClient.SetMaxRetries(3);           // Retry up to 3 times (default: 0, max: 3)
apiClient.SetRetryDelay(1500);        // Wait 1.5 seconds between retries (default: 1000ms)

var queryOptions = new WebsiteTechStackDetectorQueryOptions {
    Url = "https://wordpress.org",
    Render = true
};

var response = await apiClient.ExecuteAsync(queryOptions);
```

### Dispose Pattern

The API client implements `IDisposable` for proper resource cleanup:

```csharp
var queryOptions = new WebsiteTechStackDetectorQueryOptions {
    Url = "https://wordpress.org",
    Render = true
};

using (var apiClient = new WebsiteTechStackDetectorAPIClient("[YOUR_API_KEY]"))
{
    var response = await apiClient.ExecuteAsync(queryOptions);
    Console.WriteLine(Newtonsoft.Json.JsonConvert.SerializeObject(response, Newtonsoft.Json.Formatting.Indented));
}
// HttpClient is automatically disposed here
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

Need any assistance? [Get in touch with Customer Support](https://apiverve.com/contact?utm_source=nuget&utm_medium=referral&utm_content=readme).

---

## Updates
Stay up to date by following [@apiverveHQ](https://twitter.com/apiverveHQ) on Twitter.

---

## Legal

All usage of the APIVerve website, API, and services is subject to the [APIVerve Terms of Service](https://apiverve.com/terms?utm_source=nuget&utm_medium=referral&utm_content=readme) and all legal documents and agreements.

---

## License
Licensed under the MIT License (MIT)

Copyright (&copy;) 2026 APIVerve, and EvlarSoft LLC

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
