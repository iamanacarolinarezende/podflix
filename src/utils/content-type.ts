export enum ContentType {
    JSON = "application/json",                     // Structured data in JSON format
    FORM_URLENCODED = "application/x-www-form-urlencoded", // Form data sent via POST
    FORM_DATA = "multipart/form-data",             // File uploads via forms
    TEXT = "text/plain",                           // Plain text
    HTML = "text/html",                            // HTML pages
    CSS = "text/css",                              // CSS files
    JAVASCRIPT = "application/javascript",         // JavaScript files
    XML = "application/xml",                       // XML data
    CSV = "text/csv",                              // CSV files
    PDF = "application/pdf",                       // PDF files
    ZIP = "application/zip",                       // ZIP compressed files
    PNG = "image/png",                             // PNG image
    JPEG = "image/jpeg",                           // JPEG image
    GIF = "image/gif",                             // GIF image
    SVG = "image/svg+xml",                         // SVG image
    MP3 = "audio/mpeg",                            // MP3 audio
    MP4 = "video/mp4",                             // MP4 video
}
