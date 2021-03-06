const assessmentService = require('./services/assessment-service')
const commentService = require('./services/comment-service')
const offerService = require('./services/offer-service')
const resultService = require('./services/result-service')
const attachmentService = require('./services/attachment-service')
const configService = require('./services/config-service')
const notificationService = require('./services/notification-service')
const inlineAssessmentService = require('./services/inline-assessment-service')

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 8051

app.use(express.static(`${__dirname}/`))
app.use(bodyParser.json())

app.set('views', './views')
app.set('styles', './styles')

app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('index', {title: 'SmartRecruiters Assessments App'})
})

app.get('/quick-test/:assessmentOrderId', (req, res) => {
    res.render('quick-test/index', {title: 'Quick HTML test'})
})

app.get('/google-tag-manager', (req, res) => {
    res.render('google-tag-manager/index', {title: 'Google Tag Manager'})
})

app.get('/inline-assessment/:applicationOperationId', (req, res) => {
    res.render('inline-assessment/index', {title: 'Quick HTML test'})
})

app.get('/inline-assessment-result', (req, res) => {
    res.render('inline-assessment/result', {passed: req.query.passed})
})

// ASSESSMENTS
app.get('/assessments', (req, res) => {
    assessmentService.getAssessments()
        .then(data => {
            res.send({data})
        })
        .catch(err => {
            res.send(err)
        })
})

app.get('/assessments/:assessmentOrderId', (req, res) => {
    assessmentService.getAssessmentById(req.params.assessmentOrderId)
        .then(data => {
            res.send({data})
        })
        .catch(err => {
            res.send(err)
        })
})

app.post('/assessments/:assessmentOrderId/accept', (req, res) => {
    assessmentService.acceptAssessment(req.params.assessmentOrderId)
        .then(data => {
            res.send({data})
        })
        .catch(err => {
            res.send(err)
        })
})

app.post('/assessments/:assessmentOrderId/complete', (req, res) => {
    assessmentService.completeAssessment(req.params.assessmentOrderId)
        .then(data => {
            res.send({data})
        })
        .catch(err => {
            res.send(err)
        })
})

app.post('/assessments/:assessmentOrderId/reject', (req, res) => {
    assessmentService.rejectAssessment(req.params.assessmentOrderId)
        .then(data => {
            res.send({data})
        })
        .catch(err => {
            res.send(err)
        })
})

// COMMENTS
app.get('/assessments/:assessmentOrderId/comments', (req, res) => {
    commentService.getComments(req.params.assessmentOrderId)
        .then(data => {
            res.send({data})
        })
        .catch(err => {
            res.send(err)
        })
})

app.post('/assessments/:assessmentOrderId/comments', (req, res) => {
    commentService.postComments(req.params.assessmentOrderId)
        .then(data => {
            res.send({data})
        })
        .catch(err => {
            res.send(err)
        })
})

app.get('/assessments/:assessmentOrderId/comments/:commentId', (req, res) => {
    commentService.getCommentById(req.params.assessmentOrderId, req.params.commentId)
        .then(data => {
            res.send({data})
        })
        .catch(err => {
            res.send(err)
        })
})

// OFFERS
app.get('/offers', (req, res) => {
    offerService.getOffers()
        .then(data => {
            res.send({data})
        })
        .catch(err => {
            res.send(err)
        })
})

app.post('/offers', (req, res) => {
    offerService.postOffers()
        .then(data => {
            res.send({data})
        })
        .catch(err => {
            res.send(err)
        })
})

app.get('/offers/:offerId', (req, res) => {
    offerService.getOfferById(req.params.offerId)
        .then(data => {
            res.send({data})
        })
        .catch(err => {
            res.send(err)
        })
})

app.post('/offers/:offerId', (req, res) => {
    offerService.updateOffer(req.params.offerId)
        .then(data => {
            res.send({data})
        })
        .catch(err => {
            res.send(err)
        })
})

app.post('/offers/:offerId/submit', (req, res) => {
    offerService.submitOffer(req.params.offerId)
        .then(data => {
            res.send({data})
        })
        .catch(err => {
            res.send(err)
        })
})

app.post('/offers/:offerId/withdraw', (req, res) => {
    offerService.withdrawOffer(req.params.offerId)
        .then(data => {
            res.send({data})
        })
        .catch(err => {
            res.send(err)
        })
})

// RESULTS
app.get('/assessments/:assessmentOrderId/results', (req, res) => {
    resultService.getResults(req.params.assessmentOrderId)
        .then(data => {
            res.send({data})
        })
        .catch(err => {
            res.send(err)
        })
})

app.post('/assessments/:assessmentOrderId/results', (req, res) => {
    resultService.postResults(req.params.assessmentOrderId)
        .then(data => {
            res.send({data})
        })
        .catch(err => {
            res.send(err)
        })
})

app.get('/assessments/:assessmentOrderId/results/:resultId', (req, res) => {
    resultService.getResultById(req.params.assessmentOrderId, req.params.resultId)
        .then(data => {
            res.send({data})
        })
        .catch(err => {
            res.send(err)
        })
})

app.get('/assessments/results/video-stream', (req, res) => {
    resultService.getVideoStreamUrl(req, res)
})

// ATTACHMENTS
app.get('/assessments/:assessmentOrderId/results/:resultId/attachments', (req, res) => {
    attachmentService.getAttachments(req.params.assessmentOrderId, req.params.resultId)
        .then(data => {
            res.send({data})
        })
        .catch(err => {
            res.send(err)
        })
})

app.post('/assessments/:assessmentOrderId/results/:resultId/attachments', (req, res) => {
    attachmentService.postAttachments(req.params.assessmentOrderId, req.params.resultId)
        .then(data => {
            res.send({data})
        })
        .catch(err => {
            res.send(err)
        })
})

app.get('/assessments/:assessmentOrderId/results/:resultId/attachments/:attachmentId', (req, res) => {
    attachmentService.getAttachmentById(req.params.assessmentOrderId, req.params.resultId, req.params.attachmentId)
        .then(data => {
            res.send({data})
        })
        .catch(err => {
            res.send(err)
        })
})

app.post('/assessments/:assessmentOrderId/results/:resultId/attachments/:attachmentId', (req, res) => {
    attachmentService.updateAttachment(req.params.assessmentOrderId, req.params.resultId, req.params.attachmentId)
        .then(data => {
            res.send({data})
        })
        .catch(err => {
            res.send(err)
        })
})

// CONFIGS
app.get('/configs', (req, res) => {
    configService.getConfigs()
        .then(data => {
            res.send({data})
        })
        .catch(err => {
            res.send(err)
        })
})

app.post('/configs', (req, res) => {
    configService.postConfig()
        .then(data => {
            res.send({data})
        })
        .catch(err => {
            res.send(err)
        })
})

app.get('/configs/:configId', (req, res) => {
    configService.getConfigById(req.params.configId)
        .then(data => {
            res.send({data})
        })
        .catch(err => {
            res.send(err)
        })
})

app.post('/configs/:configId', (req, res) => {
    configService.updateConfig(req.params.configId)
        .then(data => {
            res.send({data})
        })
        .catch(err => {
            res.send(err)
        })
})

// HANDLE SR NOTIFICATIONS
app.post('/notifications', (req, res) => {
    notificationService.processAssessmentOrder(req, res)
})

// INLINE ASSESSMENT
app.post('/inline-assessment/order', (req, res) => {
    inlineAssessmentService.orderAssessment(req, res)
})

app.post('/inline-assessment/submit/:applicationOperationId', (req, res) => {
    inlineAssessmentService.submitResult(req, res)
})

app.listen(PORT, () => console.log(`The Smart Assessments app is listening on port ${PORT}!`))
