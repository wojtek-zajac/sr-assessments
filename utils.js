const fetch = require('node-fetch');
const fs = require('fs');
const FormData = require('form-data');
const X_SMART_TOKEN = '956f647ea948462695551b2d520471fa'
module.exports = {
    getAssessments: () => {
        return fetch('https://api.smartrecruiters.com/v1/assessments?status=NEW&sortDir=asc', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-SmartToken': X_SMART_TOKEN
            }
        })
        .then(res => res.json())
    },
    getAssessmetntById: (assesmentOrderId) => {
        return fetch(`https://api.smartrecruiters.com/v1/assessments/${assesmentOrderId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                'X-SmartToken': X_SMART_TOKEN
            }
        })
        .then(res => res.json())
    },
    acceptAssessment: (assesmentOrderId) => {
        const body = { 'message': 'This is an accept message' };
        return fetch(`https://api.smartrecruiters.com/v1/assessments/${assesmentOrderId}/accept`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                'Accept': 'application/json',
                'X-SmartToken': X_SMART_TOKEN
            }
        })
        .then(res => res.json())
    },
    completeAssessment: (assesmentOrderId) => {
        const body = { 'message': 'This is a complete message' };
        return fetch(`https://api.smartrecruiters.com/v1/assessments/${assesmentOrderId}/complete`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                'Accept': 'application/json',
                'X-SmartToken': X_SMART_TOKEN
            }
        })
        .then(res => res.json())
    },
    rejectAssessment: (assesmentOrderId) => {
        const body = { 'message': 'This is a complete message' };
        return fetch(`https://api.smartrecruiters.com/v1/assessments/${assesmentOrderId}/reject`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                'Accept': 'application/json',
                'X-SmartToken': X_SMART_TOKEN
            }
        })
        .then(res => res.json())
    },
    getComments: (assesmentOrderId) => {
        return fetch(`https://api.smartrecruiters.com/v1/assessments/${assesmentOrderId}/comments`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-SmartToken': X_SMART_TOKEN
            }
        })
        .then(res => res.json())
    },
    postComments: (assesmentOrderId) => {
        const body = { 'message': 'This is a comment' };
        return fetch(`https://api.smartrecruiters.com/v1/assessments/${assesmentOrderId}/comments`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                'Accept': 'application/json',
                'X-SmartToken': X_SMART_TOKEN
            }
        })
        .then(res => res.json())
    },
    getCommentById: (assesmentOrderId, commentId) => {
        return fetch(`https://api.smartrecruiters.com/v1/assessments/${assesmentOrderId}/comments/${commentId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-SmartToken': X_SMART_TOKEN
            }
        })
        .then(res => res.json())
    },
    getOffers: () => {
        return fetch('https://api.smartrecruiters.com/v1/offers', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-SmartToken': X_SMART_TOKEN
            }
        })
        .then(res => res.json())
    },
    postOffers: () => {
        const body = {
            catalogId: '90210xxx',
            name: 'Oferta Specjalna',
            category: 'STANDARD',
            description: 'Tylko dla wybranych',
            terms: {
            type: 'BEHAVIORAL_ASSESSMENT',
                price: {
                amount: '0.00',
                    currencyCode: 'USD'
                }
            },
            status: 'ACTIVE',
            availability: {
                expirationDate: '2020-02-26T12:50:02.594+0000',
                industries: [
                    {
                        id: 'health_wellness_fitness'
                    },
                    {
                        id: 'graphic_design'
                    }
                ],
                locations: [
                    {
                        country: 'US',
                        region: 'California',
                        city: 'San Francisco'
                    }
                ],
                companies: [
                    '570ce22ae4b0fb73b024cb5c'
                ],
                specialOffer: '25% OFF'
            }
        };
        return fetch('https://api.smartrecruiters.com/v1/offers', {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                'Accept': 'application/json',
                'X-SmartToken': X_SMART_TOKEN
            }
        })
        .then(res => res.json())
    },
    getOfferById: (offerId) => {
        return fetch(`https://api.smartrecruiters.com/v1/offers/${offerId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                'X-SmartToken': X_SMART_TOKEN
            }
        })
        .then(res => res.json())
    },
    updateOffer: (offerId) => {
        const body = {
            id: offerId,
            catalogId: '90210xxx',
            name: 'Super Oferta',
            description: 'Tylko dla wybranych',
            terms: {
                type: 'BEHAVIORAL_ASSESSMENT',
                price: {
                    amount: '0.00',
                    currencyCode: 'USD'
                }
            },
            availability: {
                companies: [
                    '570ce22ae4b0fb73b024cb5c'
                ]
            }
        };
        return fetch(`https://api.smartrecruiters.com/v1/offers/${offerId}`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                'Accept': 'application/json',
                'X-SmartToken': X_SMART_TOKEN
            }
        })
        .then(res => res.json())
    },
    submitOffer: (offerId) => {
        return fetch(`https://api.smartrecruiters.com/v1/offers/${offerId}/submit`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                'Accept': 'application/json',
                'X-SmartToken': X_SMART_TOKEN
            }
        })
        .then(res => res.json())
    },
    withdrawOffer: (offerId) => {
        return fetch(`https://api.smartrecruiters.com/v1/offers/${offerId}/withdraw`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                'Accept': 'application/json',
                'X-SmartToken': X_SMART_TOKEN
            }
        })
        .then(res => res.json())
    },
    getResults: (assesmentOrderId) => {
        return fetch(`https://api.smartrecruiters.com/v1/assessments/${assesmentOrderId}/results`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                'X-SmartToken': X_SMART_TOKEN
            }
        })
        .then(res => res.json())
    },
    postResults: (assessmentOrderId) => {
        const body = {
            title: 'Results title',
            description: 'Results description',
            passed: true,
            score: '99%',
            result: 'https://www.google.com',
            resultType: 'DOCUMENT'
        };
        return fetch(`https://api.smartrecruiters.com/v1/assessments/${assessmentOrderId}/results`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                'Accept': 'application/json',
                'X-SmartToken': X_SMART_TOKEN
            }
        })
        .then(res => res.json())
    },
    getResultById: (assesmentOrderId, resultId) => {
        return fetch(`https://api.smartrecruiters.com/v1/assessments/${assesmentOrderId}/results/${resultId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-SmartToken': X_SMART_TOKEN
            }
        })
        .then(res => res.json())
    },
    getAttachments: (assesmentOrderId, resultId) => {
        return fetch(`https://api.smartrecruiters.com/v1/assessments/${assesmentOrderId}/results/${resultId}/attachments`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-SmartToken': X_SMART_TOKEN
            }
        })
        .then(res => res.json())
    },
    postAttachments: (assesmentOrderId, resultId) => {
        const form = new FormData();
        form.append('attachment', fs.createReadStream('/Users/wojciech/Desktop/Example CVs/Example One Page CV.pdf'));
        const headers = Object.assign({
            'Accept': 'application/json',
            'X-SmartToken': X_SMART_TOKEN
        }, form.getHeaders())
        return fetch(`https://api.smartrecruiters.com/v1/assessments/${assesmentOrderId}/results/${resultId}/attachments`, {
            method: 'POST',
            body: form,
            headers
        })
        .then(res => res.json())
    },
    getAttachmentById: (assesmentOrderId, resultId, attachmentId) => {
        return fetch(`https://api.smartrecruiters.com/v1/assessments/${assesmentOrderId}/results/${resultId}/attachments/${attachmentId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-SmartToken': X_SMART_TOKEN
            }
        })
        .then(res => res.json())
    },
    updateAttachment: (assesmentOrderId, resultId, attachmentId) => {
        const form = new FormData();
        form.append('attachment', fs.createReadStream('/Users/wojciech/Desktop/Example CVs/to tylko nazwa pliku.pdf'));
        const headers = Object.assign({
            'Accept': 'application/json',
            'X-SmartToken': X_SMART_TOKEN
        }, form.getHeaders())
        return fetch(`https://api.smartrecruiters.com/v1/assessments/${assesmentOrderId}/results/${resultId}/attachments/${attachmentId}`, {
            method: 'POST',
            body: form,
            headers
        })
        .then(res => res.json())
    },
    getConfigs: () => {
        return fetch('https://api.smartrecruiters.com/v1/configs', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-SmartToken': X_SMART_TOKEN
            }
        })
        .then(res => res.json())
    },
    postConfig: () => {
        const body = {
            id: 'assessmentNotificationUrl',
            value: 'http://api.partnercompany.com/notifications'
        };
        return fetch('https://api.smartrecruiters.com/v1/configs', {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                'Accept': 'application/json',
                'X-SmartToken': X_SMART_TOKEN
            }
        })
        .then(res => res.json())
    },
    getConfigById: (configId) => {
        return fetch(`https://api.smartrecruiters.com/v1/configs/${configId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-SmartToken': X_SMART_TOKEN
            }
        })
        .then(res => res.json())
    }
}