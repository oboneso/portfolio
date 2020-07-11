const layout = require('../layout');

module.exports = () => {
	return layout({
		content: `
      <div class="container">
      <div class="columns is-centered">
        <div class="column is-one-quarter">
          <form method="POST">
            <h1 class="title has-text-centered">Ask A Question</h1>
            <div class="field">
              <label class="label">Question</label>
              <input class="input is-medium" name="question" placeholder="question field" />
              <p class="help is-success"></p>
            </div>
            <div class="field">
              <label class="label">Answer</label>
              <input class="textarea is-medium" name="answer" placeholder="answer field" />
              <p class="help is-danger"></p>
            </div>
            <div>
              <div class="notification is-primary is-light">
                <strong>Sent. Thank you!</strong>
              </div>
            </div>
          </form>
          <a href="/#">Have an account? Sign In</a>
        </div>
      </div>
    </div>
    `
	});
};
