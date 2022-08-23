const express = require('express')

const app = express()
const port = 1000

app.set('view engine', 'hbs')
app.use('/assets', express.static(__dirname + '/assets'))
app.use(express.urlencoded({extended: false}))

let dataBlog = [
    {
        title: 'welcome',
        content: 'welcome',
        duration: '3',
        author: 'Dicki Syafrudin',
    }
]

app.get('/', function(request, response){
    let data = dataBlog.map(function(item){
        return {
            ...item
        }
    })
    
    response.render('index', {dataBlog: data})
})

app.get('/contact', function(request, response){
    response.render('contact')
})

app.get('/blog-detail/:id', function(request, response){    
    let id = request.params.id
    console.log(id);

    let data = dataBlog[id]
    data = {
        title: data.title,
        content: data.content,
        duration: data.duration,
        startDate: data.startDate,
        endDate: data.endDate,
        author: data.author
    }

    response.render('blog-detail', {data})
})

app.get('/add-project', function(request, response){
    response.render('add-project')
})

app.post('/add-project', function(request, response){
    let title = request.body.inputName
    let content = request.body.inputMessage
    let startDate = request.body.startDate
    let endDate = request.body.endDate

    start = new Date(startDate)
    end = new Date(endDate)

    startDated = start.getMonth()
    endDated = end.getMonth()

    let duration = endDated - startDated

    let blog = {
        title,
        content,
        author: "Dicki Syafrudin",
        startDate,
        endDate,
        duration
    }

    dataBlog.push(blog)

    response.redirect('/')
})

app.get('/edit-project/:id', function(request, response){
    let id = request.params.id
    
    let data = {
        title: dataBlog[id].title,
        content: dataBlog[id].content,
        duration: dataBlog[id].duration
    }

    response.render('edit-project', {id, data})
})

app.post('/edit-project/:id', function(request, response){
    let id = request.params.id

    
    dataBlog[id].title = request.body.inputName
    dataBlog[id].content = request.body.inputMessage
    dataBlog[id].startDate = request.body.startDate
    dataBlog[id].endDate = request.body.endDate
    
    start = new Date(request.body.startDate)
    end = new Date(request.body.endDate)
    
    startDated = start.getMonth()
    endDated = end.getMonth()
    
    let duration = endDated - startDated
    
    dataBlog[id].duration = duration

    response.redirect('/')
})

app.get('/delete-blog/:id', function(request, response){
    let id = request.params.id
    dataBlog.splice(id, 1)

    response.redirect('/')
})

app.listen(port, function(){
    console.log(`Server running on port ${port}`);
})