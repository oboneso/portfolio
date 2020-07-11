const layout = require('../layout');

module.exports = () => {
	return layout({
		content: `
        <div class="container
            <div class="column">
                <div class="global-center">
                    <form action="/question" method="POST">
                    <h1 class="title has-text-centered"></h1>
                    <div class="field">

                        <label class="label">What is your javascript question?</label>
                        <input class="input is-medium" name="question" placeholder="question field" />
                        <p class="help is-danger"></p>
                    </div>
                    <div>
                        <button class="button is-primary is-medium is-fullwidth">Submit</button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
        `
	});
};
