export enum HttpMethod {
    GET = "GET",          // Retrieves data from the server
    POST = "POST",        // Sends new data to the server
    PUT = "PUT",          // Updates an entire resource
    PATCH = "PATCH",      // Partially updates a resource
    DELETE = "DELETE",    // Removes a resource
    HEAD = "HEAD",        // Returns only the headers, without the response body
    OPTIONS = "OPTIONS"   // Determines which methods and operations are supported by the server
}
