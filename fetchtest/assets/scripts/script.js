function request_cats_facts() {
  let base_url = "https://cat-fact.herokuapp.com";

  let query = "/facts";

  fetch(base_url + query)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      build_facts(data);
    })
    .then(function (error) {
      console.log(error);
    });
}

function build_facts(data) {
  let cat_facts_div = document.querySelector(".cats-facts");

  for (let i = 0; i < data.length; i++) {
    let data_point = data[i];
    console.log(data_point["text"]);
    //Build a Div
    let cat_fact = document.createElement("div");

    cat_fact.textContent = data_point["text"];

    cat_facts_div.appendChild(cat_fact);
  }
}
