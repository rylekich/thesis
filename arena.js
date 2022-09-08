// by https://gist.github.com/mat-lo/0448c89c19ecaee8ed05385b1237b918

const channel = "body-count"
const bucket = document.querySelector('#arena')
const arenaUrl = "https://www.are.na/kyle-richardson/" + channel 


fetch('https://api.are.na/v2/channels/' + channel + '/contents?sort=position&direction=desc&page=1&amp;per=25')
    .then(response => response.json())
    .then(data => {
        
        const posts = data.contents        
        
        posts.forEach(post => {        
            const original = post.image.original.url
          		        	            
            const link = document.createElement("a")                       
            const img = document.createElement("img")
            
            img.setAttribute("src", original)
            link.setAttribute("href", arenaUrl)

            link.appendChild(img)                  
            bucket.appendChild(link)

        })

    })