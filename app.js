let endpoint = process.env.endpoint

endpoint ? "" : endpoint = "http://127.0.0.1:3000";

const getRequest = () => {
  const query = "?input=" + Math.random().toString(36).substr(2, 7);

  const queryRequest = endpoint + query;

  fetch(queryRequest, {
    method: "GET",
    headers: {
      "Content-Type": "text/html",
    },
  })
    .then((response) =>
      response ? response.toString() : "Server did not respond."
    )
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

const postRequest = () => {
  const payload = {
    context: "docker-container",
    id: Date.now(),
    data: Math.random().toString(36).substr(2, 7),
  };

  fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((response) =>
      response ? response.toString() : "Server did not respond."
    )
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

setInterval(getRequest, 5000);

setInterval(postRequest, 5000);
