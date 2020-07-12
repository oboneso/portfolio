const layout = require('../layout');

module.exports = () => {
	return layout({
		content: `
        <div class="container
            <div class="column">
                <div class="global-center">
                    <form action="/signin" method="POST">
                    <h1 class="title has-text-centered">SIGN IN</h1>
                    <div class="field">
                        <label class="label">Email</label>
                        <input class="input is-medium" name="email" placeholder="email" />
                        <p class="help is-danger"></p>
                    </div>
                    <div class="field">
                        <label class="label">Password</label>
                        <input class="input is-medium" name="password" placeholder="password" />
                        <p class="help is-danger"></p>
                    </div>
                    <div>
                        <button class="button is-primary is-medium is-fullwidth">Submit</button>
                    </div>
                    </form>
                    <a href="/#">Have an account? Sign In</a>
                </div>
            </div>
        </div>
        `
	});
};
