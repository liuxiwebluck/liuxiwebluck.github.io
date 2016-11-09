/**
 * Created by lichunyu on 16/9/21.
 * 教师信息模块
 */
angular.module("app.teaModule",[])
    .controller("TeacherController",function($scope){
        $scope.name = "教师信息管理";
    })
    .factory("TeacherService",function () {
        //学生服务
        return {

        }
    });

