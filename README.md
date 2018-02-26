# djtest

This is a minimal project usong both descjop and re-frame. It also includes a call to a json server to implement an easy link to a clojure backend. It expects the call to api-root/projects to return some json. Without this, clicking the fetch projects button will fail, possibly crashing the electron app. Otherwise it should work and provides a simple example of how to integrate descjop and re-frame. There is also an org-mode file with most of the details of how I created this, starting by running lein new descjop.

