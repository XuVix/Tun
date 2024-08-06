addEventListener(
  "fetch", event => {
      let url = new URL(event.request.url);
      url.hostname = "uk.tablosefid.ir";                        
      url.protocol = "https";
      url.port = "2087";
      let request = new Request(url, event.request);
      event.respondWith(
          fetch(request)
      )
  }
)