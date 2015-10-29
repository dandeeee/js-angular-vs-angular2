module.exports = function(app) {
    app.get('/api/items', getAllItems);
    app.get('/api/item/:id', getItemForId); var ITEMDETAILS_DELAY = 100;

    var items = [{
        id : 1,
        title : "Item 1",
        data : "data 1 data 1 data 1 data 1 data 1 data 1 data 1 data 1 data 1 data 1 data 1 data 1 data 1 data 1 data 1 data 1 data 1 data 1 data 1 data 1 data 1 data 1 data 1"
    },{
        'id' : 2,
        'title' : "Item 2",
        'data' : "data 2 data 2 data 2 data 2 data 2 data 2 data 2 data 2 data 2 data 2 data 2 data 2 data 2 data 2 data 2 data 2 data 2 data 2 data 2 data 2 data 2 data 2 data 2"
    },{
        'id' : 3,
        'title' : "Item 3",
        'data' : "data 3 data 3 data 3 data 3 data 3 data 3 data 3 data 3 data 3 data 3 data 3 data 3 data 3 data 3 data 3 data 3 data 3 data 3 data 3 data 3 data 3 data 3 data 3"
    },{
        'id' : 4,
        'title' : "Item 4",
        'data' : "data 4 data 4 data 4 data 4 data 4 data 4 data 4 data 4 data 4 data 4 data 4 data 4 data 4 data 4 data 4 data 4 data 4 data 4 data 4 data 4 data 4 data 4 data 4"
    },{
        'id' : 5,
        'title' : "Item 5",
        'data' : "data 5 data 5 data 5 data 5 data 5 data 5 data 5 data 5 data 5 data 5 data 5 data 5 data 5 data 5 data 5 data 5 data 5 data 5 data 5 data 5 data 5 data 5 data 5"
    },{
        'id' : 6,
        'title' : "Item 6",
        'data' : "data 6 data 6 data 6 data 6 data 6 data 6 data 6 data 6 data 6 data 6 data 6 data 6 data 6 data 6 data 6 data 6 data 6 data 6 data 6 data 6 data 6 data 6 data 6"
    },{
        'id' : 7,
        'title' : "Item 7",
        'data' : "data 7 data 7 data 7 data 7 data 7 data 7 data 7 data 7 data 7 data 7 data 7 data 7 data 7 data 7 data 7 data 7 data 7 data 7 data 7 data 7 data 7 data 7 data 7"
    }];

    function getAllItems(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.send(items);
    }

    function getItemForId(req, res, next) {
        var item = searchItem(req.params.id)[0];
        res.header("Access-Control-Allow-Origin", "*");
        res.send(item);
    }

    function searchItem(id) {
        return items.filter(function(item) {
            return item.id == id;
        });
    }
};