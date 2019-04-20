import http from "k6/http"
import { check } from "k6"
import { Rate } from "k6/metrics"

export let errorRate = new Rate("errors")

export let options = {
  // A number specifying the number of Virtual Users to run concurrently
  vus: 50,
  // sampling duration
  duration: "30s",
  //   rps: 500,
  // enable to debug
  // httpDebug: 'full',
  // A boolean, true or false, specifying whether k6 should disable keep-alive connections

  // Reuse connection within the same client.. and beyond accross multiple clients (ridiculous test just to make my point)
  noConnectionReuse: false,
  noVUConnectionReuse: false,

  // used for errors
  thresholds: {
    errors: ["rate<0.05"] // <5% errors
  }
}

export default function() {
  const url = "http://localhost:9001"
  const payload = ""
  const params = { headers: { "Content-Type": "application/json" } }
  const res = http.get(url, payload, params)

  check(res, {
    "Status was 200": r => r.status == 200,
    "It returns HelloWorld": r => r.body == "Hello World!"
  }) || errorRate.add(1)
}
