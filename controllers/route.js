module.exports = (route) => {
    route.get('/', (req, res) => {
        var data = [{ title: 'Watch Movie', item: 'watch some movies on pc for at lest 10 hrs' }, { title: 'Watch Song', item: 'watch some movies on pc for at lest 10 hrs' }, { title: 'Watch Anime', item: 'watch some movies on pc for at lest 10 hrs' }];
        res.render('index', { data: data });
    });
    route.post('/', (req, res) => {
        var data = [{ title: 'Watch Movie', item: 'watch some movies on pc for at lest 10 hrs' }, { title: 'Watch Song', item: 'watch some movies on pc for at lest 10 hrs' }, { title: 'Watch Anime', item: 'watch some movies on pc for at lest 10 hrs' }];
        res.render('index', { data: data });
    });
}