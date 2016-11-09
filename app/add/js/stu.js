/**
 * Created by lichunyu on 16/9/21.
 * 学生信息模块
 */
angular.module("app.stuModule",["ngRoute"])
    .controller("StudentController",function(
        $scope,StudentService,$location){
        $scope.name = "学生信息管理";
        $scope.model = {
            gender:"m"
        }
        StudentService.getAllStudents(function (data) {
            //将查询到的数据绑定到作用域中
            $scope.students = data;
            console.log(data);
        });
        $scope.add = function(){
            $location.path("/addStudent");
        }

    })
    .controller("StudentAddController",function(
        $scope,StudentService){
        $scope.name = "学生信息添加";
        $scope.stu = {};
        $scope.saveStudent = function(){
            console.log($scope.stu);
            StudentService.addStudent($scope.stu);
        }

    })
    .config(function (StudentServiceProvider,$routeProvider) {
        StudentServiceProvider.setUrl("data/students.json");
        $routeProvider.when("/addStudent",{
            templateUrl:"tpl/stu_add.html",
            controller:"StudentAddController"

        });
    })
    .provider("StudentService",function () {
        this.url = "";
        this.setUrl = function (url) {
            this.url = url;
        };
        this.$get = function ($http) {
            var self = this;
            return {
                //获取所有学生信息
                getAllStudents:function (handler) {
                    $http.get(self.url).success(function (data) {
                        handler(data);
                    });
                },
                addStudent:function (user) {

                    $http.post("add_stu.php",user).success(function () {
                        alert("成功！");
                    });
                }
            };
        }
    });

