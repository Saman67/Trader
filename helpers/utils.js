exports.removeDuplicateIds = function(ids) {
    var temp = {};
    for (var i = 0; i < ids.length; i++)
        if (ids[i] && !isNaN(ids[i]))
            temp[ids[i]] = true;

    ids = [];
    for (var id in temp)
        ids.push(id);

    return ids;
};
