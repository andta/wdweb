// 所有模块都通过 define 来定义
define(function(require, exports, module) {

	Bmob.initialize("2ddb608bcec0f04b389200311dce7ef4", "aab9208610642810731c21ad3d5fc233");

	/**
	 *ajax网络请求函数
	 */
	var ajax = function() {
		var bt = document.getElementById("biaoti").value;
		var jy = document.getElementById("jianyao").value;
		var nr = document.getElementById("neirong").value;
		//创建新的Bmob.Object子类
		var db = Bmob.Object.extend("bmob_db_wenZhang");
		var field = new db();

		field.set("db_title", bt);
		field.set("db_description", jy);
		field.set("db_details", nr);

		//保存
		field.save(null, {
			success: success,
			error: throwerror
		});
	};
	/**
	 * 成功响应的回调函数
	 */
	var success = function(results) {
		alert('调试：保存完成');
	};

	/**
	 *异常处理函数 
	 */
	var throwerror = function(results, erro) {
		alert('调试：错误');
	};　　

});