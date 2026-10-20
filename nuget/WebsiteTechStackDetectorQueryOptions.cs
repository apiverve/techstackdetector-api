using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace APIVerve.API.WebsiteTechStackDetector
{
    /// <summary>
    /// Query options for the Website Tech Stack Detector API
    /// </summary>
    public class WebsiteTechStackDetectorQueryOptions
    {
        /// <summary>
        /// The URL of the website to analyze
        /// </summary>
        [JsonProperty("url")]
        public string Url { get; set; }

        /// <summary>
        /// Load the page in a headless browser first, to find technologies added by JavaScript and read JavaScript globals. Slower
        /// </summary>
        [JsonProperty("render")]
        public bool? Render { get; set; }
    }
}
