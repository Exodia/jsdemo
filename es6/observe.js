/**
 * Created with JetBrains WebStorm.
 * User: Exodia
 * Date: 12-12-6
 * Time: 下午11:37
 * To change this template use File | Settings | File Templates.
 */
/**
 * observe让我们能够观察到指定对象的变化，包括属性的增加，删除，更新，重配置
 */

var todoModel = {
    label: 'Default',
    completed: false
};
// Which we then observe
Object.observe(todoModel, function(changes) {
    changes.forEach(function(change, i) {
        console.log(change);
        /*
         What property changed? change.name
         How did it change? change.type
         Whats the current value? change.object[change.name]
         */
    });
});
// Examples
todoModel.label = 'Buy some more milk';
/*
 label changed
 It was changed by being updated
 Its current value is 'Buy some more milk'
 */
todoModel.completeBy = '01/01/2013';
/*
 completeBy changed
 It was changed by being new
 Its current value is '01/01/2013'
 */
delete todoModel.completed;
/*
 completed changed
 It was changed by being deleted
 Its current value is undefined
 */