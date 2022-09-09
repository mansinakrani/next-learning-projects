import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';

//cwd: current working directory , absolute path for overall project - process.cwd()
const postsDirectory = path.join(process.cwd(), 'posts');

export function getPostsFiles() {
    return fs.readdirSync(postsDirectory); // read all the contents synchronously - returns array of strings[array of file names]
}

export function getPostData(postIdentifier) {
    const postSlug = postIdentifier.replace(/\.md$/, ''); // removes the file extension
    const filePath = path.join(postsDirectory, `${postSlug}.md`);
    const fileContent = fs.readFileSync(filePath, 'utf-8'); //support all those Unicode characters
    const { data, content } = matter(fileContent); //used Object destructuring

    const postData = { 
        slug: postSlug,
        ...data,
        content,
    };

    return postData;
}

export function getAllPosts() {
    const postFiles = getPostsFiles();

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