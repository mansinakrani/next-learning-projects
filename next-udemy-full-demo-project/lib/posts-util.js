import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';

//cwd: current working directory , absolute path for overall project - process.cwd()
const postsDirectory = path.join(process.cwd(), 'posts');

function getPostData(fileName) {
    const filePath = path.join(postsDirectory, fileName);
    const fileContent = fs.readFileSync(filePath, 'utf-8'); //support all those Unicode characters
    const { data, content } = matter(fileContent); //used Object destructuring

    const postSlug = fileName.replace(/\.md$/, ''); // removes the file extension
    const postData = { 
        slug: postSlug,
        ...data,
        content,
    };

    return postData;
}

export function getAllPosts() {
    const postFiles = fs.readdirSync(postsDirectory); // read all the contents synchronously - returns array of strings[array of file names]

    const allPosts = postFiles.map(postFile => {
        return getPostData(postFile);
    });

    const sortedPosts = allPosts.sort((postA, postB) => postA.date > postB.date ? -1 : 1);

    return sortedPosts;
}

export function getFeaturedPosts() {
    const allPosts = getAllPosts();
  
    const featuredPosts = allPosts.filter(post => post.isFeatured);
  
    return featuredPosts;
}