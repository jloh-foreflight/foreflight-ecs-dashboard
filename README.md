# ForeFlight ECS Dashboard

This app was forked from [Okta React Vite Number Converter Example](https://github.com/oktadev/okta-react-vite-number-converter-example), featuring a dashboard that pulls ECS information and displays it in a simple format.

The frontend stack uses Vite, TypeScript, React, Tailwind, and Bootstrap.
The AWS architecture utilizes:
* API Gateway to invoke AWS Lambda and handle requests
* AWS Lambda to send SQL queries to AWS Config and parse response
* Route53 for domain registration

The project was forked to get a working Okta React Vite implementation deployable on AWS Amplify.

**Prerequisites:**

* [Node](https://nodejs.org/en/) installed
* [Getting Started](#getting-started)
* [Help](#help)
* [License](#license)

## Getting Started

To install this example application, run the following commands:

```bash
git clone https://github.com/jloh-foreflight/foreflight-ecs-dashboard.git
cd foreflight-ecs-dashboard
npm install
```

### Configure your Environment Variables

```bash
touch .env
nano .env
```

Then add the following:
```nano
VITE_API_INVOKE_URL=${VITE_API_INVOKE_URL}
VITE_API_ACCESS_KEY=${VITE_API_ACCESS_KEY}
```

Serve the app using Vite by running `npm run dev`, and login with Okta to see the finished app!

## Help

Please post any questions as issues in this repository.

## License

Apache 2.0, see [LICENSE](LICENSE).
