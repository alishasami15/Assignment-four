export const Blogs = {
    name : 'blogs',
    tittle : 'Blogs',
    type : 'document',
    fields : [
        {
            name : 'name',
            tittle : 'Name',
            type : 'string'   
        },
        {
            name : 'description',
            tittle : 'Description',
            type : 'string'
        },
        {
            name : 'image',
            tittle : 'Image',
            type : 'image'
        },
            {
                name : 'content',
                tittle : 'Content',
                type : 'array',
                of:[
                    ({type:'block'})
                ]
            }
        ]
    }