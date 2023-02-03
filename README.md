# Introduction 
This is a pet anglular project for students to run it in Azure Cloud via app service (web app)

# Build and start application locally
This section is describing in how to build and run your [![Angular][Angular.io]][Angular-url] application
1. Install npm 
2. Navigate to the project folder
3. Run npm install
  ```sh
  npm install
  ```
3. Build application npm run build
  ```sh
  npm run build
  ```
5. To start application from your local execute npm start
  ```sh
  npm start
  ```

# Azure pipeline creation

### Prerequisites
1. Create a service connection from the Azure DevOps organization to the azure subscription
2. Deploy app service with nodejs 14 framework
3. Deploy application insights with app service if you want to track the page view logs (optional steps if you want to use this integration)

This section is explaining on how to build and deploy your application to the azure Cloud
1. Add yml file inside the application root folder or any under the root one
2. According to the example add pipeline steps
3. In the line 8 add your app service name
4. In the line 86 add your service connection name
5. In the line 90 update the resource group name

### Application inisghts integration
1. Fetch application insights instrumentation key from the Azure portal 
2. Navigate to the path src\app\logging.service.ts 
3. in Line 10 add your application inisghts key
