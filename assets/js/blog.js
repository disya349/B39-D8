let dataBlog = []

function addBlog(event){
    event.preventDefault()
    
    let title = document.getElementById("input-blog-title").value
    let content = document.getElementById("input-blog-content").value
    let startDate = document.getElementById("input-start-date").value
    let endDate = document.getElementById("input-end-date").value
    let image = document.getElementById("input-blog-image").files

    let nodejs = document.getElementById("node-js").checked
    if(nodejs){
        nodejs = document.getElementById("node-js").value
    } else {
    }

    let java = document.getElementById("java").checked
    if(java){
        java = document.getElementById("java").value
    } else {
    }

    let react = document.getElementById("react").checked
    if(react){
        react = document.getElementById("react").value
    } else {
    }    

    let python = document.getElementById("python").checked
    if(python){
        python = document.getElementById("python").value
    } else {
    }    

    image = URL.createObjectURL(image[0])

    startDate = new Date(startDate)
    endDate = new Date(endDate)

    startDate = startDate.getMonth()
    endDate = endDate.getMonth()

    let duration = endDate - startDate

    let blog = {
        title,
        content,
        image,
        duration,
        nodejs,
        java,
        react,
        python
    }

    dataBlog.push(blog)
    renderBlog()
}

function renderBlog(){
    document.getElementById("contents").innerHTML = ''
    console.log(dataBlog);
    for (let index = 0; index < dataBlog.length; index++) {
        document.getElementById("contents").innerHTML += 
        `
        <div class="blog-list-item">
        <div class="blog-image">
        <img src="${dataBlog[index].image}" alt="" />
        </div>
        
            <div class="blog-content">
                <h1>
                    <a href="blog-detail.html" target="_blank">
                    ${dataBlog[index].title}</a>
                </h1>
                
                <div class="detail-blog-content">
                    <p>Durasi ${dataBlog[index].duration} bulan</p>
                </div>
                
                <p>
                    ${dataBlog[index].content}
                </p>

                <span class="span"><p> </p></span>

                <div class="blog-tech">
                    <div>
                        <i class="fa-brands fa-${dataBlog[index].nodejs} fa-2xl"></i>
                    </div>
                    <div>
                        <i class="fa-brands fa-${dataBlog[index].java} fa-2xl"></i>
                    </div>
                    <div>
                        <i class="fa-brands fa-${dataBlog[index].react} fa-2xl"></i>
                    </div>
                    <div>
                        <i class="fa-brands fa-${dataBlog[index].python} fa-2xl"></i>
                    </div>
                </div>

                <div class="btn-group">
                    <button class="btn-edit">Edit Post</button>
                    <button class="btn-post">Post Blog</button>
                </div>
            </div>
        </div>
        `
    }
}
