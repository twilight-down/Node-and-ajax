function serializeToJson(form) {
    var result = {};
    //[{name:'emali',value:'用户输入的内容'}{name:'password',value:'用户输入的内容'}]返回的数量根据表单控件生成
    var f = form.serializeArray();
    f.forEach(function(item) {
        // result.email=
        result[item.name] = item.value;
    });
    return result;
}