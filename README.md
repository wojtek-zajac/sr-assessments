# Fetch API in Express.js app

## Live preview

The application is up and running at https://smart-assessments.herokuapp.com

## Installation and run

To get started using the app:

* Use the defined node version with `nvm use`
* Install all the app dependencies with `npm i`
* Start a development server with `npm start`
* Altirnatively, start a live preview server with `npm run start:watch`
* App will be running on `http://localhost:8051`

## API

### Assessments

* Get all new assessment orders

    `curl http://localhost:8051/assessments` 
    
* Get assessment order by ID

    `curl http://localhost:8051/assessments/{assessmentOrderId}` 
    
* Accept assessment order

    `curl -X POST http://localhost:8051/assessments/{assessmentOrderId}/accept`
    
* Complete assessment order

    `curl -X POST http://localhost:8051/assessments/{assessmentOrderId}/complete`
    
* Reject assessment order

    `curl -X POST http://localhost:8051/assessments/{assessmentOrderId}/reject`
    

### Comments

* Get comments

    `curl http://localhost:8051/assessments/{assessmentOrderId}/comments`
    
* Post comments

    `curl -X POST http://localhost:8051/assessments/{assessmentOrderId}/comments`
    
* Get comment by ID

    `curl http://localhost:8051/assessments/{assessmentOrderId}/comments/{commentId}`

### Offers

* Get offers

    `curl http://localhost:8051/offers`

* Post offers

    `curl -X POST http://localhost:8051/offers`
    
* Get offer by ID

    `curl http://localhost:8051/offers/{offerId}`
    
* Update offer

    `curl -X POST http://localhost:8051/offers/{offerId}`
    
* Submit offer

    `curl -X POST http://localhost:8051/offers/{offerId}/submit`
    
* Withdraw offer

    `curl -X POST http://localhost:8051/offers/{offerId}/withdraw`

### Results

* Get results

    `curl http://localhost:8051/assessments/{assessmentOrderId}/results/`
    
* Post results

    `curl -X POST http://localhost:8051/assessments/{assessmentOrderId}/results/`
    
* Get result by ID

    `curl http://localhost:8051/assessments/{assessmentOrderId}/results/{resultId}`
    
### Attachments

* Get attachments

    `curl http://localhost:8051/assessments/{assessmentOrderId}/results/{resultId}/attachments`
    
* Post attachment

    `curl -X POST http://localhost:8051/assessments/{assessmentOrderId}/results/{resultId}/attachments`
    
* Get attachment by ID

    `curl http://localhost:8051/assessments/{assessmentOrderId}/results/{resultId}/attachments/{attachmentId}`
    
* Update attachment

    `curl -X POST http://localhost:8051/assessments/{assessmentOrderId}/results/{resultId}/attachments/{attachmentId}`
    
### Configs

* Get configs

    `curl http://localhost:8051/configs`
    
* Post config

    `curl -X POST http://localhost:8051/configs`
    
* Get config by ID

    `curl http://localhost:8051/configs/{configId}`
    
* Update config
    
    `curl -X POST http://localhost:8051/configs/{configId}`
