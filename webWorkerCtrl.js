
// webWorkerCtrl.js
webworker.controller('webWorkerCtrl', ['$scope', '$q', function ($scope, $q) {
$scope.workerReplyUI;
$scope.callWebWorker = function () {
var worker = new Worker('worker.js');
var defer = $q.defer();
worker.onmessage = function(e) {
defer.resolve(e.data);
worker.terminate();
};
worker.postMessage("http://jsonplaceholder.typicode.com/users");
return defer.promise;
}
$scope.callWebWorker().then(function (workerReply) {
$scope.workerReplyUI = workerReply;
});
}]);