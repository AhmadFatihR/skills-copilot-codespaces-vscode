function skillsMember() {
    return{
        restrict: 'E',
        templateUrl: 'modules/member/member.html',
        controller:'SkillsMemberController',
        controllerAs:'vm',
        bindToController:true,
        scope:{
            member:'m'
        }
    };
}