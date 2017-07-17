function data() {

  let main = document.querySelector(".main");
  let data = JSON.parse(this.responseText);
  var template = `
	    <h1>${data.name}</h1>
	    <div class = card>
	      <div class = basics>
	        <h2>The Basics</h2>
	        <div class =userInfo>
	          <ul style="list-style-type:none">
	           <li>Name: ${data.name}
	           <li>Github URL: <a href="https://api.github.com/users/caep2015”>${data.login}</a>
	           <li>Email: <a href="">${data.email}</a>
	           <li>Website: <a href="">${data.blog} </a>
	          </ul>
	        </div>
	      </div>
	      <div class = story>
	        <h2>The Story</h2>
	        <p>${data.bio}</p>
	      </div>
	      <img src="${data.avatar_url}">
	    </div>
	    </card>
	    `
  main.innerHTML = template;

}

let req = new XMLHttpRequest();
req.open("GET", "https://api.github.com/users/caep2015");
req.addEventListener("load", data); req.send();
