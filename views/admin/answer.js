const layout = require('../layout');

module.exports = () => {
	return layout({
		content: `
    <div class="container global-center ">
      <div class="columns is-centered">
        <div class="column">
          <div class="global-center">
            <form action="/answer" method="POST">
              <h1 class="title has-text-centered"></h1>
              <div class="field">
                <label class="label">Sumbit an answer to the database:</label>
                <input class="textarea is-medium" name="answer" placeholder="answer field" />
              </div>
              <div class="field">
                <label class="label">Source:</label>
                <input class="input is-medium" name="source" placeholder="Ex: MDN docs, W3Schools, Self - experience, etc" />
              </div>
              <div class="field">
                <label class="label">Tags:</label>
                <input class="input is-medium" name="tags" placeholder="enter tags separated by commas" />
              </div>
                  <p class="help is-danger"></p>
              <div>
                <button class="button is-primary is-medium is-fullwidth">Submit</button>
              </div>
            </form>
            <a href="/#">Have an account? Sign In</a>
          </div>
        </div>
      </div>
    </div>
`
	});
};
