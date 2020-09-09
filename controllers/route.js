module.exports = (route) => {
    route.get('/', (req, res) => {
        var data = { title: 'Watch Movie', item: 'watch some movies on pc for at lest 10 hrs' };
        res.render('index', { data: data });
    });
}