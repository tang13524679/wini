// Initialize the agent at application startup.
const fpPromise = import('https://openfpcdn.io/fingerprintjs/v3').then(
    (FingerprintJS) => FingerprintJS.load()
);

// Get the visitor identifier when you need it.
fpPromise
    .then((fp) => fp.get())
    .then((result) => {
        // This is the visitor identifier:
        const visitorId = result.visitorId;
        localStorage.setItem('browserId', visitorId);
        // console.log(visitorId);
    });
