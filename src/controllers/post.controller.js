import postData from '../data/posts.json' assert {type:"json"}
const getPostsById = (req,res) => {
    let id = parseInt(req.params.id);
    const posts = postData.filter(p=>p.userId===id);
    res.send(res.json(posts));
}
export {getPostsById};