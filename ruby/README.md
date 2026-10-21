# Website Tech Stack Detector API - Ruby Gem

Website Tech Stack Detector identifies the technologies a website runs on, such as its CMS, ecommerce platform, JavaScript framework, analytics, CDN and hosting, with categories and a confidence score for each. Paid plans add detected versions, CPE identifiers and a rendered mode that runs the page's JavaScript.

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'apiverve_techstackdetector'
```

And then execute:

```bash
$ bundle install
```

Or install it yourself as:

```bash
$ gem install apiverve_techstackdetector
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```ruby
require 'apiverve_techstackdetector'

# Initialize the client
client = APIVerve::Techstackdetector::Client.new(api_key: "YOUR_API_KEY")

# Make a request
response = client.execute({
  url: "https://wordpress.org",
  render: true
})

# Print the response
puts response
```


### Error Handling

```ruby
begin
  response = client.execute({ url: "https://wordpress.org", render: true })
  puts response["data"]
rescue APIVerve::Techstackdetector::ValidationError => e
  puts "Validation error: #{e.errors.join(', ')}"
rescue APIVerve::Techstackdetector::APIError => e
  puts "API error: #{e.message}"
  puts "Status code: #{e.status_code}"
end
```

### Debug Mode

```ruby
# Enable debug logging
client = APIVerve::Techstackdetector::Client.new(
  api_key: "YOUR_API_KEY",
  debug: true
)
```

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

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/techstackdetector?utm_source=rubygems&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/techstackdetector?utm_source=ruby&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/techstackdetector?utm_source=ruby&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This gem is available under the [MIT License](LICENSE).
