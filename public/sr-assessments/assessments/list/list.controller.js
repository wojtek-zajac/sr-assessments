angular.module('srAssessments.assessments')
    .controller('AssessmentsListCtrl', AssessmentsListCtrl)

function AssessmentsListCtrl($resource) {
    const ctrl = this
    const resource = $resource('/assessments')

    resource.get().$promise
        .then(response => {
            ctrl.assessments = response.data.content
        }, () => {
            /* eslint-disable no-undef */
            alert('Something went wrong... Please try again later.')
            /* eslint-enable no-undef */
        })
}
